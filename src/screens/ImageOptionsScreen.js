import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import { COLORS,SIZES } from '../utils/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from "react-native-image-picker"

const ImageOptionsScreen = ({ navigation }) => {

    const [imageUri, setImageUri] = useState('https://reactnative.dev/img/tiny_logo.png');
    const [responseCamera, setResponseCamera] = React.useState(null);
    const [responseGallery, setResponseGallery] = React.useState(null);

    // Pick Image from gallery
    const imageGalleryLaunch = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.launchImageLibrary(options, (res) => {
          console.log('Response = ', res);
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
          } else {
            const source = { uri: res.uri };
            console.log('response', JSON.stringify(res));
            setImageUri(res.assets[0].uri)
          }
        });
    }

    // Runtime permission for Access Camera
    const openCameraWithPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          ImagePicker.launchCamera(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
              console.log(response);
              setResponseCamera(response);
              setResponseGallery(null);
            },
          );
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const selectFile = () => {
      var options = {
        title: 'Select Image',
        customButtons: [
          { 
            name: 'customOptionKey', 
            title: 'Choose file from Custom Option' 
          },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, res => {
        console.log('Response = ', res);
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          alert(res.customButton);
        } else {
          let source = res;
          this.setState({
            resourcePath: source,
          });
        }
      });
    };

  return (
    <View style={styles.container}>
      
      <Text style={styles.splashText}>Image Options</Text>

      <TouchableOpacity style={styles.menuItemContainer}
        onPress={imageGalleryLaunch}
      >
        <MaterialIcons style={styles.menuIcon} name="image" color={COLORS.white} size={24} />
        <Text style={{color:COLORS.white,marginLeft:20,fontSize:17}}>Pick Image from Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItemContainer}
        onPress={openCameraWithPermission}
      >
        <MaterialIcons style={styles.menuIcon} name="camera" color={COLORS.white} size={24} />
        <Text style={{color:COLORS.white,marginLeft:20,fontSize:17}}>Launch Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItemContainer}
        onPress={selectFile}
      >
        <MaterialIcons style={styles.menuIcon} name="add" color={COLORS.white} size={24} />
        <Text style={{color:COLORS.white,marginLeft:20,fontSize:17}}>Select File</Text>
      </TouchableOpacity>

      <Image
        source={{uri: imageUri}}
        style={styles.image}
      />

    </View>
  );
};

export default ImageOptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.primaryBlue,
    padding:SIZES.padding,
  },
  splashText: {
    color: 'white',
    fontSize: 40,
    marginTop: 20,

  },
  splashLogo: {
    width: '95%',
    height: 500,
  },
  menuItemContainer: {
    flexDirection:'row',
    marginTop:SIZES.marginTop,
    borderBottomWidth:1,
    borderBottomColor:COLORS.borderLine,
    paddingBottom:SIZES.padding,
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },
  image: {
    height: 200,
    width: 200,
    margin: SIZES.margin,
    alignSelf: 'center',
  }
});


