import {Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
//import axios from 'axios';
import {Button} from 'react-native';
export default function LoginScreen({navigation}: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title={'Submit'} onPress={() => navigation.navigate('Main')} />
      {/*<Button title="Go to About" onPress={} />*/}
      <Text>username:{username}</Text>
      <Text>password:{password}</Text>
    </View>
  );
}
