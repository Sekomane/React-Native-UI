import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function SwitchButton() {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.button}>
        <Ionicons
          name="swap-vertical"
          size={scale(20)}
          color="#FFFFFF"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button: {
    width: scale(44),
    height: scale(44),

    backgroundColor: '#1C1C1E',  // correct dark color
    borderRadius: scale(22),

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#2C2C2E',

    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },

    elevation: 5,
  },

});
