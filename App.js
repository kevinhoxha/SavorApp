import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [activeTab, setActiveTab] = useState('login');

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };

  const handleRegister = () => {
    // Implement your registration logic here
  };

  const toggleTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.jpg')}
        style={styles.logo}
      />
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'login' && styles.activeTab]}
          onPress={() => toggleTab('login')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'login' && styles.activeTabText,
            ]}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'register' && styles.activeTab]}
          onPress={() => toggleTab('register')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'register' && styles.activeTabText,
            ]}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'login' && (
        <View style={styles.tabContent}>
          <View style={styles.tabContentInner}>
            <TextInput
              placeholder="Username"
              style={[
                styles.input,
                styles.lightGreyBackground,
                styles.noBorder,
                styles.blackPlaceholder,
                styles.inputFieldLarge, // Increase the size of the input fields
              ]}
              value={loginUsername}
              onChangeText={(text) => setLoginUsername(text)}
            />
            <TextInput
              placeholder="Password"
              style={[
                styles.input,
                styles.lightGreyBackground,
                styles.noBorder,
                styles.blackPlaceholder,
                styles.inputFieldLarge, // Increase the size of the input fields
              ]}
              value={loginPassword}
              onChangeText={(text) => setLoginPassword(text)}
              secureTextEntry
            />
            <TouchableOpacity style={[styles.button, styles.curvedButton, styles.buttonSpacing]} onPress={handleLogin}>
              <Text style={[styles.buttonText, styles.buttonTextSize]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {activeTab === 'register' && (
        <View style={styles.tabContent}>
          <View style={styles.tabContentInner}>
            <TextInput
              placeholder="Email"
              style={[
                styles.input,
                styles.lightGreyBackground,
                styles.noBorder,
                styles.blackPlaceholder,
                styles.inputFieldLarge, // Increase the size of the input fields
              ]}
              value={registerEmail}
              onChangeText={(text) => setRegisterEmail(text)}
            />
            <TextInput
              placeholder="Username"
              style={[
                styles.input,
                styles.lightGreyBackground,
                styles.noBorder,
                styles.blackPlaceholder,
                styles.inputFieldLarge, // Increase the size of the input fields
              ]}
              value={registerUsername}
              onChangeText={(text) => setRegisterUsername(text)}
            />
            <TextInput
              placeholder="Name"
              style={[
                styles.input,
                styles.lightGreyBackground,
                styles.noBorder,
                styles.blackPlaceholder,
                styles.inputFieldLarge, // Increase the size of the input fields
              ]}
              value={registerName}
              onChangeText={(text) => setRegisterName(text)}
            />
            <TextInput
              placeholder="Password"
              style={[
                styles.input,
                styles.lightGreyBackground,
                styles.noBorder,
                styles.blackPlaceholder,
                styles.inputFieldLarge, // Increase the size of the input fields
              ]}
              value={registerPassword}
              onChangeText={(text) => setRegisterPassword(text)}
              secureTextEntry
            />
            <TouchableOpacity style={[styles.button, styles.curvedButton, styles.buttonSpacing]} onPress={handleRegister}>
              <Text style={[styles.buttonText, styles.buttonTextSize]}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 100,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 18,
  },
  activeTabText: {
    color: 'blue',
  },
  tabContent: {
    flex: 1,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  tabContentInner: {
    width: '100%',
  },
  input: {
    height: 50, // Increase the height of the input fields
    marginBottom: 20, // Increased spacing between input fields
    padding: 10,
  },
  lightGreyBackground: {
    backgroundColor: '#EFF0F6',
    borderRadius: 10,
  },
  noBorder: {
    borderWidth: 0,
  },
  blackPlaceholder: {
    color: 'black',
  },
  inputFieldLarge: {
    fontSize: 20, // Increased the font size of the input fields
  },
  button: {
    backgroundColor: 'blue',
    padding: 15, // Increased spacing for buttons
    alignItems: 'center',
  },
  curvedButton: {
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonSpacing: {
    marginTop: 20, // Increased spacing between buttons
  },
  buttonTextSize: {
    fontSize: 18, // Reverted to the original font size for button text
  },
});

export default App;
