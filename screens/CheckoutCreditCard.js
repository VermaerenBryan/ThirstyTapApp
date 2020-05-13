import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Button, Alert, onPress, HeaderBarButton } from 'react-native';
import Svg, { Rect, Path, G } from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker';

import core from '../style/core';

const CheckoutCreditCard = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [inputs, changeInputs] = React.useState(['', '', '', '', '', '', '']);
  const checkInputs = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == '' || array[i] == Date()) {
        return false;
      }
    }
    return true;
  };

  const updateInputs = (text, index) => {
    const tempArray = [...inputs];
    tempArray[index] = text;
    changeInputs(tempArray);
    setShowButton(checkInputs(tempArray));
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    updateInputs(currentDate.toString(), 5);
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
          <TextInput style={core.inputCareholder} placeholder={'Name'} textAlign={'left'} maxLength={30} onChangeText={(text) => updateInputs(text, 0)} value={inputs[0]} />

          <Text style={core.creditCardText}>Card Number</Text>
          <View style={core.inputView}>
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => updateInputs(text, 1)} value={inputs[1]} />
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => updateInputs(text, 2)} value={inputs[2]} />
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => updateInputs(text, 3)} value={inputs[3]} />
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => updateInputs(text, 4)} value={inputs[4]} />
          </View>

          <Text style={core.creditCardText}>Expiration Date</Text>
          {show && <DateTimePicker testID="dateTimePicker" timeZoneOffsetInMinutes={0} value={date} mode={mode} is24Hour={true} display="default" onChange={onChange} />}
          <TouchableOpacity style={core.buttonDate} onPress={showDatepicker}>
            <Text style={core.buttonDateText}>Choose Date</Text>
          </TouchableOpacity>
          <Text style={core.creditCardText}>CVV/CVC</Text>
          <View style={core.inputCvv}>
            <TextInput style={core.inputCard} placeholder={'0000'} textAlign={'center'} maxLength={4} onChangeText={(text) => updateInputs(text, 6)} value={inputs[6]} />
            <Text style={core.creditCardInfo}>3 or 4 digit code</Text>
          </View>
        </View>
      </View>
      {showButton ? (
        <View style={core.container}>
          <TouchableOpacity style={core.button} onPress={() => navigation.navigate('CheckoutCompleted')}>
            <Text style={core.buttonText}>Complete Order</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export default CheckoutCreditCard;
