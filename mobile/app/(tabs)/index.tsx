import { Image, StyleSheet, Platform, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#993399', dark: '#993399' }}
      headerImage={
        <Image
          source={require('@/assets/images/nubanklogo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">NUBank</ThemedText>
      </ThemedView>
      <Button color={'#512D78'}
       onPress={() => {
          console.log('You tapped the button!');
        }}
       title="Conta"
      />
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">R$0,24</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Pix</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Pagar</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Transferir</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Depositar</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Cartão</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 350,
    width: 776,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
