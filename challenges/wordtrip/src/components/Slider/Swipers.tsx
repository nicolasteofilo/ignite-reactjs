import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

interface SwipersProps {
    name: string;
    description: string;
    to: string;
    imgUrl?: string;
}

export function Swipers({ name, description, to, imgUrl }: SwipersProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`url(${imgUrl})` || "none"}
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
    >
      <Link href={`${to}`}>
        <a>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
            {name}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={["0.8rem", "1xl", "2xl"]}
            mt={["2", "4"]}
          >
            {description}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
