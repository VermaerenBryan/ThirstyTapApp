import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Button, Alert, onPress, SectionList } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';

import core from '../style/core';
import data from '../assets/data.json';

function Item({ id, title, content, price, img, selected, onSelect }) {
  const [counter, setCounter] = useState(false);
  return (
    <View style={core.marginCommon}>
      <TouchableOpacity onPress={() => onSelect(id, counter, setCounter)} style={[core.item, { borderColor: selected ? '#FF4E3A' : '#fff' }]}>
        <Image source={{ uri: img }} style={{ width: 100, height: 100 }}></Image>
        <View style={core.info}>
          <Text style={core.title}>
            {title} - {content}
          </Text>
          <Text style={core.price}>{price}</Text>

          {counter ? (
            <View style={core.count}>
              <Svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <Path d="M19 13H5v-2h14v2z" />
                <Path d="M0 0h24v24H0z" fill="none" />
              </Svg>
              <Text style={core.addText}>1</Text>
              <Svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                <Path d="M0 0h24v24H0z" fill="none" />
              </Svg>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const Menu = () => {
  const [selected, setSelected] = React.useState(new Map());
  const [hideButton, setHideButton] = useState(true);

  const onSelect = React.useCallback(
    (id, counter, setCounter) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
      setCounter(!counter);
      
      if (Array.from(newSelected.values()).includes(true)) {
        setHideButton(false);
      } else {
        setHideButton(true);
      }
    },
    [selected]
  );

  return (
    <>
      <View style={core.header}>
        <Text style={core.headerText}>ThirstyTap</Text>
      </View>
      <SectionList sections={data} renderItem={({ item }) => <Item id={item.id} title={item.title} content={item.content} price={item.price} img={item.img} selected={!!selected.get(item.id)} onSelect={onSelect} />} renderSectionHeader={({ section: { category } }) => <Text style={core.category}>{category}</Text>} keyExtractor={(item) => item.id} extraData={selected} />
      {hideButton ? null : (
        <View style={core.container}>
          <TouchableOpacity style={core.button} onPress={onPress}>
            <Text style={core.buttonText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Menu;
