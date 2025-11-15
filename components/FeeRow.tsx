import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

type Props = { label: string; value: string; highlight?: boolean };

export default function FeeRow({ label, value, highlight = false }: Props) {
  return (
    <View style={styles.row}>
      <Text style={[styles.label, highlight && styles.highlight]}>{label}</Text>
      <Text style={[styles.value, highlight && styles.highlightValue]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: scale(8) },
  label: { fontSize: scale(15), color: '#8C8C8C' },
  value: { fontSize: scale(15), color: '#FFFFFF', fontWeight: '500' },
  highlight: { color: '#FFFFFF', fontWeight: '600' },
  highlightValue: { fontWeight: '700' },
});