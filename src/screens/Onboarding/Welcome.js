import {View, Text, StatusBar, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {images} from '../../utils/ImageConstant';
import {useNavigation} from '@react-navigation/native';
import CustomBtn from '../../components/Custom/CustomBtn';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#1AAABC" />
      <View className="h-[70%] w-[100%]  my-4 mt-8 px-4 ">
        <Image
          source={images.WelcomeImg}
          className=" h-full w-full  rounded-lg"
        />
        <Text className="-mt-28 text-4xl text-white px-4 font">
          Take your style every where with us
        </Text>
      </View>
      <View className="mx-4 my-2">
        <CustomBtn
          name={'Login/SignUp'}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
      <View className="mx-4 my-4">
        <CustomBtn
          name={'Get Started'}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
