import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Profile")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1250/1250689.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("notification")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/107/107822.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("menu")}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop:50,
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
  },
  textStyle: {
    textTransform: "uppercase",
  },
  iconStytle: {
    width: "80%",
    height: 30,
    aspectRatio: 1,
  },
});

export default Menu;
