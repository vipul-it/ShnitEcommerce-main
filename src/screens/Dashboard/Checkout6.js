import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {iconConst} from '../../utils/Images';
import { useNavigation } from '@react-navigation/native';

const Checkout6 = () => {
  const navigation = useNavigation();
  
  // useEffect(() => {
  //     const timer = setTimeout(()=>{
  //       setModalVisible(true)
  //     }, 100);
  //   });
  
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{position: 'absolute', top: 10, right: 10}}
              // onPress={() => setModalVisible(!modalVisible)}
              onPress={()=>{
                navigation.navigate('HomeScreen')
              }}
              >
              <Image
                style={{width: 20, height: 20}}
                source={iconConst.Close}
                alt="Close"
              />
            </Pressable>
            <Text style={styles.modalText}>Payment success</Text>
            <Image
              style={{width: 72, height: 62}}
              source={iconConst.paymentsucess}
              alt="Close"
            />

            <View style={{marginTop: 8}}>
              <Text style={styles.modalText2}>Your payment was success</Text>
              <Text style={styles.modalText3}>Payment ID 154253526</Text>
            </View>
            <Image
              source={iconConst.Customborder}
              alt="border"
              style={{width: 125, height: 8, marginTop: 10, marginBottom: 10}}
            />
            <Text style={styles.modalText2}>Rate your purchase</Text>

            <View style={{flexDirection: 'row', gap: 3}}>
              <TouchableOpacity>
                <Image
                  style={{width: 40, height: 40}}
                  source={iconConst.Disappointed}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{width: 40, height: 40}}
                  source={iconConst.Happy}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{width: 40, height: 40}}
                  source={iconConst.InLove}
                />
              </TouchableOpacity>
            </View>
            <View style={{display:'flex', flexDirection: "row", justifyContent:'space-between', position: 'absolute', bottom:10 }}>
              <TouchableOpacity
                style={[styles.buttonBottom, styles.buttonSubmit]}
                onPress={()=>{
                  navigation.navigate('HomeScreen')
                }}>
                <Text style={{textAlign:'center', fontWeight: 500, fontSize: 16, color: 'white'}}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonBottom, styles.buttonBackHome]}
                onPress={()=>{
                  navigation.navigate('HomeScreen')
                }}>
                <Text style={{textAlign:'center', fontWeight: 500, fontSize: 16, color: '#42585A'}}>Back to home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 0,
    padding: 35,
    height: '50%',
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 0,
    padding: 10,
    elevation: 2,
  },
  buttonBottom: {
    borderRadius: 0,
    padding: 10,
  
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonSubmit: {
    backgroundColor: '#1AAABC',
    marginRight: '20%',
  },
  buttonBackHome: {
    backgroundColor: '#fff',
    marginLeft: '10%',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    letterSpacing: 3,
    fontSize: 18,
    color: '#364670',
    textTransform: 'uppercase',
  },
  modalText2: {
    textAlign: 'center',
    fontSize: 18,
    color: '#6E878B',
    lineHeight: 24,
    fontWeight: 400,
  },
  modalText3: {
    textAlign: 'center',
    fontSize: 15,
    color: '#667B76',
    lineHeight: 24,
    fontWeight: 400,
  },
});

export default Checkout6;
