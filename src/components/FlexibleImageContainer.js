import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const FlexibleImageContainer = ({ images }) => {
  const containerStyle =
    images.length === 1
      ? styles.singleImageContainer
      : images.length === 2
      ? styles.twoImageContainer
      : styles.threeImageContainer;

  return (
    <View style={containerStyle}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image }}
          style={
            images.length === 3 && index === 2
              ? styles.thirdImage
              : images.length === 2
              ? styles.twoImage
              : styles.image
          }
          resizeMode="cover"
          onLoad={() => console.log(`Image ${index + 1} loaded`)}
          onError={(error) => console.log(`Error loading image ${index + 1}: ${error.nativeEvent.error}`)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  singleImageContainer: {
    flex: 1,
  },
  twoImageContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  threeImageContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    margin: 2,
    width: '100%',
    height: '100%',
  },
  twoImage: {
    flex: 1,
    margin: 2,
    width: '100%',
    height: '50%',
  },
  thirdImage: {
    flex: 1,
    margin: 2,
    width: '100%',
    height: '50%',
  },
});

export default FlexibleImageContainer;
