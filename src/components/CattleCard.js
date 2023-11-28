import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Separator = () => <View style={styles.separator} />;

const CattleCard = ({ cattle }) => {
    const { title, timestamp, location, images, video, description, sellerName } = cattle;

    return (
        <View style={styles.card}>
            {/* Badge */}
            <View style={styles.badgeContainer}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}> <Icon name='balance-scale' size={15} /> Negotiable </Text>
                </View>
            </View>

            {/* Title */}
            <Text style={styles.title}>{title}</Text>

            {/* Metadata */}
            <View style={styles.metadataContainer}>
                <Text style={styles.metadataText}><Icon name='clock-o' size={15} /> {timestamp}</Text>
                <Text style={styles.metadataText}><Icon name='location-arrow' size={15} /> {location}</Text>
            </View>

            {/* Media: Images and/or Video (conditional rendering) */}
            {images.length > 0 && (
                <View style={styles.mediaContainer}>
                    {/* Report Button (Top-Left) */}
                    <Pressable style={styles.reportButton} onPress={() => console.log('Report')}>
                        <Text style={styles.reportText}><Icon name='warning' size={15} /></Text>
                    </Pressable>

                    {/* Images */}
                    <TouchableOpacity onPress={() => console.log('Pressed first image')}>
                        <Image source={{ uri: images[0] }} style={[styles.mediaImage, { flex: 1 }]} resizeMode="cover" />
                    </TouchableOpacity>

                    {images.length > 1 && (
                        <View style={styles.stackedImagesContainer}>
                            <TouchableOpacity onPress={() => console.log('Pressed second image')}>
                                <Image source={{ uri: images[1] }} style={styles.stackedImage} resizeMode="cover" />
                            </TouchableOpacity>
                            {images.length > 2 && (
                                <TouchableOpacity onPress={() => console.log('Pressed third image')}>
                                    <Image source={{ uri: images[2] }} style={styles.stackedImage} resizeMode="cover" />
                                </TouchableOpacity>
                            )}
                        </View>
                    )}

                    {/* Share Button (Top-Right) */}
                    <Pressable style={styles.shareButton} onPress={() => console.log('Share')}>
                        <Text style={styles.shareButtonText}><Icon name='share-alt' size={15} />&nbsp;Share</Text>
                    </Pressable>
                </View>
            )}

            {video.length > 0 && (
                <View style={styles.mediaContainer}>
                    {/* Report Button (Top-Left) */}
                    <Pressable style={styles.reportButton} onPress={() => console.log('Report')}>
                        <Text style={styles.reportText}>Report</Text>
                    </Pressable>

                    {/* Video */}
                    <Image source={{ uri: video }} style={styles.mediaVideo} />

                    {/* Share Button (Top-Right) */}
                    <Pressable style={styles.shareButton} onPress={() => console.log('Share')}>
                        <Text style={styles.shareButtonText}>Share</Text>
                    </Pressable>
                </View>
            )}

            {/* Description */}
            <Text style={styles.description}>{description}</Text>

            <Separator />

            {/* Seller Info and Buttons */}
            <View style={styles.sellerContainer}>
                <Text style={styles.sellerText}><Icon name='user-circle' size={20} /> {sellerName}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('Contact Seller')}>
                        <Text style={{ color: 'white' }}><Icon name='phone' size={25} /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.whatsappbutton} onPress={() => console.log('Whatsapp')}>
                        <Text style={{ color: 'white' }}><Icon name='whatsapp' size={25} /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 16,
        margin: 15,
        backgroundColor: 'white',
        position: 'relative', // Necessary for absolute positioning within the card
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        // Elevation for Android
        elevation: 5,
    },
    badgeContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#D896FF', 
        padding: 4,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '60%'
    },
    badge: {
        backgroundColor: '#D896FF',
        padding: 2,
        borderRadius: 4,
        alignSelf: 'center',
        marginBottom: 4,
    },
    badgeText: {
        color: '#660066',
        fontSize: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: '8%'
    },
    metadataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    metadataText: {
        fontSize: 12,
        color: '#555',
    },
    mediaContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    mediaImage: {
        width: 170,
        height: 100,
        borderRadius: 8,
    },
    stackedImagesContainer: {
        flexDirection: 'column',
        flex: 2,
        padding: 5
    },
    stackedImage: {
        height: 100,
        width: 180,
        flex: 1,
        marginBottom: 5,
        borderRadius: 8
    },
    
    mediaVideo: {
        width: '30%',
        height: 80,
        borderRadius: 8,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        marginBottom: 8,
    },
    sellerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sellerText: {
        fontSize: 20,
        color: '#777',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        marginLeft: 8,
        padding: 8,
        backgroundColor: '#3498db',
        borderRadius: 8,
    },
    whatsappbutton: {
        marginLeft: 8,
        padding: 8,
        backgroundColor: '#4ED35E',
        borderRadius: 8,
    },
    reportButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent pink color
        padding: 7,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 4,
        zIndex: 1, // Ensure the button is above other content
    },
    reportText: {
        color: 'white',
        fontSize: 12
    },
    shareButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(52, 152, 219, 0.8)', // Semi-transparent pink color
        padding: 7,
        borderRadius: 4,
        alignSelf: 'flex-end',
        marginBottom: 4,
        zIndex: 1, // Ensure the button is above other content
    },
    shareButtonText: {
        color: 'white',
        fontSize: 12,
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 8,
    },
    bottomContainer: {
        backgroundColor: '#f0f0f0', // Change the background color as needed
        padding: 16,
        borderRadius: 8,
    },
});

export default CattleCard;
