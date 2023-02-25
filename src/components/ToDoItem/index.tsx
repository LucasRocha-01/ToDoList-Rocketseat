import { Image, Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from './style';

type Props = {
  text: string,
  checked: boolean,
  onRemove: () => void,
  countCheckeds: (arg0: boolean) => void,
}

export function ToDoitem({ text, checked, onRemove, countCheckeds }: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        fillColor="#5E60CE"
        isChecked={checked}
        onPress={(isChecked: boolean) => {
          countCheckeds(isChecked)
        }}
      />
      <Text style={styles.textTodo}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require('./../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}