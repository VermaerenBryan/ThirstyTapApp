import React from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Button, Alert, onPress, HeaderBarButton } from 'react-native';
import Svg, { Rect, Path, G } from 'react-native-svg';

import core from '../style/core';

const CheckoutCreditCard = ({ navigation }) => {
  const [careholder, onChangeCareholderText] = React.useState('');
  const [card1, onChangeCard1Text] = React.useState('');
  const [card2, onChangeCard2Text] = React.useState('');
  const [card3, onChangeCard3Text] = React.useState('');
  const [card4, onChangeCard4Text] = React.useState('');

  return (
    <>
      <View style={core.headerArrow}>
        <TouchableOpacity style={core.buttonArrow} onPress={() => navigation.navigate('Checkout')}>
          <Svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48">
            <Path d="M0 0h24v24H0V0z" fill="none" />
            <Path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" fill="#fff" />
          </Svg>
        </TouchableOpacity>
        <Text style={core.headerTextComponent}>Checkout</Text>
      </View>

      <View style={core.marginCommon}>
        <View style={core.inputCreditCardView}>
          <Text style={core.creditCardText}>Name careholder</Text>
          <TextInput style={core.inputCareholder} placeholder={'Name'} textAlign={'left'} maxLength={30} onChangeText={(text) => onChangeCareholderText(text)} value={careholder} />
        </View>

        <View style={core.inputCreditCardView}>
          <Text style={core.creditCardText}>Card Number</Text>
          <View style={core.inputView}>
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => onChangeCard1Text(text)} value={card1} />
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => onChangeCard2Text(text)} value={card2} />
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => onChangeCard3Text(text)} value={card3} />
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => onChangeCard4Text(text)} value={card4} />
          </View>
        </View>
      </View>
    </>
  );
};

export default CheckoutCreditCard;
