import { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { supabase } from '@/lib/supabase'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    // The session is already handled by exchangeCodeForSession in your button component.
    // This screen just needs to exist so Expo Router doesn't 404.
    // We redirect away immediately.
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        router.replace('/')        // ← change this to your home/dashboard route
      } else {
        router.replace('/login')   // ← change this to your login route
      }
    }

    checkSession()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  )
}