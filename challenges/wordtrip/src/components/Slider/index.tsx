import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { Swipers } from "./Swipers";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function App() {
  return (
    <>
      <Flex
        w="100%"
        h={["250px", "450px"]}
        maxW="1240px"
        mx="auto"
        mb={["5", "10"]}
      >
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
          <Flex align="center" justify="center">
            <SwiperSlide>
              <Swipers
                name="Europa"
                description="O continente mais antigo"
                to="/continents/europa"
                imgUrl="https://images.prismic.io/worldtripcms/b9fd21d6-7a4c-4851-981f-a1c4bf0df2cc_europe.png?auto=compress,format"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Swipers
                name="Ásia"
                description="O maior dos continentes"
                to="/continents/asia"
                imgUrl="https://images.prismic.io/worldtripcms/c3bc283b-9c41-4856-b504-04249458a2ed_charles-postiaux-TnUG2pWraPE-unsplash.jpg?auto=compress,format"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Swipers
                name="Africa"
                description="O continente mais quente"
                to="/continents/asia"
                imgUrl="https://images.prismic.io/worldtripcms/c21aa992-b331-429d-a7a0-5c6c4101d6e2_redcharlie-cnTYZThmdu0-unsplash.jpg?auto=compress,format"
              />
            </SwiperSlide>
          </Flex>
        </Swiper>
      </Flex>
    </>
  );
}
