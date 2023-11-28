// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import CattleCard from '../components/CattleCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonSection from '../components/ButtonSection';
import DualPressableSection from '../components/DualPressableSection';

const HomeScreen = () => {
    const [cattleData, setCattleData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    const fetchCattleData = async () => {
        // Fetch cattle data from your backend or API
        // Update the URL and API integration as needed
        const apiUrl = `https://your-api.com/cattle?page=${page}`;

        try {
            //   const response = await fetch(apiUrl);
            //   const data = await response.json();
            // title, timestamp, location, images, video, description, sellerName
            const imageurl = 'https://t4.ftcdn.net/jpg/03/13/26/93/360_F_313269335_lstj465YW0IfLzpPOUfkpwTACl87vTaW.jpg';
            const data = [{
                'id': 1,
                'title': '5 Litre Capacity, Sahiwal Cross cow, 40,000',
                'timestamp': '37 minutes ago',
                'location': 'Sarsa',
                'images': [imageurl, imageurl, imageurl],
                'video': [],
                'description': 'This Sahiwal cross cow is 3 years old. This is in lactation and it gives 1 litres milk',
                'sellerName': 'Shivam'
            },
            {
                'id': 1,
                'title': '5 Litre Capacity, Sahiwal Cross cow, 40,000',
                'timestamp': '37 minutes ago',
                'location': 'Sarsa',
                'images': [imageurl, imageurl, imageurl],
                'video': [],
                'description': 'This Sahiwal cross cow is 3 years old. This is in lactation and it gives 1 litres milk',
                'sellerName': 'Shivam'
            }, {
                'id': 1,
                'title': '5 Litre Capacity, Sahiwal Cross cow, 40,000',
                'timestamp': '37 minutes ago',
                'location': 'Sarsa',
                'images': [imageurl, imageurl, imageurl],
                'video': [],
                'description': 'This Sahiwal cross cow is 3 years old. This is in lactation and it gives 1 litres milk',
                'sellerName': 'Shivam'
            }, {
                'id': 1,
                'title': '5 Litre Capacity, Sahiwal Cross cow, 40,000',
                'timestamp': '37 minutes ago',
                'location': 'Sarsa',
                'images': [imageurl, imageurl, imageurl],
                'video': [],
                'description': 'This Sahiwal cross cow is 3 years old. This is in lactation and it gives 1 litres milk',
                'sellerName': 'Shivam'
            }];
            setCattleData((prevData) => [...prevData, ...data]);
        } catch (error) {
            console.error('Error fetching cattle data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCattleData();
    }, [page]);

    const renderCattleCard = ({ item }) => <CattleCard cattle={item} />;

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <View style={styles.container}>
            <DualPressableSection onLeftPress={() => console.log('location')} onRightPress={() => console.log('sort')}></DualPressableSection>
            <ButtonSection></ButtonSection>
            <FlatList
                data={cattleData}
                renderItem={renderCattleCard}
                keyExtractor={(item) => item.id.toString()}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={isLoading && <ActivityIndicator size="large" color="#0000ff" />}
            />

            <TouchableOpacity style={styles.floatingButton} onPress={() => console.log('2')}>
                <Text style={styles.floatingButtonText}><Icon name="wechat" size={20} color="white" />&nbsp;Pashu abhi beche</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bannerContainer: {
        borderRadius: 10,
        margin: 15,
        elevation: 5,
        height: 60,
        backgroundColor: 'rgba(38,178,112,0.8)'
    },
    bannerText: {
        fontSize: 20,
        alignSelf: 'flex-start',
        padding: 10,
        marginLeft: 15,
        color: 'white'
    },
    floatingButton: {
        position: 'absolute',
        bottom: 40,
        left: 30,
        width: '50%',
        height: 50,
        borderRadius: 20,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // for Android shadow
    },
    floatingButtonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
})


export default HomeScreen;
