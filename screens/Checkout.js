import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TouchableOpacity, TextInput, ScrollView, Button, Alert, onPress, HeaderBarButton } from 'react-native';
import Svg, { Rect, Path, G } from 'react-native-svg';

import core from '../style/core';

const DATA = [
  {
    id: '1',
    title: 'Coca Cola',
    content: '33 cl',
    price: '€1,50',
    img: require('../img/photo-of-coca-cola-bottle-2668308.jpg'),
    quantity: '4',
  },
  {
    id: '2',
    title: 'Limonade',
    content: '33 cl',
    price: '€1,30',
    img: require('../img/photo-of-lemon-slices-inside-bottle-3651045.jpg'),
    quantity: '2',
  },
];

function Item({ id, title, content, price, img, quantity }) {
  return (
    <View style={core.item}>
      <Image source={img} style={{ width: 100, height: 100 }}></Image>
      <View style={core.info}>
        <Text style={core.title}>
          {title} - {content}
        </Text>
        <Text style={core.price}>{price}</Text>
        <Text style={core.quantity}>x{quantity}</Text>
      </View>
    </View>
  );
}

const Checkout = ({ navigation }) => {
  const [personName, onChangeNameText] = React.useState('');
  const [tableNumber, onChangeNumberText] = React.useState('');

  return (
    <>
      {/* <Header centerComponent={{ text: 'Checkout', style: { color: '#fff', fontSize: 24, fontWeight: '600' } }} backgroundColor="#FF4E3A" containerStyle={{ height: 64, paddingBottom: 24 }} /> */}
      <View style={core.headerComponent}>
        <Text style={core.headerTextComponent}>Checkout</Text>
        <TouchableOpacity style={core.buttonHeader}>
          <Text style={core.buttonNavText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={core.marginCommon}>
          <Text style={core.checkoutTitle}>Your Order</Text>

          <FlatList data={DATA} renderItem={({ item }) => <Item id={item.id} title={item.title} content={item.content} price={item.price} img={item.img} quantity={item.quantity} />} keyExtractor={(item) => item.id} />

          <View style={core.line}>
            <Text style={core.lineText}>Total:</Text>
            <Text style={core.lineText}>€10,40</Text>
          </View>

          <View style={core.inputView}>
            <Text style={core.inputText}>Name:</Text>
            <TextInput style={core.input} placeholder={'Name'} textAlign={'center'} maxLength={12} onChangeText={(text) => onChangeNameText(text)} value={personName} />
          </View>

          <View style={core.inputView}>
            <Text style={core.inputText}>Table number:</Text>
            <TextInput style={core.input} placeholder={'Number'} textAlign={'center'} maxLength={2} onChangeText={(text) => onChangeNumberText(text)} value={tableNumber} />
          </View>

          <Text style={core.checkoutTitle}>Payment Method</Text>

          <View style={core.paymentButtons}>
            <TouchableOpacity style={core.buttonPayment} onPress={() => navigation.navigate('CheckoutCash')}>
              <Svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                <G>
                  <Rect fill="none" height="24" width="24" />
                </G>
                <G>
                  <G />
                  <Path d="M15,18.5c-2.51,0-4.68-1.42-5.76-3.5H15l1-2H8.58c-0.05-0.33-0.08-0.66-0.08-1s0.03-0.67,0.08-1H15l1-2H9.24 C10.32,6.92,12.5,5.5,15,5.5c1.61,0,3.09,0.59,4.23,1.57L21,5.3C19.41,3.87,17.3,3,15,3c-3.92,0-7.24,2.51-8.48,6H3l-1,2h4.06 C6.02,11.33,6,11.66,6,12s0.02,0.67,0.06,1H3l-1,2h4.52c1.24,3.49,4.56,6,8.48,6c2.31,0,4.41-0.87,6-2.3l-1.78-1.77 C18.09,17.91,16.62,18.5,15,18.5z" fill="#191919" />
                </G>
              </Svg>
              <Text style={core.buttonPaymentText}>Cash</Text>
            </TouchableOpacity>

            <TouchableOpacity style={core.buttonPayment} onPress={() => navigation.navigate('CheckoutCreditCard')}>
              <Svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <Path d="M0 0h24v24H0z" fill="none" />
                <Path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="#191919" />
              </Svg>
              <Text style={core.buttonPaymentText}>Credit Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Checkout;
