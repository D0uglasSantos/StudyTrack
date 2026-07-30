import { Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";

type EmptyStateProps = {
  onCreatePress?: () => void;
};

export function EmptyState({ onCreatePress }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nenhuma tarefa cadastrada.</Text>
      <Text style={styles.message}>
        Crie sua primeira tarefa de estudo para começar a acompanhar seu progresso.
      </Text>

      {onCreatePress && (
        <Pressable
          onPress={onCreatePress}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Criar primeira tarefa</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 12,
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: COLORS.text,
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
  button: {
    marginTop: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    paddingHorizontal: 20,
    paddingVertical: 12,
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
