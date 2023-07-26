import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Pressable onPress={() => {
          navigation.navigate("eventsAdvanced");
        }}><Image style={styles.logo} source={require("./CaringTransitions_Logo_Large.png")} /></Pressable>
          <Text style={styles.text}>{"Welcome Back!"}</Text>
        </View>
        <Text style={styles.footer}>{"Powered by Caring Transitions of Central Arkansas"}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 315,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#080707",
    fontWeight: "200",
    fontFamily: "Lato"
  },
  footer: {
    textAlign: "center",
    fontSize: 10,
    color: "#080707",
    fontWeight: "100",
    marginBottom: 20,
    fontFamily: "Montserrat"
  }
});
export default WelcomeScreen;