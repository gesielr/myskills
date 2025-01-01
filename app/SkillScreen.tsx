import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function SkillScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/fotoperfil.jpeg')} style={styles.profileImage} />
      <Text style={styles.skillsTitle}>Minhas Habilidades</Text>
      <View style={styles.skillRow}>
        <Text style={styles.skill}>CSS:</Text>
        <Text style={styles.stars}>★★★★★</Text>
      </View>
      <View style={styles.skillRow}>
        <Text style={styles.skill}>HTML:</Text>
        <Text style={styles.stars}>★★★★★</Text>
      </View>
      <View style={styles.skillRow}>
        <Text style={styles.skill}>React:</Text>
        <Text style={styles.stars}>★★★★☆</Text>
      </View>
      <View style={styles.skillRow}>
        <Text style={styles.skill}>React Native:</Text>
        <Text style={styles.stars}>★★★</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Fala comigo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d4acff',
    borderWidth: 9,          // Espessura da borda
    borderColor: '#6c33bb',  // Cor da borda (branca)
    borderRadius:20,          // (Opcional) Arredonda os cantos da borda
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  skillRow: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    
  },
  skill: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
  stars: {
    fontSize: 19,
    color: '#fffef8',
    
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 5,
    marginTop: 40,
    borderRadius: 5,
    height: 40,
    width: 170,
    justifyContent: 'center', // Alinha verticalmente
    alignItems: 'center',    // Alinha horizontalmente
    borderWidth: 2,          // Espessura da borda
    borderColor: '#FFFFFF',  // Cor da borda (branca)
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
