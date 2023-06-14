import {View, Text, StatusBar, Image, TextInput} from 'react-native';
import React from 'react';
import {iconConst} from '../../utils/Images';

import CustomBtn from '../../components/Custom/CustomBtn';

const Explore3 = () => {
  return (
    <View>
      <StatusBar backgroundColor="#1AAABC" />
      <View className="mx-4">
        <View className="justify-center items-center">
          <Text className="text-newDark uppercase text-[18px] font-Bold text-center mt-12 tracking-[3px]">
            ADD SHIPPING ADDRESS
          </Text>
          <Image
            className="w-28 h-2 flex"
            source={iconConst.Customborder}
            alt="border"
          />
        </View>

        <View className="flex-row justify-between mt-2">
          <TextInput
            className="border-b-[0.3px] w-[40%] border-btext text-newDark"
            placeholder="First Name"
          />
          <TextInput
            className="border-b-[0.3px] w-[40%] border-btext text-newDark"
            placeholder="Last Name"
          />
        </View>
        <View className="flex-row justify-between">
          <TextInput
            className="border-b-[0.3px] w-[100%] border-btext text-newDark"
            placeholder="Address"
          />
        </View>
        <View className="flex-row ">
          <TextInput
            className="border-b-[0.3px] w-[100%] border-btext text-newDark"
            placeholder="City"
          />
        </View>
        <View className="flex-row justify-between">
          <TextInput
            className="border-b-[0.3px] w-[40%] border-btext text-newDark"
            placeholder="State"
          />
          <TextInput
            className="border-b-[0.3px] w-[40%] border-btext text-newDark"
            placeholder="ZIP Code"
          />
        </View>
        <View className="flex-row ">
          <TextInput
            className="border-b-[0.3px] w-[100%] border-btext text-newDark"
            placeholder="Phone Number"
          />
        </View>

        <View className="mt-[80%]">
          <CustomBtn name="+  Add Now" />
        </View>
      </View>
    </View>
  );
};

export default Explore3;
