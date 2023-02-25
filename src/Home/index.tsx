import { useState } from 'react'
import { Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Contador } from '../components/Contador'
import { ToDoitem } from '../components/ToDoItem'
import { styles } from './style'

export function Home() {
  const [todoList, setTodoList] = useState([{ nome: 'lucas', checked: true }, { nome: 'Samanta', checked: false }])
  const [inputText, setInputText] = useState('')

  const checkedsTodoList = todoList.filter(item => item.checked === true)

  const [counterDone, setCounterDone] = useState(checkedsTodoList.length)

  function handleAddInputToTodoList() {

    if (inputText.length == 0) {
      setInputText('')
      return Alert.alert("Então...", "Você tem que escrever alguma coisa gracinha")
    }

    let newInput = {
      nome: inputText,
      checked: false
    }

    setTodoList(prevStat => [newInput, ...prevStat])
    setInputText('')
  }

  function handleRemoveThisTodo(inputChecked: boolean, inputText: string) {

    const newTodoList = todoList.filter(item => item.nome != inputText)

    setTodoList(prevStat => newTodoList)

    const checkeds = newTodoList.filter(item => item.checked === true)

    setCounterDone(checkeds.length)
  }

  function handleCountCheckeds(e: Boolean, name: string) {

    todoList.map(item => {
      if (item.nome === name) {
        if (e) {
          item.checked = true
        } else {
          item.checked = false
        }
      }
    })

    let checkeds = todoList.filter(item => item.checked === true)

    setCounterDone(checkeds.length)
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          // onChangeText={text => setParticipantName(text)}
          onChangeText={setInputText}
          value={inputText}
        />
        <TouchableOpacity
          style={styles.btnForm}
          onPress={handleAddInputToTodoList}
        >
          <Image source={require('./../../assets/plus.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.contadores}>
        <Contador name="Criadas" value={todoList.length} />
        <Contador name="Concluidas" value={counterDone} />
      </View>
      <FlatList
        style={styles.flatList}
        keyExtractor={item => item.nome}
        data={todoList}
        renderItem={({ item }) => (
          <ToDoitem text={item.nome} checked={item.checked} countCheckeds={(e) => handleCountCheckeds(e, item.nome)} onRemove={() => handleRemoveThisTodo(item.checked, item.nome)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.ListEmptyComponent}>
            <Image source={require('./../../assets/Clipboard.png')} />
            <Text style={styles.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}

