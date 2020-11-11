import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// use sha-256 and send data on server?
function checkInput(navigation){
  // TODO: check password
  navigation.navigate('ViewPatients')
}

//screen for signing in
export default function SignIn({navigation})  {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          Sign In
        </Text>

        <TextInput style={styles.textinput}
          placeholder="Username"
          onChangeText= {text => setUsername(text)}
        />

        <TextInput style={styles.textinput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText= {text => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => checkInput(navigation)}
          >
            <Text style={styles.buttonText}>Press Here</Text>
        </TouchableOpacity>

        <View style={styles.inLine}>

            <Text style={styles.hyperlink} onPress={() => checkInput(navigation)}>
              Forget Password?
            </Text>

            <Text style={styles.hyperlink} onPress={() => navigation.navigate("SignUp")}>
              Sign Up
            </Text>

        </View>
    </View>
  );
};


const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingHorizontal: 30,
      paddingVertical: 20
    },
    textinput:{
      fontFamily: "serif",
      alignSelf: 'stretch',
      marginBottom: 30,
      fontSize: 20,
      borderBottomColor: '#000',
      borderBottomWidth: 1,
    },
    text:{
      fontFamily: "serif",
      textAlign: 'left',
      alignSelf: 'center',
      fontSize: 32,
    },
    inLine:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 3,
    },
    hyperlink:{
      fontFamily: "serif",
      color: "darkgrey",
      fontSize: 22,
    },
    button:{
      backgroundColor: 'crimson',
      borderRadius:25,
      borderWidth: 1,
      borderColor: '#fff',
      padding: 4,
    },
    buttonText:{
      fontFamily: "serif",
      color: "white",
      alignSelf: 'center',
      fontSize: 32,
    },
  }
);
