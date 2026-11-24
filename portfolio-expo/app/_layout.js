import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts, ShareTechMono_400Regular } from "@expo-google-fonts/share-tech-mono";
import { colors } from "../theme";

// Layout raiz: carrega a fonte e define a pilha principal de navegação.
export default function RootLayout() {
  const [loaded, error] = useFonts({ ShareTechMono_400Regular });
  if (!loaded && !error) return null;

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.bg } }} />
    </>
  );
}
