import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomBtn2 from '../../components/Custom/CustomBtm2';
import {iconConst} from '../../utils/Images';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const Checkout5 = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
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

        <View className="mt-[20%]">
          <Text className="text-newDark text-lg">Iris Watson</Text>
          <View className="my-3">
            {/* Colapse heading */}
            <Collapse>
              <CollapseHeader touchableOpacityProps={toggleCollapse}>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <Text className="font-Normal text-[16px] text-newDark">
                      606-3727 Ullamcorper. Street
                    </Text>
                  </View>

                  <View className="flex-row">
                    {collapsed ? (
                      <Image
                        className="w-5 h-5"
                        source={iconConst.BottomForword}
                      />
                    ) : (
                      <Image
                        className="w-5 h-5"
                        source={iconConst.TopForword}
                      />
                    )}
                  </View>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View className=" mt-1">
                  <Text className="text-newDark my-1">Roseville NH 11523</Text>
                  <Text className="text-newDark my-1">(786) 713-8616</Text>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
          <View className="">
            <Text className="text-newDark border-b-[0.3px] w-[100%] border-btext"></Text>
            <View className="my-3 ">
              {/* Colapse heading */}
              <Collapse>
                <CollapseHeader touchableOpacityProps={toggleCollapse}>
                  <View className="flex-row items-center justify-between ">
                    <View className="flex-row items-center ">
                      <Image
                        className="w-[60px] h-[37px] mr-2 "
                        source={iconConst.MasterCard}
                        alt="mastercard"
                      />
                      <Text className="font-Normal text-[16px] text-newDark ">
                        Master Card ending ••••89
                      </Text>
                    </View>

                    <View className="flex-row">
                      {collapsed ? (
                        <Image
                          className="w-5 h-5"
                          source={iconConst.BottomForword}
                        />
                      ) : (
                        <Image
                          className="w-5 h-5"
                          source={iconConst.TopForword}
                        />
                      )}
                    </View>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View className=" mt-1">
                    <Text className="text-newDark my-1"></Text>
                    <Text className="text-newDark my-1"></Text>
                  </View>
                </CollapseBody>
              </Collapse>
            </View>
            <Text className="text-newDark border-b-[0.3px] w-[100%] -mt-3 border-btext"></Text>
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
        </View>

        <View className="mt-6">
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

export default Checkout5;
