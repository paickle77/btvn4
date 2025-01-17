import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Alert,
  Pressable,
  StyleSheet,
  BackHandler,
} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Hàm xử lý khi nhấn nút Back
  const handleBackPress = () => {
    if (modalVisible) {
      Alert.alert('Thông báo', 'Bạn đã tắt modal bằng nút back của thiết bị', [
        { text: 'OK', onPress: () => setModalVisible(false) },
      ]);
      return true; // Chặn hành động mặc định của nút Back
    }
    return false; // Tiếp tục hành động mặc định nếu modal không hiển thị
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => backHandler.remove(); // Cleanup khi component bị hủy
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Mở Modal</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert(
            'Thông báo',
            'Bạn đã tắt modal bằng nút back của thiết bị',
            [{ text: 'OK', onPress: () => setModalVisible(false) }]
          );
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Ẩn Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#34C759',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
