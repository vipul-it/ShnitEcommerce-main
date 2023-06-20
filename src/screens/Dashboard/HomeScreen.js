import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Button,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from './Carousel';
import { dummyData } from './data/Data';

import homeImg from '../../assets/images/homeScreen/pic.png';

import {
  image1,
  image2,
  image3,
  image4,
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
} from '../../utils/Images';

import Heart from '../../assets/images/card/heart.png';
import HeartFill from '../../assets/images/card/heart-fill.png';
import {Rating} from 'react-native-ratings';
import {moderateScale} from 'react-native-size-matters';
import CustomBtn from '../../components/Custom/CustomBtn';
import BestCollectionImg from '../../assets/images/homeScreen/Frame686556095.png';
import border from '../../assets/images/homeScreen/boder.png';
import {useNavigation} from '@react-navigation/native';
import Header from './Header';


const HomeScreen = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      title: 'First Item',
      image: image1,
      price: '3000',
      rating: '5',
      like: false,
      new: true,
    },
    {
      id: '2',
      title: 'Secound Item',
      image: image2,
      price: '3000',
      rating: '5',
      like: true,
      new: false,
    },
    {
      id: '3',
      title: 'Third Item',
      image: image3,
      price: '3000',
      rating: '5',
      like: false,
      new: false,
    },
    {
      id: '4',
      title: 'Fourth Item',
      image: image4,
      price: '3000',
      rating: '5',
      like: true,
      new: true,
    },
  ];

  const PRODUCTDATA = [
    {
      id: '1',
      title: 'Product 1',
      discription: 'Product 1 Description',
      price: '120',
      like: false,
      image: productImg1,
    },
    {
      id: '2',
      title: 'Product 2',
      discription: 'Product 2 Description',
      price: '120',
      like: false,
      image: productImg2,
    },
    {
      id: '3',
      title: 'Product 3',
      discription: 'Product 3 Description',
      price: '120',
      like: false,
      image: productImg3,
    },
    {
      id: '4',
      title: 'Product 4',
      discription: 'Product 4 Description',
      price: '120',
      like: false,
      image: productImg4,
    },
    {
      id: '5',
      title: 'Product 5',
      discription: 'Product 5 Description',
      price: '120',
      like: false,
      image: productImg5,
    },
    {
      id: '6',
      title: 'Product 6',
      discription: 'Product 6 Description',
      price: '120',
      like: false,
      image: productImg6,
    },
  ];

  const [data, setData] = useState(DATA);
  const [productData, setProductData] = useState(PRODUCTDATA);

  const favrouiteHandler = i => {
    let temp = [...data];
    temp[i].like = !temp[i].like;
    setData(temp);
  };
  const favrouiteHandlerProduct = i => {
    let temp = [...productData];
    temp[i].like = !temp[i].like;
    setProductData(temp);
  };

  return (
    <SafeAreaView className="bg-whitec flex-1">
      <StatusBar backgroundColor="#1AAABC" />
      <View>
        <Header />
        <ScrollView className="">
          <View className="self-center w-screen  mb-12">
           <Carousel data= {dummyData} />
            {/* <Image
              resizeMode="contain"
              className="my-3 rounded-lg w-[95%] self-center h-[200] object-contain"
              source={homeImg}
            /> */}
            <View className="items-center">
              <Text className="	 text-3xl text-atext font-semibold text-center my-2  ">
                New Arrival
              </Text>
              <Image className=" w-[45%] h-3 -mt-3" source={border} />
            </View>

            <View className="mx-12 my-3 flex-row justify-between">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Categories');
                }}>
                <Text className="text-newDark">All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Categories');
                }}>
                <Text className="text-newDark">Apparel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Categories');
                }}>
                <Text className="text-newDark">Tshirt</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Categories');
                }}>
                <Text className="text-newDark">Dress</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Categories');
                }}>
                <Text className="text-newDark">Bag</Text>
              </TouchableOpacity>
            </View>

            {
              <FlatList
                data={data}
                className="mx-4"
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <View className="border border-gray-100 w-[50%] ">
                      {item.new && (
                        <View className="absolute z-20 bg-theme p-2 right-0">
                          <Text className="text-whitec">New</Text>
                        </View>
                      )}
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Categories');
                        }}>
                        <Image
                          className="w-[166px] h-[200px]"
                          source={item.image}
                        />
                      </TouchableOpacity>
                      <View className="p-2">
                        <View className="flex-row justify-between items-center">
                          <View className="flex-row">
                            <Rating
                              type="custom"
                              // ratingImage={WATER_IMAGE}
                              ratingColor="#FF9529"
                              ratingBackgroundColor="gray"
                              ratingCount={5}
                              // imageSize={5}
                              // starContainerStyle={he}
                              size={6}
                              imageSize={moderateScale(14)}
                              onFinishRating={this.ratingCompleted}
                              style={{paddingVertical: 10}}
                            />
                          </View>
                          <TouchableOpacity
                            onPress={() => favrouiteHandler(index)}>
                            {item.like ? (
                              <Image
                                className="w-[20px] h-[18px]"
                                source={HeartFill}
                              />
                            ) : (
                              <Image
                                className="w-[20px] h-[18px]"
                                source={Heart}
                              />
                            )}
                          </TouchableOpacity>
                        </View>
                        <Text className="text-newDark">{item.title}</Text>
                        <Text className="text-newDark">Cardiganu</Text>
                        <View className="flex-row items-center gap-2">
                          <Text className="font-bold text-newDark">
                            {'\u20B9'}
                            {item.price}{' '}
                          </Text>
                          <Text className="text-theme text-[8px] font-Normal">
                            50% OFF
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            }
            <View className="mx-4 my-4">
              <CustomBtn
                name={'Explore More'}
                onPress={() => {
                  navigation.navigate('Categories');
                }}
              />
            </View>
            <View>
              <Image
                resizeMode="contain"
                className="  w-[100%] "
                source={BestCollectionImg}
              />
            </View>
            <View>
              <Text className="text-lg text-ptext text-center my-2 font-SemiBold ">
                Product You Might Like
              </Text>
            </View>
            {
              <FlatList
                data={productData}
                className="mx-4 p-2"
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <View className="border-2 border-gray-100 w-[50%] ">
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Categories');
                        }}>
                        <Image
                          className="w-[166px] h-[200px]"
                          source={item.image}
                        />
                      </TouchableOpacity>

                      <View className="p-2">
                        <View className="flex-row justify-end items-center -mt-8">
                          <TouchableOpacity
                            onPress={() => favrouiteHandlerProduct(index)}>
                            {item.like ? (
                              <Image
                                className="w-[20px] h-[18px]"
                                source={HeartFill}
                              />
                            ) : (
                              <Image
                                className="w-[20px] h-[18px]"
                                source={Heart}
                              />
                            )}
                          </TouchableOpacity>
                        </View>
                        <View className="py-3">
                          <Text className="text-newDark">{item.title}</Text>
                          <Text className="text-newDark">
                            {item.discription}
                          </Text>
                          <View className="flex-row items-center gap-2">
                            <Text className="font-bold text-newDark">
                              {'\u20B9'}
                              {item.price}{' '}
                            </Text>
                            <Text className="text-theme text-[8px] font-Normal">
                              50% OFF
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            }
          </View>
        </ScrollView>
        {/* <TabBar /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
