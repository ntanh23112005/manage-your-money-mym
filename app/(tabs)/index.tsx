import ParallaxScrollView from "@/components/parallax-scroll-view";
import HomePageContent from "@/modules/homepage/components/home-page-content";
import { Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/index-banner.png")}
          style={styles.headerImage}
        />
      }
    >
      <HomePageContent />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    objectFit: "cover",
    width: "auto",
    height: 300,
  },
});
