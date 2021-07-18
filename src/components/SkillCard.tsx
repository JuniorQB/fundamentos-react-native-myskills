import React from "react"
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    TouchableOpacityProps
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  mySkill: string;
}

export function SkillCard({mySkill, ...rest}: SkillCardProps) {
    return (
        <TouchableOpacity  style={styles.buttonSkill}
        {...rest}
        >
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