import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text style={styles.description}>
        Esta rota foi criada na Etapa 3 para validar o fluxo de navegação do aplicativo.
      </Text>
      <Text style={styles.description}>
        As opções reais de configuração serão implementadas nas próximas etapas.
      </Text>

      <Link href="/" asChild>
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>Voltar para o Dashboard</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
  },
  description: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  button: {
    marginTop: 12,
    alignSelf: "flex-start",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: COLORS.primaryDark,
  },
  buttonText: {
    color: COLORS.surface,
    fontSize: 14,
    fontWeight: "600",
  },
});
