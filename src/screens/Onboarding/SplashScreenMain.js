import { Image, View} from 'react-native'
import React, { useEffect } from 'react'
import SplashScreenImage from "../../assets/images/splashimg.png";

const SplashScreenMain = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(()=>{
      navigation.navigate('Welcome')
    }, 3000);
  },[]);
  return (
    <View className="flex-1">
      <Image className="w-[100%] h-[100%] object-fill" source={SplashScreenImage} alt='splash'/>
    </View>
  )
}

export default SplashScreenMain