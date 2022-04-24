import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, ICONS, IMAGES } from "../contants";

const Details = () => {
  return (
    <SafeAreaView style={style.mainContainer}>
      <ImageBackground
        resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
        source={IMAGES.chairBG}
      >
        <View style={style.navContainer}>
          <TouchableOpacity style={{ padding: 10 }}>
            <Image
              resizeMode="contain"
              style={{ height: 20, width: 20 }}
              source={ICONS.menu}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Image
              resizeMode="contain"
              style={{ height: 20, width: 20 }}
              source={ICONS.search}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: "30%",
            left: "20%",
          }}
        >
          <View
            style={{
              borderRadius: 50,
              backgroundColor: "rgba(255,255,255,0.3)",
              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 30,
            }}
          >
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: COLORS.dodgerblue,
                borderRadius: 50,
              }}
            ></View>
          </View>
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.6)",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: COLORS.lightGray, fontWeight: "bold" }}>
              Chair
            </Text>
            <Text style={{ color: COLORS.lightGray, fontWeight: "bold" }}>
              Peach Color: <Text style={{ color: "#638B25" }}>$180.12</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            position: "absolute",
            width: "100%",
            height: "40%",
            bottom: 0,
            justifyContent: "flex-end",
          }}
        >
          <View style={{ paddingVertical: 30 }}>
            <Text style={{ color: COLORS.darkGray, marginBottom: 10 }}>
              Furniture
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: COLORS.white }}
            >
              MX Chair - modern
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: COLORS.white }}
            >
              design
            </Text>
          </View>
          <View
            style={{
              height: "25%",
              backgroundColor: COLORS.white,
              borderRadius: 50,
              flexDirection: "row",
              justifyContent: "space-around",
              padding: 10,
              paddingHorizontal: 30,
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                style={{ height: 25, width: 25, tintColor: COLORS.lightGray }}
                source={ICONS.menuBox}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#638B25",
                padding: 10,
                borderRadius: 10,
                shadowColor: "#638B25",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,

                elevation: 7,
              }}
            >
              <Image
                resizeMode="contain"
                style={{ height: 25, width: 25, tintColor: COLORS.white }}
                source={ICONS.plus}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                style={{ height: 25, width: 25, tintColor: COLORS.lightGray }}
                source={ICONS.user}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: COLORS.white,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default Details;
