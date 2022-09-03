import React, {useState, FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IGetStartedForm from './GetStartedForm.interface';

import {TextInput} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './GetStartedForm.styles';

const GetStartedForm: FC<IGetStartedForm> = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: 'Australia',
      value: 'Australia',
    },
    {
      label: 'Mexico',
      value: 'Mexico',
    },
    {
      label: 'China',
      value: 'China',
    },
    {
      label: 'Ghana',
      value: 'Ghana',
    },
    {
      label: 'Nigeria',
      value: 'Nigeria',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Let's Get You Started</Text>
      </View>

      {/**Form Inputs main body */}
      <View style={styles.inputsContainer}>
        <View style={styles.inputs}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            placeholder="Enter Full Name"
            mode="outlined"
            label="Full Name"
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            placeholder="Enter Phone Number"
            mode="outlined"
            label="Phone Number"
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            placeholder="Email Address"
            mode="outlined"
            label="Email Address"
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            secureTextEntry
            mode="outlined"
            label="Password"
            right={<TextInput.Icon name="eye" />}
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            secureTextEntry
            mode="outlined"
            label="Confirm Password"
            right={<TextInput.Icon name="eye" />}
          />
        </View>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginLink}>
          <Text>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginLinkText}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetStartedForm;
