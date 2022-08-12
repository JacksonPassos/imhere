import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';


export function Home() {

  function handleParticipantAdd() {
    if(participants.includes("Jackson")) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')

    }
  }
  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Nâo',
        style: 'cancel'
      },
    ])
  }

  const participants = ['Jackson', 'Aneline', 'Raul', 'Cyntya', 'Valdeci', 'Conceição', 'Neli', 'Valdenor', 'Idaline', 'Luiza']

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
              key={item}
              name={item} 
              onRemove={()=> handleParticipantRemove(item)} 
          />

        )}
          

        
      />


    </View>
  );
}
