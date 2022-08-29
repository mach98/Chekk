import React, {useState, FC} from 'react';
import {View, Text, TextInput} from 'react-native';
import IGetStartedForm from './GetStartedForm.interface';

const GetStartedForm: FC<IGetStartedForm> = () => {
  return (
    <View>
      <Text>Let's Get You Started</Text>

      <View>
        <TextInput placeholder="Full Name" />
      </View>
    </View>
  );
};

export default GetStartedForm;
