import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function ExchangeRate() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>1 ETH = 3,461.02 USD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: scale(18), marginHorizontal: scale(20) },
  text: { fontSize: scale(15), color: '#8C8C8C', textAlign: 'center' },
});