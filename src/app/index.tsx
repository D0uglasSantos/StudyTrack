import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyState } from "@/components/EmptyState";
import { ProgressCard } from "@/components/ProgressCard";
import { TaskCard } from "@/components/TaskCard";
import { COLORS } from "@/constants/colors";
import type { StudyTask } from "@/types/task";

const TEMPORARY_TASKS: StudyTask[] = [
  {
    id: "3",
    title: "Revisar componentes e props",
    subject: "React Native",
    description: "Refazer os exemplos de componentes com propriedades.",
    priority: "high",
    completed: false,
    createdAt: "2026-07-30T12:00:00.000Z",
    updatedAt: "2026-07-30T12:00:00.000Z",
  },
  {
    id: "2",
    title: "Praticar useState",
    subject: "React",
    priority: "medium",
    completed: false,
    createdAt: "2026-07-29T12:00:00.000Z",
    updatedAt: "2026-07-29T12:00:00.000Z",
  },
  {
    id: "1",
    title: "Configurar ambiente Expo",
    subject: "Ferramentas",
    priority: "low",
    completed: true,
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T13:00:00.000Z",
    completedAt: "2026-07-28T13:00:00.000Z",
  },
];

export default function DashboardScreen() {
  const totalTasks = TEMPORARY_TASKS.length;
  const completedTasks = TEMPORARY_TASKS.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  function handleOpenTask(taskId: string) {
    console.log(`Abrir tarefa ${taskId} (navegação disponível na Etapa 3)`);
  }

  function handleToggleTask(taskId: string) {
    console.log(`Concluir/reabrir tarefa ${taskId} (ações disponíveis na Etapa 5)`);
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <FlatList
        data={TEMPORARY_TASKS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.titleGroup}>
              <Text style={styles.appName}>StudyTrack</Text>
              <Text style={styles.welcome}>
                Organize seus estudos e acompanhe seu progresso.
              </Text>
            </View>

            <ProgressCard
              totalTasks={totalTasks}
              pendingTasks={pendingTasks}
              completedTasks={completedTasks}
              progress={progress}
            />

            <Text style={styles.sectionTitle}>Suas tarefas</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onPress={() => handleOpenTask(item.id)}
            onToggleCompleted={() => handleToggleTask(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={<EmptyState />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },
  header: {
    gap: 16,
    marginBottom: 16,
  },
  titleGroup: {
    gap: 4,
  },
  appName: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.text,
  },
  welcome: {
    fontSize: 15,
    color: COLORS.textSecondary,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: COLORS.text,
  },
  separator: {
    height: 12,
  },
});
