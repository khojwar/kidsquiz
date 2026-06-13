import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

import { Text } from "@react-navigation/elements";
import { Image } from "expo-image";
import * as WebBrowser from "expo-web-browser";

import * as Linking from "expo-linking";

// Tells the browser to safely hand control back to your app after auth
WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton() {
  const router = useRouter();

  function extractParamsFromUrl(url: string) {
    const parsedUrl = new URL(url);
    const hash = parsedUrl.hash.substring(1); // Remove the leading '#'
    const params = new URLSearchParams(hash);

    return {
      access_token: params.get("access_token"),
      expires_in: parseInt(params.get("expires_in") || "0"),
      refresh_token: params.get("refresh_token"),
      token_type: params.get("token_type"),
      provider_token: params.get("provider_token"),
      code: params.get("code"),
    };
  }

  async function onSignInButtonPress() {
    console.debug("onSignInButtonPress - start");

    // Dynamically creates the string: exp://192.168.1.78:8081/--/auth-callback
    const redirectUrl = Linking.createURL("auth-callback");
    // const redirectUrl = 'kidsquiz://auth-callback';
    console.debug("onSignInButtonPress - redirectUrl", { redirectUrl });

    const res = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        // redirectTo: `${expo.scheme}://google-auth`,
        redirectTo: redirectUrl,
        // queryParams: { prompt: 'consent' },
        skipBrowserRedirect: true, // Prevents the browser from auto-redirecting to a broken page
      },
    });

    const googleOAuthUrl = res.data.url;
    console.debug("onSignInButtonPress - googleOAuthUrl", { googleOAuthUrl });

    if (!googleOAuthUrl) {
      console.error("no oauth url found!");
      return;
    }

    // Opens the Google authentication page in a secure native modal
    const result = await WebBrowser.openAuthSessionAsync(
      googleOAuthUrl,
      redirectUrl,
      // `${expo.scheme}://google-auth`,
      { showInRecents: true },
    ).catch((err) => {
      console.error("onSignInButtonPress - openAuthSessionAsync - error", {
        err,
      });
      console.log(err);
    });

    console.debug("onSignInButtonPress - openAuthSessionAsync - result", {
      result,
    });

    // Capture the return parameters and complete sign‑in
    if (result && result.type === "success") {
      console.debug("onSignInButtonPress - openAuthSessionAsync - success");
      const params = extractParamsFromUrl(result.url);
      console.debug("onSignInButtonPress - openAuthSessionAsync - success", {
        params,
      });

      // Supabase OAuth flow returns an authorization code which must be exchanged for a session.
      // Use `exchangeCodeForSession` to handle this correctly.
      if (params.code) {
        console.debug("onSignInButtonPress - exchanging auth code for session");
        const { data, error } = await supabase.auth.exchangeCodeForSession(params.code);
        if (error) {
          console.error("onSignInButtonPress - exchangeCodeForSession error", error);
        } else {
          console.debug("onSignInButtonPress - session established", data);
          // Navigate to the auth callback to finalize login and redirect appropriately.
          router.replace("/auth-callback");
        }
        return;
      }

      // Fallback: if direct access/refresh tokens are provided (unlikely with Supabase), set the session manually.
      if (params.access_token && params.refresh_token) {
        console.debug("onSignInButtonPress - setting session from tokens");
        const { data, error } = await supabase.auth.setSession({
          access_token: params.access_token,
          refresh_token: params.refresh_token,
        });
        if (error) {
          console.error("onSignInButtonPress - setSession error", error);
        } else {
          console.debug("onSignInButtonPress - session set via tokens", data);
          setTimeout(() => {
            router.replace("/(tabs)");
          }, 500);
        }
        return;
      }

      console.error("onSignInButtonPress - no usable auth parameters returned");
    }
  }

  // to warm up the browser
  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <TouchableOpacity
      onPress={onSignInButtonPress}
      style={{
          width: '100%',
          height: 56,
          backgroundColor: '#58CC02',
          borderRadius: 14,
          alignItems: 'center',
          justifyContent: 'center',
          // Duolingo-style 3D bottom shadow
          shadowColor: '#45A800',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 5,
      }}
      activeOpacity={0.8}
    >
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: '900',
          letterSpacing: 1.5,
          fontFamily: 'Nunito_900Black'
        }}
      >
        GET STARTED
      </Text>
    </TouchableOpacity>
  );
}
