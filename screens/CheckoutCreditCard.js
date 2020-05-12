import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Button, Alert, onPress, HeaderBarButton } from 'react-native';
import Svg, { Rect, Path, G } from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker';

import core from '../style/core';

const CheckoutCreditCard = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

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

          <Text style={core.creditCardText}>Card Number</Text>
          <View style={core.inputView}>
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => onChangeCard1Text(text)} value={card1} />
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => onChangeCard2Text(text)} value={card2} />
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => onChangeCard3Text(text)} value={card3} />
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => onChangeCard4Text(text)} value={card4} />
          </View>

          <Text style={core.creditCardText}>Expiration Date</Text>
          {show && <DateTimePicker testID="dateTimePicker" timeZoneOffsetInMinutes={0} value={date} mode={mode} is24Hour={true} display="default" onChange={onChange} />}
          <TouchableOpacity style={core.buttonDate} onPress={showDatepicker}>
            <Text style={core.buttonDateText}>Choose Date</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CheckoutCreditCard;
