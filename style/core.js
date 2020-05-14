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
    justifyContent: 'flex-end',
    backgroundColor: '#FF4E3A',
    height: 80,
    paddingBottom: 12,
  },
  headerComponent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#FF4E3A',
    height: 80,
    paddingRight: 16,
    paddingBottom: 12,
  },
  headerText: {
    color: colors.neutral[100],
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: '600',
  },
  headerTextComponent: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  headerArrow: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#FF4E3A',
    height: 80,
    paddingRight: 16,
    paddingBottom: 12,
  },
  buttonArrow: {
    position: 'absolute',
    left: 0,
    bottom: 3,
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
    backgroundColor: colors.neutral[100],
    padding: 20,
    marginTop: 8,
    marginVertical: 8,
    borderColor: colors.neutral[500],
    borderWidth: 2,
    borderRadius: 5,
  },
  itemBottom: {
    paddingBottom: 75,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 16,
  },
  title: {
    fontSize: 24,
    color: colors.neutral[800],
  },
  price: {
    fontSize: 20,
    color: colors.neutral[700],
    paddingTop: 8,
  },
  category: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.neutral[400],
    paddingTop: 8,
    paddingLeft: 16,
    padding: 8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.neutral[700],
    paddingTop: 8,
  },
  addText: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 8,
    paddingRight: 8,
    color: colors.neutral[800],
  },
  count: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  continue: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button[100],
    borderColor: colors.button[200],
    borderWidth: 2,
    borderRadius: 5,
    padding: 24,
    height: 40,
    width: 380,
    marginBottom: -10,
  },
  button: {
    display: 'flex',
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
  buttonStart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button[100],
    borderColor: colors.button[200],
    borderWidth: 2,
    borderRadius: 5,
    padding: 24,
    height: 40,
    width: 380,
    marginBottom: 500,
  },
  buttonText: {
    color: colors.neutral[100],
    fontSize: 20,
    fontWeight: '600',
  },
  buttonNavText: {
    color: colors.neutral[100],
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  buttonHeader: {
    position: 'absolute',
    right: 16,
    display: 'flex',
  },
  paymentButtons: {
    paddingTop: 8,
  },
  buttonPayment: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    padding: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    backgroundColor: colors.neutral[100],
    borderColor: colors.neutral[500],
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 8,
  },
  buttonPaymentText: {
    fontSize: 18,
    color: colors.neutral[800],
    paddingLeft: 8,
  },
  buttonDate: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: 40,
    backgroundColor: colors.neutral[900],
  },
  buttonDateText: {
    fontSize: 18,
    color: colors.neutral[100],
    fontWeight: '600',
    textAlign: 'center',
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
    marginBottom: 16,
    padding: 8,
  },
  marginCommon: {
    marginLeft: 16,
    marginRight: 16,
  },
  marginImage: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: -50,
  },
  checkoutTitle: {
    color: colors.neutral[800],
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 16,
  },
  lineText: {
    fontSize: 20,
    color: colors.neutral[800],
    fontWeight: '600',
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.neutral[800],
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: 32,
  },
  inputView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  inputText: {
    fontSize: 20,
    color: colors.neutral[800],
    fontWeight: '600',
  },
  input: {
    height: 40,
    width: 100,
    backgroundColor: colors.neutral[100],
    borderColor: colors.neutral[500],
    borderWidth: 1,
    borderRadius: 5,
  },
  inputCareholder: {
    height: 40,
    width: 'auto',
    backgroundColor: colors.neutral[100],
    borderColor: colors.neutral[500],
    borderWidth: 1,
    borderRadius: 5,
  },
  inputCard: {
    height: 40,
    width: 80,
    backgroundColor: colors.neutral[100],
    borderColor: colors.neutral[500],
    borderWidth: 1,
    borderRadius: 5,
  },
  inputCvv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditCardText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.neutral[800],
    paddingTop: 16,
    paddingBottom: 8,
  },
  creditCardInfo: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.neutral[400],
    paddingLeft: 16,
  },
  inputCreditCardView: {
    paddingBottom: 8,
  },
  imageBartender: {
    width: 500,
    height: 500,
    marginTop: -70,
  },
  imageText: {
    fontSize: 20,
    color: colors.neutral[800],
    textAlign: 'center',
  },
});
