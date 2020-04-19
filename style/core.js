import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from './colors';

export default StyleSheet.create({
  backgroundDark: {
    backgroundColor: colors.neutral[900],
  },
  backgroundLight: {
    backgroundColor: colors.neutral[100],
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.neutral[800],
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.neutral[700],
    paddingTop: 8,
  },
});
