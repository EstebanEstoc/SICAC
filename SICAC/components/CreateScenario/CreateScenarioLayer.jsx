import React from "react";
import Carousel from "react-native-snap-carousel";
import HomeScreen from "../../helpers/HomeScreen";

const MyCarousel = () => {
  const _renderItem = ({ item, index }) => {
    return <HomeScreen></HomeScreen>;
  };

  return (
    <Carousel
      ref={(c) => {
        _carousel = c;
      }}
      data={"test"}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  );
};

export default MyCarousel;
