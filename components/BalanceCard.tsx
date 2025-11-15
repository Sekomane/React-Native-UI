import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';

type Props = {
  token: string;
  balance: string;
  usdBalance: string;
  isUSD?: boolean;
  isTop?: boolean;
  isBottom?: boolean;
};

export default function BalanceCard({ token, balance, usdBalance, isUSD, isTop, isBottom }: Props) {
  const radius = {
    borderTopLeftRadius: isTop || (!isTop && !isBottom) ? 20 : 0,
    borderTopRightRadius: isTop || (!isTop && !isBottom) ? 20 : 0,
    borderBottomLeftRadius: isBottom || (!isTop && !isBottom) ? 20 : 0,
    borderBottomRightRadius: isBottom || (!isTop && !isBottom) ? 20 : 0,
  };

  return (
    <View style={[styles.card, radius]}>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          {isUSD ? (
            <Text style={styles.dollar}>$</Text>
          ) : (
            <MaterialCommunityIcons name="ethereum" size={scale(30)} color="silver" />
          )}
        </View>

        <Text style={styles.token}>{token}</Text>
        <Ionicons name="chevron-down" size={scale(18)} color="#8E8E93" style={{ marginLeft: scale(4) }} />
      </View>

      <Text style={styles.balance}>{balance}</Text>

      <View style={styles.footer}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.usdBalance}>{usdBalance}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111111',
    padding: scale(18),
    marginHorizontal: scale(18),
  },
  header: { flexDirection: 'row', alignItems: 'center' },
  iconCircle: {
  width: scale(36),
  height: scale(36),
  borderRadius: scale(18),
  backgroundColor: '#1C1C1E',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: scale(12),   
},
  dollar: { fontSize: scale(22), color: '#FFF', fontWeight: '400' },
  token: { fontSize: scale(18), color: '#FFF', fontWeight: '600' },
  balance: {
    fontSize: scale(36),
    color: '#FFF',
    fontWeight: '400',
    letterSpacing: -0.3,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(2),
  },
  balanceLabel: { fontSize: scale(13), color: '#8E8E93' },
  usdBalance: { fontSize: scale(15), color: '#8E8E93' },
});