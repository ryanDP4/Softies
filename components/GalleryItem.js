import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const GalleryItem = ({ onPress, source, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Image source={source} style={styles.image} />
  </TouchableOpacity>
);

GalleryItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  source: PropTypes.number.isRequired,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 100, 
    borderRadius: 10,
    width: '100%',
  },
});

export default GalleryItem;
