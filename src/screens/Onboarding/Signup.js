import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {iconConst} from '../../utils/Images';
import { useNavigation } from '@react-navigation/native';
import CustomBtn from '../../components/Custom/CustomBtn';

const Signup = () => {
  
    const navigation = useNavigation();

  const [isSelected, setSelection] = useState(false);

  const changeIcons = () => {
    setSelection(!isSelected);
  };

  

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#1AAABC" />
      <View className="flex-1  justify-center place-items-center ">
        <View className=" my-4 px-4 ">
          <Text className="text-2xl font-semibold px-4 font text-center text-blackc">
            Let's Get Started
          </Text>
        </View>
        <View className="mx-4  my-2">
          <Text className="-mt-2 text-center text-sm">
            Create a new account
          </Text>
        </View>
        <View className="mx-4 my-2 border border-btext rounded-lg">
          <TextInput className="pl-4" placeholder="Name" />
        </View>
        <View className="mx-4 my-2 border border-btext rounded-lg">
          <TextInput className="pl-4" placeholder="Email / Phone No." />
        </View>
        <View className="mx-4 my-2 border border-btext rounded-lg">
          <TextInput className="pl-4" placeholder="Password" />
        </View>

        <View className=" flex mx-4 my-2">
          {/* <CheckBox 
          value={isSelected}
          onClick={()=> setSelection(!isSelected)}
          
        /> */}
          <TouchableOpacity onPress={changeIcons}>
            {isSelected ? (
              <Image className="w-5 h-5" source={iconConst.CheckBox} />
            ) : (
              <Image className="w-5 h-5" source={iconConst.CheckBoxEmpty} />
            )}
          </TouchableOpacity>

          <Text className="ml-2 text-[12px] font-medium ">
            I agree with the{' '}
            <Text className="text-pink-500">terms and conditions</Text> and{' '}
            <Text className="text-pink-500">Privacy Policies </Text>
          </Text>
        </View>
        <View className="mx-4 my-4">
          <CustomBtn
            name={'SignUp'}
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
