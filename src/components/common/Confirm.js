import React from 'react';
import { Text, View, Modal } from 'react-native';
import CardItem from './CardItem';
import Button from './Button';

const Confirm = ({ children }) => {
  return (
    <Modal>
      <View>
        <CardItem>
          <Text>
            {children}
          </Text>
        </CardItem>

        <CardItem>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardItem>
      </View>
    </Modal>
  )
}

export default Confirm;