import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class PracticeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
         source={{
          uri: "https://cdn0.iconfinder.com/data/icons/online-education-butterscotch-vol-2/512/Language_Learning-1024.png",
        }} // Replace with your logo path
          style={styles.logo}
        />
        {/* <Text style={styles.greeting}>Good afternoon!</Text> */}

        {/* Phase Buttons */}
        <TouchableOpacity
          style={[styles.phaseButton, styles.phaseTwo]}
          onPress={() => {
            this.props.navigation.navigate("PhaseOne");
          }}
        >
          <Text style={styles.phaseTitle}>Level 1</Text>
          <Text style={styles.phaseSubtitle}>  23 Letters</Text>
          <Image
            source={require("../assets/images/king.png")} // Replace with your bird icon path
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.phaseButton, styles.phaseTwo]}
          onPress={() => {
            this.props.navigation.navigate("PhaseTwo");
          }}
        >
          <Text style={styles.phaseTitle}>Level 2</Text>
          <Text style={styles.phaseSubtitle}>19 Letters</Text>
          <Image
            source={require("../assets/images/leaf.png")} // Replace with your bird icon path
            style={styles.icon}
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.phaseButton, styles.phaseTwo]}
          onPress={() => {
            this.props.navigation.navigate("PhaseThree");
          }}
        >
          <Text style={styles.phaseTitle}>Level 3</Text>
          <Text style={styles.phaseSubtitle}>19 Letters</Text>
          <Image
            source={require("../assets/images/hat.png")} // Replace with your bird icon path
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.phaseButton, styles.phaseTwo]}
          onPress={() => {
            this.props.navigation.navigate("PhaseFour");
          }}
        >
          <Text style={styles.phaseTitle}>Level 4</Text>
          <Text style={styles.phaseSubtitle}>Videos</Text>
          <Image
            source={require("../assets/images/youtube.png")} // Replace with your bird icon path
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8b8b8",
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  greeting: {
    color: "#FFF",
    fontSize: 18,
    marginTop: 10,
  },
  phaseButton: {
    width: "90%",
    height: 80,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  phaseTwo: {
    backgroundColor: "#182854", // Purple
  },
  phaseThree: {
    backgroundColor: "#182854", // Green
  },
  phaseFive: {
    backgroundColor: "#182854", // Blue
  },
  games: {
    backgroundColor: "#182854", // Pink
  },
  phaseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  phaseSubtitle: {
    fontSize: 20,
    color: "#FFF",
    textAlign:"center"
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  hexagon: {
    width: 50,
    height: 50,
    backgroundColor: "#FEC73E", // Yellow
    transform: [{ rotate: "45deg" }],
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  hexagonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    transform: [{ rotate: "-45deg" }],
  },
});

//level names: background- gray color of button - 
// sun picture 
// icons same

// quizes - level 1- game name, level 2,
// dict-  
// bee - dict logo
// heading in the all screen


//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