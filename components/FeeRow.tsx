import { StyleSheet, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

type Props = {
  label: string;
  value: string;
  highlight?: boolean;
};

export default function FeeRow({
  label,
  value,
  highlight = false
}: Props) {

  return (
    <View style={styles.row}>

      <Text style={[
        styles.label,
        highlight && styles.highlightLabel
      ]}>
        {label}
      </Text>

      <Text style={[
        styles.value,
        highlight && styles.highlightValue
      ]}>
        {value}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: verticalScale(12),

    borderBottomWidth: 0.5,
    borderBottomColor: '#1C1C1E',
  },

  label: {
    fontSize: scale(14),
    color: '#8E8E93',
  },

  value: {
    fontSize: scale(14),
    color: '#FFFFFF',
    fontWeight: '500',
  },

  highlightLabel: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  highlightValue: {
    fontWeight: '700',
  },

});
