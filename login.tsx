import {Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
//import axios from 'axios';
import {Button} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import Main from "./main.tsx";
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const navigation = useNavigation();
  const handleSubmit = () => {
    /*async () => {
        const response = await axios.post('', {
            username,
            password,
          });*/
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
        <Button title={'Submit'} onPress={handleSubmit} />
        {/*<Button title="Go to About" onPress={} />*/}
        <Text>username:{username}</Text>
        <Text>password:{password}</Text>
      </View>
    );
  };
};
export default LoginScreen;
