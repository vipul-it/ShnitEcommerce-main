import {View, Text, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import CustomBtn2 from '../../components/Custom/CustomBtm2';
import {iconConst} from '../../utils/Images';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const Explore2 = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
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
          <Text className="text-newDark">SHIPPING METHOD</Text>
          <View className="my-3 bg-ltheme rounded-xl py-3 px-3">
            {/* Colapse heading */}
            <Collapse>
              <CollapseHeader touchableOpacityProps={toggleCollapse}>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <Text className="font-Normal text-[16px] text-newDark">
                      Pickup at store
                    </Text>
                  </View>

                  <View className="flex-row">
                    <Text className="text-newDark mr-2">FREE</Text>
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
                <View className="ml-[6%] mt-3">
                  <Text className="text-newDark my-2">
                    09/06/2023 - 12/06/2023.
                  </Text>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
          <Text className="text-newDark">PAYMENT METHOD</Text>
          <View className="my-3  bg-ltheme rounded-xl py-3 px-3">
            {/* Colapse heading */}
            <Collapse>
              <CollapseHeader touchableOpacityProps={toggleCollapse}>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <Text className="font-Normal text-[16px] text-newDark">
                      Select payment method
                    </Text>
                  </View>

                  <View className="flex-row">
                    <Text className="text-newDark mr-2"></Text>
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
                <View className="ml-[6%] mt-3 ">
                  <Text className="text-newDark my-2">Payment method 1</Text>
                  <Text className="text-newDark my-2">Payment method 2</Text>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
        </View>

        <View className="mt-[50%]">
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

export default Explore2;
