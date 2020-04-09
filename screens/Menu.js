import React from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native-elements';

const Menu = () => {
  return (
    <>
      <Header centerComponent={{ text: 'ThirstyTap', style: { color: '#fff', fontSize: 24, fontWeight: '600' } }} backgroundColor="#FF4E3A" containerStyle={{ height: 64, paddingBottom: 24 }} />
      <Text>Menu</Text>
    </>
  );
};

export default Menu;
