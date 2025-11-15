import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';

export default function SwitchButton() {
  return (
    <TouchableOpacity style={styles.container}>
     <View style={[styles.button, { position: 'relative' }]}>
  <Ionicons name="arrow-up" size={scale(16)} color="#FFF" style={[styles.arrow, { top: 8 }]} />
  <Ionicons name="arrow-down" size={scale(16)} color="#FFF" style={[styles.arrow, { bottom: 8}]} />
</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 45,
    backgroundColor: '#111111',
    borderRadius: 12,          
    borderWidth: 0.5,
    borderColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
 arrow: {
  position: 'absolute',
  lineHeight: scale(13),
},
});