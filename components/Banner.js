import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { Text } from 'react-native';
import TopNav from './TopNav';

const Banner = () => {
    const screenWidth = Dimensions.get('window').width;

    const bannerData = [
        {
            id: '1',
            image: require('../assets/slide1.png'),
        },
        {
            id: '2',
            image: require('../assets/slide1.png'), // Use different images for variety
        },
        {
            id: '3',
            image: require('../assets/slide1.png'), // Use different images for variety
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <View>
                <Image source={item.image} style={{ height: 190, width: screenWidth }} />
            </View>
        );
    };

    return (
        <View>
            {/*ลองเอา มาใส่คู่กับ banner เฉยๆ */}
            {/* <TopNav/> */}
            <Carousel
                data={bannerData}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                loop={true}
                inactiveSlideScale={1}  
            />
        </View>
    );
};

export default Banner;
