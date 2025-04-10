import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4A0086', dark: '#4A0086' }}
      headerImage={
        <IconSymbol
          size={0}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Saldo disponível</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">R$0,24</ThemedText>
      </ThemedView>
      <Collapsible title="Saldo separado 🗃️">
        <ThemedText>
          <ThemedText type="defaultSemiBold">R$0,00</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Tudo certo com suas contas? 🧾">
        <ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Nenhuma transição prevista este mês <br></br></ThemedText>
        </ThemedText>
          <ThemedText>Saldo disponível R$10,38 <br></br></ThemedText>
          <ThemedText>Deu certo R$0,00</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Total em investimentos 💲">
        <ThemedText>
           R$0,24 <br></br>    ↑ R$0,12
        </ThemedText>
      </Collapsible>
      <Collapsible title="Depositar 📥">
        <ThemedText>
          Cobrar              Portabilidade de salário              Converter limite
        </ThemedText>
      </Collapsible>
      <Collapsible title="Pagar 💸">
        <ThemedText>
          <br></br>Boleto              Pix<br></br><br></br>Assistente de Pagamentos
          <br></br>Buscador de Boletos<br></br>Débito Automático
        </ThemedText>
      </Collapsible>
      <Collapsible title="Débito Automático ⏳">
        <ThemedText>
          Você no controle de suas contas em débito automático<br></br>
          Coloque no automático suas contas recorrentes<br></br>     Não pague juros por atraso. Cadastre vários tipos de conta, como
               água, luz, telefone, gás      e internet.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
