// ButtonSection.js
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';

const ButtonSection = () => {
    const buttons = ['Cow', 'Buffalo', 'Bachiya', 'Paadi', 'Male Buffalo', 'Bull', 'Other Cattle']; // Add your buttons here
    const imageurl = 'https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHgxMzMwNzgxLWltYWdlXzEucG5n.png';
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {buttons.map((button, index) => (
                    <TouchableOpacity style={styles.button} key={index}>
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>{button}</Text>
                        </View>
                        {/* <ImageBackground source={{ uri: imageurl }} style={styles.imageBackground}>
                            
                        </ImageBackground> */}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 16,
        padding: 20,
        height: 100,
        backgroundColor: 'white'
    },
    button: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#98E7F5', // Button background color
        borderRadius: 8,
        marginRight: 8,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: 100
    },
    // button: {
    //     position: 'absolute',
    //     bottom: 16,
    //     right: 16,
    // },
    imageBackground: {
        width: 100, // Set your preferred width
        height: 80, // Set your preferred height
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    // buttonText: {
    //     color: 'white',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    //     marginBottom: 8,
    // },
    buttonText: {
        color: '#00377D',
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 10
    },
    buttonTextContainer: {
        position: 'absolute',
        backgroundColor: '#98E7F5',
        height: 30,
        width: 100,
        borderRadius: 10
    }
});

export default ButtonSection;
