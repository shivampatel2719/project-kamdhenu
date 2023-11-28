// HomeScreenHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreenHeader = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                {/* App Name */}
                <Text style={styles.appName}>Kamdhenu</Text>

                {/* Right Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cylinderButton} onPress={() => console.log('Button 1 pressed')}>
                        {/* <LinearGradient
                            colors={['#3498db', '#ffffff']}
                            style={styles.button}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        > */}
                        <Text style={styles.cylinderButtonText}>Sell Pashu</Text>
                        {/* </LinearGradient> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundButton} onPress={() => console.log('Button 1 pressed')}>
                        <Icon name="user-circle" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundButton} onPress={() => console.log('Button 2 pressed')}>
                        <Ionicons name="language" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
// 3498db
const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white', // Set the background color as per your design
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 60,
    },
    appName: {
        color: '#3498db',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    roundButton: {
        marginLeft: 16,
        backgroundColor: '#3498db',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cylinderButton: {
        marginLeft: 16,
        backgroundColor: '#3498db',
        width: 90,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cylinderButtonText: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default HomeScreenHeader;
