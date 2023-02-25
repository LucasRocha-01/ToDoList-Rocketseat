import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10
  },
  name: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#4EA8DE',
  },
  value: {
    height: 19,
    color: '#d9d9d9',
  },
  backConter: {
    backgroundColor: '#333333',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  }
})