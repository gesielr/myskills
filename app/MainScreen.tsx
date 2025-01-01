import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default function MainScreen() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/fotoperfil.jpeg')} style={styles.profileImage} />
      <Text style={styles.name}>Carlos Gesiel Rebelo</Text>
      <TouchableOpacity style={styles.button} onPress={() => openLink('www.linkedin.com/in/carlos-rebelo-3a5936209')}>
        <Text style={styles.buttonText}>LinkedIn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => openLink('https://github.com/gesielr')}>
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => openLink('mailto:carlosgesiell@gmail.com')}>
        <Text style={styles.buttonText}>E-mail</Text>
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
    padding: 20,               // (Opcional) Espaçamento interno
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,          // Espessura da borda
    borderColor: '#FFFFFF',  // Cor da borda (branca)
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000'
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 5,
    marginVertical: 15,
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
    textAlign: 'center',      // Apenas para garantir
  },
  
});
