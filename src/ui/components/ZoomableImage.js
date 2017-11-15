import React, { Component, PropTypes } from 'react';
import { ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

class ZoomableImage extends Component {
  static defaultProps = {
    doAnimateZoomReset: false,
    maximumZoomScale: 3,
    minimumZoomScale: 1,
    zoomHeight: 100,
    zoomWidth: 100,
  }

  setZoomRef = node => {
    if (node) {
      this.zoomRef = node;
      this.scrollResponderRef = this.zoomRef.getScrollResponder();
    }
  }

  handleResetZoomScale = (event) => {
    this.scrollResponderRef.scrollResponderZoomTo({
       x: 100,
       y: 200,
       width: this.props.zoomWidth,
       height: this.props.zoomHeight,
       animated: true 
    })
  }

  render() {
    const { imageSource, maximumZoomScale, minimumZoomScale } = this.props;

    return (
      <ScrollView
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
        centerContent
        maximumZoomScale={maximumZoomScale}
        minimumZoomScale={minimumZoomScale}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        ref={this.setZoomRef} 
        style={{ overflow: 'hidden', flex: 1 }}
      >
        <TouchableOpacity
          onPress={this.handleResetZoomScale}
          style={{ flex: 1, flexDirection: 'column'}}
        >
          <Image
            style={ styles.map }
            source={imageSource}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    resizeMode: 'contain',
    width: 400,
  }
})

ZoomableImage.propTypes = {
  imageSource: PropTypes.number.isRequired,
};

export default ZoomableImage;
