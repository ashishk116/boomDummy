import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'native-base';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/action/userAction';



const Login = ({ navigation }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('12345');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const handleLogin = () => {
    
    dispatch(loginUser({username, password}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      <Input
        placeholder="Email"
        size="lg"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <Input
        size="lg"
        placeholder="Password"
        type="password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}

      <Button onPress={handleLogin}>Login</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
