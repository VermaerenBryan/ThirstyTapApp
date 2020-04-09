import React from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native-elements';

const Checkout = () => {
  return (
    <>
      <Header centerComponent={{ text: 'Checkout', style: { color: '#fff', fontSize: 24, fontWeight: '600' } }} backgroundColor="#FF4E3A" containerStyle={{ height: 64, paddingBottom: 24 }} />
      <Text>Checkout</Text>
    </>
  );
};

export default Checkout;
