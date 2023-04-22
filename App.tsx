import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Counter } from "./Counter";
import { Home } from "./Home";
import { Posts } from "./Posts";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Counter />
        <Home /> */}
        <Posts />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
