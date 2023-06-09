import {View, Text, FlatList, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState} from 'react';
import S1 from '../../assets/images/w/w.png';
import Heart from '../../assets/images/card/heart.png';
import HeartFill from '../../assets/images/card/heart-fill.png';
import {CategoriesIcon, iconConst, categoryProduct1, categoryProduct2} from '../../utils/Images';
import {Rating} from 'react-native-ratings';

const Categories = ({navigation}) => {
  const PRODUCTDATA = [
    {
      id: '1',
      title: 'Brown Dress',
      discription: 'Dress fabric pure cotton',
      image: categoryProduct1,
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '2',
      title: 'Brown Dress',
      discription: 'Dress fabric pure cotton',
      image: categoryProduct2,
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '3',
      title: 'Brown Dress',
      discription: 'Dress fabric pure cotton',
      image: categoryProduct1,
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '4',
      title: 'Brown Dress',
      discription: 'Dress fabric pure cotton',
      image: categoryProduct2,
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '5',
      title: 'Brown Dress',
      discription: 'Dress fabric pure cotton',
      image: categoryProduct1,
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '6',
      title: 'Brown Dress',
      discription: 'Dress fabric pure cotton',
      image: categoryProduct2,
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '7',
      title: 'Brown Dress',
      discription: 'Dress fabric pure cotton',
      image: categoryProduct1,
      price: '3999',
      rating: '4.8',
      like: false,
    },
    {
      id: '8',
      title: 'Brown Dress',
      discription: 'Dress fabric pure cotton',
      image: categoryProduct2,
      price: '3999',
      rating: '4.8',
      like: false,
    },
  ];

  const [productData, setProductData] = useState(PRODUCTDATA);

  const favrouiteHandlerProduct = i => {
    let temp = [...productData];
    temp[i].like = !temp[i].like;
    setProductData(temp);
  };
  return (
    <View className="bg-whitec flex-1">
      <StatusBar backgroundColor="#1AAABC" />
      <View className="mx-8 mt-2 flex-row justify-between items-center">
        <Text className=" text-htext text-lg">4500 Apparel</Text>
        <View className="flex-row gap-1">
          <TouchableOpacity className="bg-gray-200 rounded-3xl w-16 h-8 items-center justify-center ">
            <View className="flex-row">
              <Text className="text-newDark">New</Text>
              <Image
                source={CategoriesIcon.Down}
                resizeMode="contain"
                className="h-5 w-5"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 rounded-3xl w-8 h-8 items-center justify-center ">
            <Image
              source={CategoriesIcon.Category}
              resizeMode="contain"
              className="h-5 w-5"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 rounded-3xl w-8 h-8 items-center justify-center ">
            <Image
              source={CategoriesIcon.Filter}
              resizeMode="contain"
              className="h-5 w-5"
            />
          </TouchableOpacity>
        </View>
      </View>
      {
        <FlatList
          data={productData}
          className="mx-4 my-2 p-2"
          numColumns={1}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              
                onPress={() => navigation.navigate('ProductDetails')}>
                <View className="">
                <StatusBar backgroundColor="#1AAABC" />
                  <View className=" flex-row">
                    <View>
                      <Image className="w-[100px] h-[142px]" source={item.image} />
                      <TouchableOpacity
                        className="z-30 top-2 absolute right-2"
                        onPress={() => favrouiteHandlerProduct(index)}>
                        {item.like ? (
                          
                          <Image
                            className="w-[15px] h-[13px]"
                            source={HeartFill}
                          />
                        ) : (
                          <Image className="w-[15px] h-[13px]" source={Heart} />
                          
                        )}
                      </TouchableOpacity>
                    </View>

                    <View className="p-2">
                      <View className="py-3">
                        <Text className="font-bold text-newDark">{item.title}</Text>
                        <Text className="text-newDark">{item.discription}</Text>
                          <Text className="font-bold text-theme my-1">
                            {'\u20B9'}
                            {item.price}
                          </Text>
                        <View className="flex-row gap-1 items-center">
                          <Image className="w-3 h-3" source={iconConst.Star} />
                          <Text className="text-newDark">{item.rating} Ratings</Text>
                        </View>

                        <View className="flex-row gap-1 my-1">
                          <Text className="text-center text-newDark">Size </Text>
                          <Text className="border-[1px] text-newDark border-theme my-2 w-4 h-4 text-center rounded-full text-[12px]">
                            S
                          </Text>
                          <Text className="border-[1px] text-newDark border-theme my-2 w-4 h-4 text-center rounded-full text-[12px]">
                            M
                          </Text>
                          <Text className="border-[1px] text-newDark border-theme my-2 w-4 h-4 text-center rounded-full text-[12px]">
                            L
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      }
    </View>
  );
};

export default Categories;
