import {Pressable,StyleSheet} from 'react-native';
import { IconButton as PaperIconButton } from 'react-native-paper';

function IconButton({icon, color, onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed }>
      <PaperIconButton icon={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});
