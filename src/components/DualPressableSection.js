// DualPressableSection.js
import React from 'react';
import { View, Pressable, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
};

const DualPressableSection = ({ onLeftPress, onRightPress }) => {
    const truncatedLeftText = truncateText('Lorem ipsum dolor sit amet, consectetur adipiscing.', 5);
    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable} onPress={onLeftPress}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.pressableText}>
                    <Icon name='location-arrow' size={15} />&nbsp;{truncatedLeftText}
                </Text>
            </Pressable>

            <Pressable style={styles.rightButton} onPress={onRightPress}>
                <Text style={styles.pressableButtonText}>
                    <Icon name='sort' size={15}/>&nbsp;&nbsp;&nbsp;Sort Pashu
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    pressable: {
        padding: 8,

    },
    pressableText: {
        fontSize: 12,
        color: '#3498db',
        fontWeight: 'bold',
    },
    rightButton: {
        padding: 8,
        backgroundColor: '#0000', // Background color of the button
        borderRadius: 20, // Adjust the border radius to create a cylindrical shape
        borderWidth: 2, // Border width to make the outer border visible
        borderColor: '#2980b9', // Border color
        width: '30%'
      },
      pressableButtonText: {
        fontSize: 13,
        color: '#3498db',
        textAlign: 'right', // Center the text within the button
      },
    
});

export default DualPressableSection;
