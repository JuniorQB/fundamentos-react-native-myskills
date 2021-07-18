import React, {useEffect, useState} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList
} from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export default function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkill] = useState([]);

  const [grettings, setGreetings]= useState('');
  

  function handleAddNewSkill() {
    setMySkill(oldState => [...oldState, newSkill]);
  }

  useEffect(()=>{

    const currentHour = new Date().getHours();

    if(currentHour < 12){
      setGreetings('Good Morning');
    } else if(currentHour>=12 && currentHour < 19) {
      setGreetings('Good Afternoon');
    } else {
      setGreetings('Good Night');
    }

  }, []);

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.greetings}>
        {grettings}
      </Text>


      <TextInput style={styles.input}
      placeholder="New Skill"
      placeholderTextColor="#555"
      onChangeText={setNewSkill}
      />
     
     <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>

     

      <FlatList 
      data={mySkills}
      keyExtractor={item => item}
      renderItem={({item }) => (<SkillCard mySkill={item}/>)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
      flex: 1, 
      backgroundColor:'#121015',
      paddingVertical: 70,
      paddingHorizontal:30
    },
    title: {
      color: '#fff',
      fontSize:24,
      fontWeight: 'bold'

    },
    input : {
      backgroundColor: '#1f1e25',
      color: '#fff',
      fontSize: 18,
      padding: Platform.OS ==='ios'?15:10,
      marginTop: 30,
      borderRadius: 7
    },
   
    greetings: {
      color: '#fff'
    }
  }
)