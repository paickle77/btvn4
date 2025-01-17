import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ViewComponent() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.baseText}>
          Em vào đời bằng{' '}
          <Text style={[styles.textBold, { color: 'red' }]}>vang đỏ</Text>, anh vào đời bằng{' '}
          <Text style={[styles.textBold, { color: 'yellow' }]}>nước trà</Text>.
        </Text>
        <Text style={[styles.baseText, styles.textCenter]}>
          Bằng cơn mưa thơm{' '}
          <Text style={[styles.textItalic, { fontSize: 20 }]}>mùi đất</Text>,{' '}
          <Text style={[{ fontSize: 10 }]}>bằng hoa dại mọc trước nhà.</Text>
        </Text>

        <Text style={[styles.baseText, styles.textCenter]}>
          Em vào đời bằng kế hoạch, anh vào đời bằng <Text style={styles.textBold}>mộng mơ</Text>.
        </Text>
        <Text style={[styles.baseText, styles.textCenter]}>
          Lý trí em là <Text style={[styles.textUnderline, { letterSpacing: 2 }]}>công cụ</Text>,{' '}
          còn trái tim anh là <Text style={[styles.textUnderline, { letterSpacing: 2 }]}>động cơ</Text>.
        </Text>
        <Text style={[styles.baseText, styles.textRight]}>
          Em vào đời nhiều đồng nghiệp, anh vào đời nhiều thân tình.
        </Text>
        <Text style={[styles.baseText, styles.textBold, styles.textCenter, styles.textOrange]}>
          Anh chỉ muốn chân mình đạp đất, không muốn đạp ai dưới chân mình.
        </Text>
        <Text style={[styles.baseText, styles.textCenter]}>
          Em vào đời bằng <Text style={styles.textBlue}>mây trắng</Text>, em vào đời bằng{' '}
          <Text style={styles.textOrange}>nắng xanh</Text>.
        </Text>
        <Text style={[styles.baseText, styles.textCenter]}>
          Em vào đời bằng <Text style={styles.textGreen}>đại lộ</Text> và con đường đời{' '}
          <Text style={styles.textGold}>vầng ánh</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
