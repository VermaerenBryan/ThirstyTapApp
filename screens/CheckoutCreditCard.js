import React from 'react';
import { Text, FlatList, View, Image, TouchableOpacity, Button, Alert, onPress, HeaderBarButton } from 'react-native';

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

const CheckoutCreditCard = () => {
  return (
    <>
      <View style={core.headerComponent}>
        <Text style={core.headerTextComponent}>History</Text>
        <TouchableOpacity style={core.buttonHeader}>
          <Text style={core.buttonNavText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={core.marginCommon}>
        <View style={core.totalHistory}>
          <Text style={core.total}>Total:</Text>
          <Text style={core.total}>€7,30</Text>
        </View>
        <FlatList data={DATA} renderItem={({ item }) => <Item id={item.id} title={item.title} content={item.content} price={item.price} img={item.img} quantity={item.quantity} />} keyExtractor={(item) => item.id} />
      </View>
    </>
  );
};

export default CheckoutCreditCard;
