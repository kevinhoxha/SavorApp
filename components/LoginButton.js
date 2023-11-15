import React from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';

export default function LoginButton() {
  return (
    <SafeAreaView
      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* All corners */}
      <TouchableOpacity style={{ backgroundColor: '#147EFB', padding: 10, borderRadius: 4 }}>
        <Text style={{ color: '#fff' }}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
