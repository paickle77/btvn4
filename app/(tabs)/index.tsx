import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://amia.vn/wp-content/uploads/2017/09/tranh-phong-canh-vinh-ha-long-989-718x380.jpg' }} 
        style={styles.image} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Chiều rộng
    height: 300, // Chiều cao
    borderRadius: 10, // (Tuỳ chọn) Bo góc
  },
});

export default App;