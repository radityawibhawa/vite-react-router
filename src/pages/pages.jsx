import { Box, Text, Heading, IconButton, useBreakpointValue, Image, Grid, Divider } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import image1 from '../assets/radit.jpeg';
import image2 from '../assets/radit2.jpeg';
import bouquet from '../assets/bouquet.png';
import couple from '../assets/couple.png';
import image3 from '../assets/radit3.jpeg';
import image4 from '../assets/radit4.jpeg';
import chibi from '../assets/chibi.jpg'

function Pages(){

    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slider = useRef(null);

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    const cards = [
        image1,
        image2,
    ];

    return(
        <>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                backgroundColor='#FF5BAE'
                height='150px'   
            >
                <Heading
                    textColor='#FFE4CF'
                    fontSize='23px'
                    
                >
                    Radit and Nanna 8th Anniversary
                </Heading>
            </Box>
            <Box
                position={'relative'}
                height={'300px'}
                width={'full'}
                overflow={'hidden'}
            >
                <link 
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link 
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <IconButton
                    aria-label="left-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider.current?.slickPrev()}>
                    <BiLeftArrowAlt />
                </IconButton>
                <IconButton
                    aria-label="right-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider.current?.slickNext()}>
                    <BiRightArrowAlt />
                </IconButton>
                <Slider {...settings} ref={slider}>
                    {cards.map((url, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                    >
                        <Image
                            src={url}
                            layout="fill"
                            objectFit="contain" // or "cover", depending on your needs
                            alt={`Slide ${index}`}
                        />
                    </Box>
                    ))}
                </Slider>
            </Box>
            <Box
                height='400px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                background='#5F0F40'
            >
                <Grid templateColumns='repeat(2, 1fr)' gap={6} ml='20px'>
                    <Grid templateColumns='repeat(1, 1fr)' gap={6}>
                        <Image 
                            src={bouquet}
                            boxSize='50px'
                        />
                        <Image 
                            src={couple}
                            boxSize='50px'
                        />
                    </Grid>
                    <Box
                        ml='-130px'
                        paddingRight='20px'
                        paddingLeft='10px'
                        mt='-10px'
                    >
                        <Text
                            color='#FFFFFF'
                            fontWeight='700'
                        >
                            “I love her, and that’s the beginning and end of everything.
                            You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.”
                            - F. Scott Fitzgerald
                        </Text>
                    </Box>
                </Grid>
            </Box>
            <Box    
                height='400px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                background='#9A031E'
            >
                <Box>
                    <Image 
                        borderRadius='10px'
                        src={image3}
                        objectFit="cover"
                        boxSize='250px'
                    />
                    <Divider
                        color='#FFFFFF'
                        mt='10px'
                    />
                    <Text
                        color='#FFFFFF'
                        ml='50px'
                        fontWeight='600'
                    >
                        Anniv 7 tahun nih :):):)
                    </Text>
                </Box>
            </Box>
            <Box
                height='400px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                background='#E36414'
            >
                <Box>
                    <Image 
                        borderRadius='10px'
                        src={image4}
                        objectFit='cover'
                        boxSize='250px'
                    />
                    <Divider 
                        color='#FFFFFF'
                        mt='10px'
                    />
                    <Text
                        color='#FFFFFF'
                        ml='60px'
                        fontWeight='600'
                    >
                        Pas Lagi Nongki :*:*:*
                    </Text>
                </Box>
            </Box>
            <Box
                height='400px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                background='#FB8B24'
            >
                <Box
                    padding='0 50px 12px'
                >
                    <Divider
                        mb='15px'
                    />
                    <Text
                        color='#FFFFFF'
                        fontWeight='600'
                    >
                        " Our love, it's not confined by time,
                        It's ageless and it's ever prime.
                        In every era, every clime,
                        Our love is the sweetest rhyme. "
                        - Raditya Wibhawa
                    </Text>
                    <Divider 
                        mt='15px'
                    />
                </Box>
            </Box>
            <Box
                height='400px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                background='#D20062'
            >
                <Image 
                    src={chibi}
                    boxSize='400px'
                />
            </Box>
        </>
    );
}

export default Pages;