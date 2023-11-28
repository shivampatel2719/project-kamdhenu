import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { CheckBox } from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';

const SellScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleImageUpload = () => {
    // Implement your image upload logic here
    console.log('Upload Image');
  };

  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log('Form submitted');
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Input */}
      <RNPickerSelect
        onValueChange={(value) => setSelectedOption(value)}
        items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        placeholder={{ label: 'Select Option', value: null }}
        value={selectedOption}
        style={{ ...pickerSelectStyles }}
      />
      {/* Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={handleQuantityChange}
      />

      {/* Checkbox */}
      {/* <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text style={styles.checkboxLabel}>Agree to terms and conditions</Text>
      </View> */}

      {/* Image Upload Buttons */}
      <View style={styles.imageUploadContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
          <Icon name="camera" size={20} color="white" />
          <Text style={styles.uploadButtonText}>Upload Image 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
          <Icon name="camera" size={20} color="white" />
          <Text style={styles.uploadButtonText}>Upload Image 2</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ecf0f1', // Light gray background color
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  imageUploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  uploadButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  uploadButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default SellScreen;

