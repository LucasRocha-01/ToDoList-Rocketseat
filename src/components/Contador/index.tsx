import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

type Props = {
  name: string;
  value: number;
}

export function Contador({ name, value }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.backConter}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  )
}