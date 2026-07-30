import { Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { PRIORITY_LABELS } from "@/constants/priorities";
import type { StudyTask, TaskPriority } from "@/types/task";

const PRIORITY_COLORS: Record<TaskPriority, string> = {
  low: COLORS.success,
  medium: COLORS.warning,
  high: COLORS.danger,
};

type TaskCardProps = {
  task: StudyTask;
  onPress: () => void;
  onToggleCompleted: () => void;
};

export function TaskCard({ task, onPress, onToggleCompleted }: TaskCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      accessibilityRole="button"
      accessibilityLabel={`Tarefa ${task.title}`}
    >
      <Pressable
        onPress={onToggleCompleted}
        hitSlop={8}
        style={[styles.checkbox, task.completed && styles.checkboxCompleted]}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.completed }}
        accessibilityLabel={task.completed ? "Reabrir tarefa" : "Concluir tarefa"}
      >
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </Pressable>

      <View style={styles.content}>
        <Text
          style={[styles.title, task.completed && styles.titleCompleted]}
          numberOfLines={1}
        >
          {task.title}
        </Text>
        <Text style={styles.subject} numberOfLines={1}>
          {task.subject}
        </Text>
      </View>

      <View style={[styles.priorityBadge, { borderColor: PRIORITY_COLORS[task.priority] }]}>
        <Text style={[styles.priorityText, { color: PRIORITY_COLORS[task.priority] }]}>
          {PRIORITY_LABELS[task.priority]}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
  },
  cardPressed: {
    opacity: 0.7,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxCompleted: {
    backgroundColor: COLORS.success,
    borderColor: COLORS.success,
  },
  checkmark: {
    color: COLORS.surface,
    fontSize: 14,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },
  titleCompleted: {
    textDecorationLine: "line-through",
    color: COLORS.textSecondary,
  },
  subject: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  priorityBadge: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  priorityText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
