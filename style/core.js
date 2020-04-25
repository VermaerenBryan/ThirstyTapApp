import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4E3A',
    height: 64,
  },
  headerComponent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF4E3A',
    height: 64,
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: '600',
  },
  headerTextComponent: {
    color: '#fff',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: '600',
    paddingLeft: 145,
  },
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
    marginTop: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: colors.neutral[100],
    borderWidth: 2,
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
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.neutral[700],
    paddingTop: 8,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button[100],
    borderColor: colors.button[200],
    borderWidth: 2,
    borderRadius: 5,
    padding: 24,
    height: 40,
    width: 380,
    marginBottom: 70,
  },
  buttonText: {
    color: colors.neutral[100],
    fontSize: 20,
    fontWeight: '600',
  },
  buttonHeader: {
    display: 'flex',
  },
  total: {
    fontSize: 24,
    color: colors.neutral[700],
  },
  totalHistory: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.neutral[100],
    borderRadius: 5,
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    padding: 8,
  },
});
