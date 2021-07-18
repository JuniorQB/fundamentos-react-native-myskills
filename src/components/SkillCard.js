import React from "react"
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

export function SkillCard({mySkill}) {
    return (
        <TouchableOpacity  style={styles.buttonSkill}>
        <Text style={styles.textSkill}>
          {mySkill}
        </Text>
      </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
  
 
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10

  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
}
)