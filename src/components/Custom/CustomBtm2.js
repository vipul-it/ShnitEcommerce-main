import { Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';


const CustomBtn2 = ({name, onPress, srcPath, altName}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row w-[100%] bg-theme py-3 items-center justify-center rounded-lg">
      <Image source={srcPath} className="w-4 h-4 mr-3" alt={altName} />
      <Text className="font-semiBold text-white text-base">{name}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn2;
