import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import Collapsible from 'react-native-collapsible';
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native-gesture-handler';

const Separator = () => <View style={styles.separator} />;

const SellScreen = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [quantity, setQuantity] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleQuantityChange = (value) => {
        setQuantity(value);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);
    };

    const handleImageUpload = () => {
        console.log('Upload Image');
    };

    const handleSubmit = () => {
        console.log('Form submitted');
    };

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    const [value, setValue] = useState(null);

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.container}>
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
                {/* Dropdown Input */}
                <Text style={styles.textLabel}>kaunsa pashu ? <Text style={{ color: '#F62919' }}>*</Text></Text>
                <Dropdown
                    style={dropdownstyles.dropdown}
                    placeholderStyle={dropdownstyles.placeholderStyle}
                    selectedTextStyle={dropdownstyles.selectedTextStyle}
                    inputSearchStyle={dropdownstyles.inputSearchStyle}
                    iconStyle={dropdownstyles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />

                <Separator />

                {/* Dropdown Input */}
                <Text style={styles.textLabel}>kaunsa pashu ? <Text style={{ color: '#F62919' }}>*</Text></Text>
                <Dropdown
                    style={dropdownstyles.dropdown}
                    placeholderStyle={dropdownstyles.placeholderStyle}
                    selectedTextStyle={dropdownstyles.selectedTextStyle}
                    inputSearchStyle={dropdownstyles.inputSearchStyle}
                    iconStyle={dropdownstyles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />
                <Separator />
                {/* Number Input */}
                <Text style={styles.textLabel}>kaunsa pashu ? <Text style={{ color: '#F62919' }}>*</Text></Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Quantity"
                    keyboardType="numeric"
                    value={quantity}
                    onChangeText={handleQuantityChange}
                />
                <Separator />

                {/* Number Input */}
                <Text style={styles.textLabel}>kaunsa pashu ? <Text style={{ color: '#F62919' }}>*</Text></Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Quantity"
                    keyboardType="numeric"
                    value={quantity}
                    onChangeText={handleQuantityChange}
                />
                <Separator />
                {/* Number Input */}
                <Text style={styles.textLabel}>kaunsa pashu ? <Text style={{ color: '#F62919' }}>*</Text></Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Quantity"
                    keyboardType="numeric"
                    value={quantity}
                    onChangeText={handleQuantityChange}
                />
                <Separator />
                {/* Checkbox */}
                <View style={styles.checkboxContainer}>
                    <CheckBox isChecked={isChecked} onClick={handleCheckboxChange} />
                    <Text style={styles.checkboxLabel}>Agree to terms and conditions</Text>
                </View>
                <Text style={{ marginLeft: 30, color: '#3498db' }}>Agree to terms and conditions</Text>
                <Separator />
                {/* Image Upload Buttons */}
                <Text style={styles.checkboxLabel}>Enter good picture</Text>
                <Text style={{ alignSelf: 'center', marginTop: '5%', marginBottom: '5%' }}>Agree to terms and conditions</Text>
                <TouchableOpacity style={styles.uploadVideoButton} onPress={handleImageUpload}>
                    <Icon name="video-camera" size={100} color="#3498db" />
                    <Text style={styles.uploadButtonText}>Upload Video</Text>
                </TouchableOpacity>
                <View style={styles.imageUploadContainer}>
                    <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
                        <Text style={styles.uploadButtonText}>Upload Image 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
                        <Text style={styles.uploadButtonText}>Upload Image 2</Text>
                    </TouchableOpacity>
                </View>

                <Separator />
                <TouchableOpacity style={styles.toggleText} onPress={toggleCollapse}>
                    <Text>
                        Toggle Collapse <Icon name={isCollapsed ? 'chevron-down' : 'chevron-up'} />
                    </Text>
                </TouchableOpacity>

                {/* Collapsible Content */}
                <Collapsible collapsed={isCollapsed}>
                    {/* Your Collapsible Content Goes Here */}
                    <View style={{ padding: 20, backgroundColor: 'lightgray' }}>
                        <Text>This is collapsible content.</Text>
                    </View>
                </Collapsible>


                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#3498db',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
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
    uploadVideoButton: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: 200,
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#3498db',
        padding: 10,
        // marginHorizontal: 5,
        margin: 20
    },
    uploadButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#3498db',
        padding: 10,
        // marginHorizontal: 5,
        margin: 20
    },
    uploadButtonText: {
        color: '#3498db',
        marginLeft: 5,
    },
    submitButton: {
        backgroundColor: '#3498db',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 8,
    },
    textLabel: {
        margin: 5,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    toggleText: {
        padding: 10,
        margin: 10,
        width: '90%',
        borderWidth: 1,
        borderColor: '#3498db',
        borderRadius: 10,
    }
});

const dropdownstyles = StyleSheet.create({
    dropdown: {
        height: 45,
        borderWidth: 1,
        borderColor: '#3498db',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default SellScreen;
