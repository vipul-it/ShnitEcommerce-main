import {View, Text, StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import {iconConst} from '../../utils/Images';
import {TouchableOpacity} from 'react-native-gesture-handler';

import CustomBtn2 from '../../components/Custom/CustomBtm2';

const Explore1 = () => {
    const [count, setCount] = useState(1);

    countHandlerMinus = () => {
      setCount (count - 1);
    };

    countHandlerPluse = () => {
      setCount (count + 1);
    };
  return (
    <View>
      <StatusBar backgroundColor="#1AAABC" />
      <View className="mx-4">
        <View className="justify-center items-center">
          <Text className="text-newDark uppercase text-[18px] font-Bold text-center mt-12 tracking-[3px]">
            Checkout
          </Text>
          <Image
            className="w-24 h-2 flex"
            source={iconConst.Customborder}
            alt="border"
          />
        </View>
        <View className="flex-row my-5">
          <View>
            <Image
              className="w-[100px] h-[133px]"
              source={iconConst.Rectangle344}
              alt="product"
            />
          </View>
          <View className="mx-4 my-4">
            <Text className="text-newDark font-Bold tracking-wider">
              Brown Dress
            </Text>
            <Text className="text-newDark ">Dress fabric pure cotton</Text>
            <View className="flex-row gap-3 items-center my-1">
              <TouchableOpacity onPress={countHandlerMinus}>
                <Image
                  className="w-5 h-5"
                  source={iconConst.Minus}
                  alt="button"
                />
              </TouchableOpacity>
              <Text className="text-newDark ">{count}</Text>
              <TouchableOpacity onPress={countHandlerPluse}>
                <Image
                  className="w-5 h-5"
                  source={iconConst.Plus}
                  alt="button"
                />
              </TouchableOpacity>
            </View>
            <Text className="my-1 text-sm font-bold text-theme">
              {'\u20B9'} 3999
            </Text>
          </View>
        </View>

        <Text className="border-b-[0.3px] border-btext"></Text>
        <View className="flex-row items-center gap-3 mt-2">
          <Image className="w-6 h-6" source={iconConst.Voucher} alt="voucher" />
          <Text className="text-newDark font-semibold ">Add promo code</Text>
        </View>
        <Text className="border-b-[0.3px] border-btext"></Text>
        <View className="flex-row items-center justify-between mt-4">
          <View className="flex-row items-center gap-3">
            <Image
              className="w-6 h-6"
              source={iconConst.DoortoDoorDelivery}
              alt="voucher"
            />
            <Text className="text-newDark font-semibold ">Delivery</Text>
          </View>

          <Text className="text-newDark  ">Free</Text>
        </View>
        <Text className="border-b-[0.3px] border-btext"></Text>

        <View className="mt-[60%]">
          <View className="flex-row items-center justify-between mx-2 my-2">
            <Text className="text-newDark font-semibold ">EST. TOTAL</Text>
            <Text className="my-1 text-sm font-Bold text-theme">
              {'\u20B9'} 3999
            </Text>
          </View>
          <CustomBtn2
            name="CHECKOUT"
            srcPath={iconConst.Shoppingbag}
            alt="shopping"
          />
        </View>
      </View>
    </View>
  );
};

export default Explore1;
