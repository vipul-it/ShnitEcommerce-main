import {View, Text, StatusBar, Image, TextInput} from 'react-native';
import React from 'react';
import {iconConst} from '../../utils/Images';

import CustomBtn from '../../components/Custom/CustomBtn';
import { useNavigation } from '@react-navigation/native';

const Checkout4 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor="#1AAABC" />
      <View className="mx-4">
        <View className="justify-center items-center">
          <Text className="text-newDark uppercase text-[18px] font-Bold text-center mt-12 tracking-[3px]">
          Payment Method
          </Text>
          <Image
            className="w-28 h-2 flex"
            source={iconConst.Customborder}
            alt="border"
          />
        </View>
        <View className="justify-center items-center my-4">
            <Image className="w-[300px] h-[169px]" source={iconConst.Card} alt='card' />
        </View>

        <View className="flex-row justify-between mt-2">
          <TextInput
            className="border-b-[0.3px] w-[100%] border-btext text-newDark"
            placeholder="Name On Card"
          />
          
        </View>
        <Text className="text-gray-450 text-[11px]">*Please enter your exaxtly as it appears on your card</Text>
        <View className="flex-row justify-between">
          <TextInput
            className="border-b-[0.3px] w-[100%] border-btext text-newDark"
            placeholder="Card Number"
          />
        </View>
        
        <View className="flex-row justify-between">
          <TextInput
            className="border-b-[0.3px] w-[40%] border-btext text-newDark"
            placeholder="Exp Month"
          />
          <TextInput
            className="border-b-[0.3px] w-[40%] border-btext text-newDark"
            placeholder="Exp Date"
          />
        </View>
        <View className="flex-row ">
          <TextInput
            className="border-b-[0.3px] w-[100%] border-btext text-newDark"
            placeholder="CVV"
          />
        </View>

        <View className="mt-24">
          <CustomBtn name="+  Add Now" 
          onPress={()=>{
            navigation.navigate("Checkout5")
          }}/>
        </View>
        
      </View>
    </View>
  );
};

export default Checkout4;
