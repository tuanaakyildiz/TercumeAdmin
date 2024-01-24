import React from 'react';
/*
import { View, Text, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import {Button} from "react-native-paper";

const FormScreen = () => {
    return (
        <Formik
            initialValues={{username:'', password:''}}
            onSubmit={(values) => console.log('submitted', values}
        >
            {({handleChange, handleSubmit, values})}=>(
            <View>
                <Text>Username</Text>
                <TextInput
                    style={styles.input}
                    value={values.username}
                    onChangeText={handleChange('username')}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                />
                <Button onPress={handleSubmit} title="Submit"/>
            </View>
            )}
        </Formik>
    )
}


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black';
        borderWidth: 1
    }
})
*/

import {Text, View} from 'react-native';

export default function Main() {
  return (
    <View>
      <Text>Main page</Text>
    </View>
  );
}
