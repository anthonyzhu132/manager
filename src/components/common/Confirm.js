import React from 'react';
import { Text, View, Modal } from 'react-native';
import CardItem from './CardItem';
import Button from './Button';

const Confirm = () => {
  return (
    <Modal>
      <View>
        <CardItem>
          <Text>

          </Text>
        </CardItem>

        <CardItem>
          <Button>Yes</Button>
          <Button>No</Button>
        </CardItem>
      </View>
    </Modal>
  )
}

export default Confirm;