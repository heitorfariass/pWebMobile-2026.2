import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors, fonts } from "../../theme";

// Barra de abas: cada <Tabs.Screen> aponta para um arquivo desta pasta.
const telas = [
  { name: "index", title: "Home", icon: "home-outline" },
  { name: "sobre", title: "Sobre", icon: "person-outline" },
  { name: "academico", title: "Acadêmico", icon: "school-outline" },
  { name: "profissional", title: "Trabalho", icon: "briefcase-outline" },
  { name: "projetos", title: "Projetos", icon: "code-slash-outline" },
  { name: "jogo", title: "Jogo", icon: "game-controller-outline" },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.faint,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.line },
        tabBarLabelStyle: { fontFamily: fonts.mono, fontSize: 10 },
      }}
    >
      {telas.map((t) => (
        <Tabs.Screen
          key={t.name}
          name={t.name}
          options={{
            title: t.title,
            tabBarIcon: ({ color, size }) => <Ionicons name={t.icon} size={size} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
