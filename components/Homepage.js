import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { ImageHeaderScrollView } from "react-native-image-header-scroll-view";
import { useNavigation } from "@react-navigation/native";
import GalleryItem from "./GalleryItem";
import { LinearGradient } from "expo-linear-gradient";

const BANNER_HEIGHT = 400;

const Homepage = () => {
  const navigation = useNavigation();
  const scrollA = useRef(new Animated.Value(0)).current;
  const homebannerIMG = require("../assets/homebanner.png");
  const sampleIMG1 = require("../assets/sampleIMG1.png");
  const sampleIMG2 = require("../assets/sampleIMG2.png");
  const sampleIMG3 = require("../assets/sampleIMG3.png");

  const sampleImages = [
    require("../assets/Grain-Gallery/1.png"),
    require("../assets/Grain-Gallery/2.png"),
    require("../assets/Grain-Gallery/3.png"),
    require("../assets/Grain-Gallery/4.png"),
    require("../assets/Grain-Gallery/5.png"),
    require("../assets/Grain-Gallery/6.png"),
    require("../assets/Grain-Gallery/7.png"),
    require("../assets/Grain-Gallery/8.png"),
    require("../assets/Grain-Gallery/9.png"),
    require("../assets/Grain-Gallery/10.png"),
  ];

  const headerStyle = scrollA.interpolate({
    inputRange: [0, BANNER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <ImageHeaderScrollView
        maxHeight={BANNER_HEIGHT}
        minHeight={100}
        renderHeader={() => (
          <View style={{ height: BANNER_HEIGHT }}>
            <Image style={styles.bannerImage} source={homebannerIMG} />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              style={styles.gradient}
            >
              <Text style={styles.headerText}>Worry Less, Grow More:</Text>
              <Text style={styles.subHeaderText}>
                Your Rice Stress Classifier
              </Text>
              <Text style={styles.descriptionText}>
                Say goodbye to field worries with spot on stress analysis, for
                confident and flourishing fields.
              </Text>
            </LinearGradient>
          </View>
                  )}
 onScroll={Animated.event(
  [{ nativeEvent: { contentOffset: { y: scrollA } } }],
  { useNativeDriver: true }
)}
scrollEventThrottle={16}
>
<View style={[styles.TextView]}>
          <View style={styles.header}>
            <View style={styles.titleCon}>
              <Text style={styles.title}>Recent Scans</Text>
              <View style={styles.lineUnder}></View>
            </View>
            <TouchableOpacity
              style={styles.ViewButton}
              onPress={() => navigation.navigate("RecentScans")}
            >
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.imageScrollView}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RecentScans1", {
                  diseaseName: "False Smut",
                })
              }
            >
              <Image source={sampleIMG1} style={styles.imageStyle} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RecentScans2", {
                  diseaseName: "Green Leaf Hopper",
                })
              }
            >
              <Image source={sampleIMG2} style={styles.imageStyle} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RecentScans3", { diseaseName: "Blast" })
              }
            >
              <Image source={sampleIMG3} style={styles.imageStyle} />
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.header}>
            <View style={styles.titleCon}>
              <Text style={styles.title}>Grain Gallery</Text>
              <View style={styles.lineUnder}></View>
            </View>
            <TouchableOpacity
              style={styles.ViewButton}
              onPress={() => navigation.navigate("GrainGallery")}
            >
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            {[1, 2, 3, 4].map((index) => (
              <GalleryItem
                key={index}
                onPress={() => navigation.navigate("Details")}
                source={sampleImages[index % sampleImages.length]}
                style={styles.imageContainer}
              />
            ))}
          </View>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: -10,
  },
  titleCon: {
    marginLeft: 10,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "600",
    fontWeight: "medium",
  },
  TextView: {
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: 10,
  },
  banner: (scrollA) => ({
    height: BANNER_HEIGHT,
    width: "100%",
    transform: [{ translateY: scrollA }],
  }),
  bannerImage: {
    width: "100%", // This should ensure the image takes full width
    height: BANNER_HEIGHT,
    resizeMode: "cover", // This will make sure the image covers the full area
  },
  lineUnder: {
    height: 3,
    backgroundColor: "green",
    width: 70,
    marginTop: 1,
    marginLeft: 1,
  },
  ViewButton: {
    backgroundColor: "transparent",
  },
  viewAllText: {
    color: "black",
    fontSize: 14,
    fontWeight: "medium",
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  LGstyle: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 100,
    marginTop: 220,
    top: 0,
  },
  imageScrollView: {
    height: 175,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  listContainer: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginTop: 10,
  },
  imageContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "30%",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#049B04",
    textAlign: "left",
    paddingHorizontal: 20,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    paddingHorizontal: 20,
    paddingTop: 1,
  },
  descriptionText: {
    fontSize: 14,
    color: "white",
    textAlign: "left",
    paddingHorizontal: 20,
    paddingTop: 5,
  },
});

export default Homepage;
