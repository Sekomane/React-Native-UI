import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

type Props = {
  token: string;
  balance: string;
  usdBalance: string;
  isUSD?: boolean;
  isTop?: boolean;
  isBottom?: boolean;
};

export default function BalanceCard({
  token,
  balance,
  usdBalance,
  isUSD,
  isTop,
  isBottom
}: Props) {

  const radius = {
    borderTopLeftRadius: isTop ? scale(20) : 0,
    borderTopRightRadius: isTop ? scale(20) : 0,
    borderBottomLeftRadius: isBottom ? scale(20) : 0,
    borderBottomRightRadius: isBottom ? scale(20) : 0,
  };

  return (
    <View style={[styles.card, radius]}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          {isUSD ? (
            <Text style={styles.dollar}>$</Text>
          ) : (
            <MaterialCommunityIcons
              name="ethereum"
              size={scale(26)}
              color="#8E8E93"
            />
          )}
        </View>

        <Text style={styles.token}>{token}</Text>

        <Ionicons
          name="chevron-down"
          size={scale(16)}
          color="#8E8E93"
          style={styles.chevron}
        />
      </View>

      {/* Balance */}
      <Text style={styles.balance}>
        {balance}
      </Text>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.balanceLabel}>
          Balance
        </Text>

        <Text style={styles.usdBalance}>
          {usdBalance}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#111111',
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(20),
    marginHorizontal: scale(18),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },

  iconCircle: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },

  dollar: {
    fontSize: scale(20),
    color: '#FFF',
    fontWeight: '500',
  },

  token: {
    fontSize: scale(16),
    color: '#FFF',
    fontWeight: '600',
  },

  chevron: {
    marginLeft: scale(4),
  },

  balance: {
    fontSize: scale(34),
    color: '#FFFFFF',
    fontWeight: '400',
    marginBottom: verticalScale(12),
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  balanceLabel: {
    fontSize: scale(13),
    color: '#8E8E93',
  },

  usdBalance: {
    fontSize: scale(14),
    color: '#8E8E93',
  },

});
