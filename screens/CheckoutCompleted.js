import React from 'react';
import { Text, FlatList, View, Image, TouchableOpacity, Button, Alert, onPress, HeaderBarButton } from 'react-native';

import core from '../style/core';

const CheckoutCompleted = ({ navigation }) => {
  return (
    <>
      <View style={core.headerArrow}>
        <Text style={core.headerTextComponent}>Checkout</Text>
      </View>

      <View style={core.marginCommon}>
        <View style={core.totalHistory}>
          <Text style={core.total}>Total:</Text>
          <Text style={core.total}>€7,30</Text>
        </View>
      </View>
    </>
  );
};

export default CheckoutCompleted;
