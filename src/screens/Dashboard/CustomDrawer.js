import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Platform,
  UIManager,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AccordionList} from 'react-native-accordion-list-view';
import {iconConst} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const [selectedcolor, setSelectedColor] = useState(0);
  const data = [
    {
      id: 0,
      title: 'New',
      body: 'Outer',
    },
    {
      id: 1,
      title: 'Bag',
      body: 'Outer',
    },
    {
      id: 4,
      title: 'Shoes',
      body: 'Outer',
    },
    {
      id: 5,
      title: 'Beauty',
      body: 'Outer',
    },
    {
      id: 6,
      title: 'Accessories',
      body: 'Outer',
    },
  ];
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
      <View className="mx-4">
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 5,
            width: '90%',
          }}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setSelectedColor(0);
            }}>
            <Text style={{color: selectedcolor == 0 ? '#1AAABC' : '#555555', marginVertical: 5, fontSize: 20, fontWeight: 500}}>
              Women
            </Text>
            <TouchableOpacity>
              {selectedcolor == '0' ? (
                <Image
                  source={require('../../assets/icons/other/line2.png')}
                  style={{width: 100, height: 6}}
                />
              ) : null}
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setSelectedColor(1);
            }}>
            <Text style={{color: selectedcolor == 1 ? '#1AAABC' : '#555555', marginVertical: 5,fontSize: 20, fontWeight: 500}}>
              {' '}
              Men
            </Text>
            <TouchableOpacity>
              {selectedcolor == '1' ? (
                <Image
                  source={require('../../assets/icons/other/line2.png')}
                  style={{width: 100, height: 6}}
                />
              ) : null}
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View className="">
          <AccordionList
            data={data}
            customTitle={item => (
              <TouchableOpacity>
                <Text className="text-newDark">{item.title}</Text>
              </TouchableOpacity>
            )}
            customBody={item => (
              <View className="py-0 mt-2 pl-2">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Categories');
                  }}>
                  <Text className="my-2 text-newDark">Outer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Categories');
                  }}>
                  <Text className="my-2 text-newDark">Dress</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Categories');
                  }}>
                  <Text className="my-2 text-newDark">Blouse/Shirt</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Categories');
                  }}>
                  <Text className="my-2 text-newDark">T-shirt</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Categories');
                  }}>
                  <Text className="my-2 text-newDark">Knitwear</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Categories');
                  }}>
                  <Text className="my-2 text-newDark">Pants</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Categories');
                  }}>
                  <Text className="my-2 text-newDark">Denim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Categories');
                  }}>
                  <Text className="my-2 text-newDark">Kids</Text>
                </TouchableOpacity>
              </View>
            )}
            animationDuration={300}
            expandMultiple={false}
            customIcon={item => (
              <Image className="w-5 h-5" source={iconConst.RightForword} />
            )}
          />
        </View>
        <View className="mt-3">
          <View className="flex-row gap-2 my-1">
            <Image className="w-5 h-5" source={iconConst.Call} />
            <Text className="text-newDark">(786) 713-8616</Text>
          </View>
          <View className="flex-row gap-2 my-1">
            <Image className="w-5 h-5" source={iconConst.Location} />
            <Text className="text-newDark">Store locator</Text>
          </View>
        </View>
        <View className="items-center mt-7">
          <View className="my-3">
            <Image className="w-24 h-2" source={iconConst.GrayLine} />
          </View>
          <View className="flex-row gap-7">
            <TouchableOpacity>
              <Image className="w-5 h-5" source={iconConst.Twitter} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image className="w-5 h-5" source={iconConst.Instagram} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image className="w-5 h-5" source={iconConst.Youtube} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
