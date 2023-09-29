import React, { useState } from 'react';
import { Box, Flex, Image, IconButton, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import image1 from '../../images/brochureCarousel/image1.jpg'

const images = [
  {
    url: image1,
    caption: 'Image 1 Caption',
  },
  {
    url: 'image2.jpg',
    caption: 'Image 2 Caption',
  },
  {
    url: 'image3.jpg',
    caption: 'Image 3 Caption',
  },
  {
    url: 'image4.jpg',
    caption: 'Image 4 Caption',
  },
  {
    url: 'image5.jpg',
    caption: 'Image 5 Caption',
  },
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      position="relative"
      width={['100%', '75%']} // Responsive width
      mx="auto"
      overflow="hidden"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
      >
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={prevImage}
          colorScheme="teal"
          aria-label="Previous Image"
          ml={4}
        />
        <Text
          color="white"
          fontWeight="bold"
          fontSize="lg"
          p={2}
          bg="rgba(0, 0, 0, 0.7)"
          borderRadius="md"
        >
          {images[currentImageIndex].caption}
        </Text>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={nextImage}
          colorScheme="teal"
          aria-label="Next Image"
          mr={4}
        />
      </Flex>
      <Image
        src={images[currentImageIndex].url}
        alt={`Image ${currentImageIndex + 1}`}
        borderRadius="lg"
        boxShadow="lg"
        mx="auto"
        maxH="300px"
        width="100%"
        opacity={1}
        transition="opacity 0.5s ease-in-out" // Fade animation
      />
    </Box>
  );
}

export default Carousel;
