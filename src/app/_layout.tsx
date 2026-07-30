import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="tasks/new" options={{ title: "Nova tarefa" }} />
      <Stack.Screen name="tasks/[id]" options={{ title: "Detalhes da tarefa" }} />
      <Stack.Screen name="settings" options={{ title: "Configurações" }} />
    </Stack>
  );
}
