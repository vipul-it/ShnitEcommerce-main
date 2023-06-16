import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerStack = () => {
    const Drawer = createDrawerNavigator();
  return (
    <>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'CustomDrawer',
        drawerStyle: {
          width: Platform.OS == 'ios' ? '80%' : '80%',
          height: '100%',
          backgroundColor: '#fff',
          color: '#1AAABC',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {/* <Drawer.Screen name="Drawer Screen" component={TabStack} />
      <Drawer.Screen name="New" component={New} />
      <Drawer.Screen name="Apparel" component={Apparel} />
      <Drawer.Screen name="Bag" component={Bag} />
      <Drawer.Screen name="Shoes" component={Shoes} />
      <Drawer.Screen name="Beauty" component={Beauty} />
      <Drawer.Screen name="Accessories" component={Accessories} />
      <Drawer.Screen name="Login" component={Login} /> */}
    </Drawer.Navigator>
  </>
  )
}

export default DrawerStack