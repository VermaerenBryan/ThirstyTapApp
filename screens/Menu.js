import React from 'react';
import { Text, View, Image, TouchableOpacity, Button, Alert, onPress, SectionList } from 'react-native';
import { Header } from 'react-native-elements';

import core from '../style/core';
import data from '../assets/data.json';

const DATA = [
  {
    id: '1',
    title: 'Coca Cola',
    content: '33 cl',
    price: '€1,50',
    img: require('../img/photo-of-coca-cola-bottle-2668308.jpg'),
  },
  {
    id: '2',
    title: 'Limonade',
    content: '33 cl',
    price: '€1,30',
    img: require('../img/photo-of-lemon-slices-inside-bottle-3651045.jpg'),
  },
  {
    id: '3',
    title: 'Carlsberg',
    content: '33 cl',
    price: '€2,20',
    img: require('../img/green-glass-liquor-bottle-1435598.jpg'),
  },
  {
    id: '4',
    title: 'Corona',
    content: '33 cl',
    price: '€2,60',
    img: require('../img/person-holding-corona-extra-bottle-2921584.jpg'),
  },
  {
    id: '5',
    title: 'Whiskey',
    content: '10 cl',
    price: '€8,10',
    img: require('../img/alcohol-alcoholic-beverage-cold-339696.jpg'),
  },
  {
    id: '6',
    title: 'Mojito',
    content: '22 cl',
    price: '€3,30',
    img: require('../img/lime-cocktail-drink-with-two-straws-1187766.jpg'),
  },
];

const pictures = {
  '../img/photo-of-coca-cola-bottle-2668308.jpg': require('../img/photo-of-coca-cola-bottle-2668308.jpg'),
};

/*require(img) => require('photos/cola.png/')*/

function Item({ id, title, content, price, img, selected, onSelect }) {
  return (
    <TouchableOpacity onPress={() => onSelect(id)} style={[core.item, { borderColor: selected ? '#FF4E3A' : '#fff' }]}>
      <Image source={{ uri: img }} style={{ width: 100, height: 100 }}></Image>
      <View style={core.info}>
        <Text style={core.title}>
          {title} - {content}
        </Text>
        <Text style={core.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const Menu = () => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );

  return (
    <>
      <View style={core.header}>
        <Text style={core.headerText}>ThirstyTap</Text>
      </View>
      <SectionList sections={data} renderItem={({ item }) => <Item id={item.id} title={item.title} content={item.content} price={item.price} img={item.img} selected={!!selected.get(item.id)} onSelect={onSelect} />} renderSectionHeader={({ section: { category } }) => <Text style={core.category}>{category}</Text>} keyExtractor={(item) => item.id} extraData={selected} />
      <View style={core.container}>
        <TouchableOpacity style={core.button} onPress={onPress}>
          <Text style={core.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Menu;
