import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Banner1 from "../../../Assets/bannerImages/banner1.jpg";
import Banner2 from "../../../Assets/bannerImages/banner2.jpg";
import Banner3 from "../../../Assets/bannerImages/banner3.jpg";
import Banner4 from "../../../Assets/bannerImages/banner4.jpg";
import Banner5 from "../../../Assets/bannerImages/banner5.jpg";

const bannerData = [
  // {
  //   title: "Banner 1",
  //   image: Banner1,
  // },
  {
    title: "Banner 2",
    image: Banner2,
  },
  {
    title: "Banner 3",
    image: Banner3,
  },
  {
    title: "Banner 4",
    image: Banner4,
  },
  {
    title: "Banner 5",
    image: Banner5,
  },
];

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: true,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: true,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: true,
  emulateTouch: true,
  autoFocus: false,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 2000,
  transitionTime: 500,
  swipeScrollTolerance: 5,
});

const CarouselComp = () => {
  return (
    <div>
      <Carousel {...getConfigurableProps()}>
        {bannerData.map(({ title, image }) => (
          <div>
            <img className="h-[33rem] object-cover" src={image} alt={title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
