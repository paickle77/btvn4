import React, { useState } from 'react';
import { View, Text, Alert, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function ViewComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkTrong = () => {
    if (username && password) {
      Alert.alert('Thông Báo', `Đăng nhập thành công!\nTên đăng nhập: ${username}, Mật khẩu: ${password}`);
      setUsername('');
      setPassword('');
    } else {
      Alert.alert('Thông Báo', 'Vui lòng điền đầy đủ thông tin!');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Đăng Nhập</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Tài Khoản"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật Khẩu"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.button}>
          <Button
            color="#FF5733"
            title="Nhấn vào đây"
            onPress={checkTrong}
          />
        </View>
        <Text
          style={styles.text1}
          onPress={() => Alert.alert('Thông Báo', 'Chuyển sang màn hình đăng ký')}
        >
          Chưa có tài khoản? Đăng ký Ngay
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#5DADE2',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  button: {
    width: '90%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    backgroundColor: '#FF5733',
    elevation: 5,
  },
  text1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  baseText: {
    color: 'white',
    fontSize: 16,
    marginVertical: 5,
  },
  textCenter: {
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textItalic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textBlue: {
    color: 'lightblue',
  },
  textOrange: {
    color: 'orange',
  },
  textGreen: {
    color: 'green',
  },
  textGold: {
    color: 'gold',
  },
  textRight: {
    textAlign: 'right',
  },
});