import {Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
//import axios from 'axios';
import {Button} from 'react-native';
import axios from 'axios';
export default function LoginScreen(/*{navigation}: any*/) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const apiUrl = 'https://192.168.85.1:8081/api/auth/login';

    const loginData = {username, password};

    axios
      .post(apiUrl, loginData)
      .then(response => {
        // Başarılı cevap alındığında yapılacak işlemler
        //navigation.navigate('Main');
        console.log('Giriş başarılı:', response.data);
      })
      .catch(error => {
        // Hata durumunda yapılacak işlemler
        console.error('Giriş hatası:', error);
      });
  };

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
      <Button title={'Submit'} onPress={onSubmit} />
      {/*<Button title="Go to About" onPress={} />*/}
      <Text>username:{username}</Text>
      <Text>password:{password}</Text>
    </View>
  );
}
