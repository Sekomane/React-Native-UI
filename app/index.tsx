import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { scale, verticalScale } from 'react-native-size-matters';
import BalanceCard from '../components/BalanceCard';
import SwitchButton from '../components/SwitchButton';
import ExchangeRate from '../components/exchangeRate';
import FeeRow from '../components/FeeRow';
import { Stack } from 'expo-router';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: verticalScale(50) }}>
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={scale(28)} color="#FFF" />
          <Text style={styles.title}>Exchange</Text>
          <View style={styles.bellWrapper}>
            <Ionicons name="notifications-outline" size={scale(26)} color="#8E8E93" />
            <View style={styles.redDot} />
          </View>
        </View>

        <View style={styles.cardsWrapper}>
          <BalanceCard token="ETH" balance="12,695" usdBalance="293.0187" isTop />
          <View style={styles.gap} />
          <BalanceCard token="USD" balance="43,937.4" usdBalance="12,987.21" isUSD isBottom />

          <View style={styles.switchContainer}>
            <SwitchButton />
          </View>
        </View>

        <ExchangeRate />

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy ETH</Text>
        </TouchableOpacity>

        <View style={styles.feeBox}>
          <FeeRow label="Estimate fee" value="4.28 USD" />
          <FeeRow label="You will receive" value="43,941.68 USD" />
          <FeeRow label="Spread" value="0.2%" />
          <FeeRow label="Gas fee" value="0.0045 ETH" />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(55),
  },
  title: { fontSize: scale(17), fontWeight: '600', color: '#FFF' },
  bellWrapper: { position: 'relative' },
  redDot: {
    position: 'absolute',
    top: 1,
    right: -2,
    width: scale(9),
    height: scale(9),
    backgroundColor: '#FF3B30',
    borderRadius: scale(5),
    borderWidth: 2,
    borderColor: '#000',
  },
  cardsWrapper: { marginTop: verticalScale(20), paddingBottom: verticalScale(20) },
  gap: { height: scale(3) },
  switchContainer: {
    marginTop: verticalScale(10),
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#FFF',
    marginHorizontal: scale(20),
    marginTop: verticalScale(15),
    height: scale(56),
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButtonText: { fontSize: scale(17), fontWeight: '400', color: '#000' },
  feeBox: {
    marginTop: verticalScale(20),
    marginHorizontal: scale(15),
    padding: scale(15),
  },
});
