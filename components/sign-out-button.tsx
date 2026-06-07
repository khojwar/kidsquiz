import { supabase } from '@/lib/supabase'
import { useRouter } from 'expo-router';
import React from 'react'
import { Alert, Button } from 'react-native'

export default function SignOutButton() {
    const router = useRouter();

    async function onSignOutButtonPress() {

    console.debug('SignOutButton - render')
    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error('Error signing out:', error)
    } else {
        Alert.alert('Signed out successfully')
        // Optionally, you can navigate the user back to the sign-in screen here
        router.push('/')
    }
}

  return <Button title="Sign out" onPress={onSignOutButtonPress} />
}