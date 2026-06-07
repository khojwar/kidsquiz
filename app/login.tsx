import { Link, Stack } from 'expo-router'
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import GoogleSignInButton from '@/components/social-auth-buttons/google/google-sign-in-button';

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>

          {/* Settings icon */}
          <TouchableOpacity style={styles.settingsBtn}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>

          {/* Owl mascot card */}
          <View style={styles.mascotCard}>
            <Image
              source={require('@/assets/images/sprout-owl.png')}
              style={styles.mascotImage}
              resizeMode="contain"
            />
          </View>

          {/* App name */}
          <Text style={styles.appName}>Sprout</Text>

          {/* Headline */}
          <Text style={styles.headline}>Let's Learn & Play!</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Ready to practice your skills and earn{'\n'}amazing stars?
          </Text>

          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <GoogleSignInButton />

            <TouchableOpacity style={styles.getStartedBtn} activeOpacity={0.85}>
              <Text style={styles.getStartedText}>GET STARTED</Text>
            </TouchableOpacity>
          </View>

          {/* Sign in link */}
          <View style={styles.signInRow}>
            <Text style={styles.signInText}>Already have an account? </Text>
            <Link href="/sign-in">
              <Text style={styles.signInLink}>Sign In</Text>
            </Link>
          </View>

        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF9F0',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFF9F0',
  },
  settingsBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0EDE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIcon: {
    fontSize: 18,
  },
  mascotCard: {
    width: 140,
    height: 140,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  mascotImage: {
    width: 110,
    height: 110,
  },
  appName: {
    fontSize: 22,
    fontWeight: '900',
    color: '#58CC02',
    letterSpacing: 1,
    marginBottom: 20,
    fontFamily: 'Nunito_900Black', // ensure Nunito is loaded via expo-google-fonts
  },
  headline: {
    fontSize: 26,
    fontWeight: '900',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Nunito_900Black',
  },
  subtitle: {
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 36,
    fontFamily: 'Nunito_400Regular',
  },
  buttonsContainer: {
    width: '100%',
    gap: 14,
    marginBottom: 28,
  },
  getStartedBtn: {
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
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1.5,
    fontFamily: 'Nunito_900Black',
  },
  signInRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    color: '#777',
    fontFamily: 'Nunito_400Regular',
  },
  signInLink: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1CB0F6',
    fontFamily: 'Nunito_800ExtraBold',
  },
})