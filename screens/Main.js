import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, ICONS, IMAGES } from "../contants";

const DATA = [
  {
    id: 0,
    title: "Chair",
    productList: [
      {
        productID: 0,
        productName: "Chair 1",
        price: 10.0,
        image: IMAGES.chair1,
      },
      {
        productID: 1,
        productName: "Chair 2",
        price: 12.0,
        image: IMAGES.chair2,
      },
      {
        productID: 2,
        productName: "Chair 3",
        price: 99.0,
        image: IMAGES.chair3,
      },
      {
        productID: 3,
        productName: "Chair 4",
        price: 141.0,
        image: IMAGES.chair4,
      },
    ],
  },
  {
    id: 1,
    title: "CupBoard",
    productList: [
      {
        productID: 0,
        productName: "Chair 1",
        price: 10.0,
        image: IMAGES.chair1,
      },
      {
        productID: 1,
        productName: "Chair 2",
        price: 12.0,
        image: IMAGES.chair2,
      },
      {
        productID: 2,
        productName: "Chair 3",
        price: 99.0,
        image: IMAGES.chair3,
      },
      {
        productID: 3,
        productName: "Chair 4",
        price: 141.0,
        image: IMAGES.chair4,
      },
    ],
  },
  {
    id: 2,
    title: "Table",
    productList: [
      {
        productID: 0,
        productName: "Chair 1",
        price: 10.0,
        image: IMAGES.chair1,
      },
      {
        productID: 1,
        productName: "Chair 2",
        price: 12.0,
        image: IMAGES.chair2,
      },
      {
        productID: 2,
        productName: "Chair 3",
        price: 99.0,
        image: IMAGES.chair3,
      },
      {
        productID: 3,
        productName: "Chair 4",
        price: 141.0,
        image: IMAGES.chair4,
      },
    ],
  },
  {
    id: 3,
    title: "Accessorice",
    productList: [
      {
        productID: 0,
        productName: "Chair 1",
        price: 10.0,
        image: IMAGES.chair1,
      },
      {
        productID: 1,
        productName: "Chair 2",
        price: 12.0,
        image: IMAGES.chair2,
      },
      {
        productID: 2,
        productName: "Chair 3",
        price: 99.0,
        image: IMAGES.chair3,
      },
      {
        productID: 3,
        productName: "Chair 4",
        price: 141.0,
        image: IMAGES.chair4,
      },
    ],
  },
];

//render
const renderData = (item, selected, onPress) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
      >
        <Text style={{ fontSize: 16, color: COLORS.lightGray }}>
          {item.title}
        </Text>
      </TouchableOpacity>
      {item.title === selected.title && (
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor: COLORS.dodgerblue,
            borderRadius: 50,
            opacity: 0.6,
          }}
        ></View>
      )}
    </View>
  );
};

const Main = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [selected, setSelected] = React.useState({
    id: 0,
    title: "Chair",
    productList: [
      {
        productID: 0,
        productName: "Chair 1",
        price: 10.0,
        image: IMAGES.chair1,
      },
      {
        productID: 1,
        productName: "Chair 2",
        price: 12.0,
        image: IMAGES.chair2,
      },
      {
        productID: 2,
        productName: "Chair 3",
        price: 99.0,
        image: IMAGES.chair3,
      },
      {
        productID: 3,
        productName: "Chair 4",
        price: 141.0,
        image: IMAGES.chair4,
      },
    ],
  });

  const onPress = (item) => {
    setSelected(item);
  };

  return (
    <SafeAreaView style={style.mainContainer}>
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
            source={ICONS.cart}
          />
        </TouchableOpacity>
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Text style={FONTS.Title}>Collection of</Text>
        <Text style={FONTS.Title}>{selected.title}</Text>
        <FlatList
          style={{ marginTop: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          data={DATA}
          renderItem={({ item }) => renderData(item, selected, onPress)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.productID)}
          data={selected.productList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Details")}
                style={{
                  width: width / 2,
                  padding: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="cover"
                  style={{ height: "100%", width: "100%", borderRadius: 10 }}
                  source={item.image}
                />
                <View
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 10,
                    padding: 15,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {item.productName}
                  </Text>
                  <View
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                      padding: 10,
                      backgroundColor: "rgba(225,225,225,0.5)",
                      borderRadius: 15,
                    }}
                  >
                    <Text>${item.price.toFixed(2)}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          height: "20%",
          backgroundColor: COLORS.white,
          shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 6,
          },
          shadowOpacity: 0.6,
          shadowRadius: 10,

          elevation: 13,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            alignItems: "center",
          }}
        >
          <View style={{ backgroundColor: "#EFEFEF" }}>
            <Image
              resizeMode={"contain"}
              style={{ height: 100, width: 50 }}
              source={ICONS.campChair}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: COLORS.darkGray,
              }}
            >
              Special Offer
            </Text>
            <Text>Adding to your cart</Text>
          </View>
          <TouchableOpacity style={{ padding: 15 }}>
            <Image
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
              source={ICONS.next}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Main;
