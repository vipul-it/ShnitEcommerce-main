import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { removeAllKeys, setData } from '../../utils/Common'
import { useDispatch } from 'react-redux'
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

    const navigation = useNavigation();


    // const dispatch = useDispatch()
    // const logoutHandler = async () => {
    //     dispatch({
    //         type: 'CHANGE_STACK',
    //         payload: null
    //     })
    //     let name = null
    //     await setData('StackName', name)
    // }

    // const logout = async()=>{
    //     const  userid = await AsyncStorage.getitem('id')
    // }


    return (
        <SafeAreaView className="flex-1">
            <StatusBar backgroundColor="#1AAABC" />
            <View>
                <TouchableOpacity 
                onPress={() =>{
                    navigation.navigate('Login');
                }}


                style={{backgroundColor:"red", width:"90%", padding:10, borderRadius:9,marginTop:30, alignSelf:"center"}}
                >
                    <Text style={{alignSelf:"center", color:"#fff",}}>LogOut</Text>
                    
                </TouchableOpacity>
                {/* <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Welcome')
                    }}
                    className="bg-red-200 p-3 w-[90%] self-center items-center mt-10 rounded-md">
                    <Text className="text-red-600">Logout</Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    )
}

export default Profile