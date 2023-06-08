import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomBtn from '../../components/Custom/CustomBtn';

const RecoverPassword = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#1AAABC" />
      <View className="flex-1  justify-center place-items-center ">
        <View className=" my-4 px-4 ">
          <Text className="text-2xl font-semibold px-4 font text-center text-blackc">
            Recover Password
          </Text>
        </View>
        <View className="mx-4  my-2">
          <Text className="-mt-2 text-center text-sm lovercase">
            We will send you an a email with instructions to recover it
          </Text>
        </View>

        <View className="mx-4 my-2 border border-btext rounded-lg">
          <TextInput className="pl-4" placeholder="Email" />
        </View>

        <View className="mx-4 my-4">
          <CustomBtn name="Send Code" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecoverPassword;
