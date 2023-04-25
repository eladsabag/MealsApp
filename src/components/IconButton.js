import { Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton as PaperIconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

function IconButton({icon, color, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icon === "star" ? require('../../assets/images/star.png') : require('../../assets/images/star_out.png')} style={{width: 30, height: 30, tintColor: color}} />
    </TouchableOpacity>

    // <TouchableOpacity onPress={onPress}>
    //   <Icon name={icon} size={30} color={color} />
    // </TouchableOpacity>

    // <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed }>
    //   <PaperIconButton icon={icon} size={24} color={color} />
    // </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});
