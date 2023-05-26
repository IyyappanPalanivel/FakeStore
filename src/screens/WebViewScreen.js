import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import GlobalStyles from '../utils/GlobalStyles'
import { COLORS } from '../utils/Theme'
import Toolbar from '../components/Toolbar'

const WebViewScreen = () => {

  const SOURCE_URL = 'https://bi.platform.vidh.ai/public/dashboard/6326128b-13cb-48c4-a522-21f9eb8aab38?college=Demo%20Institute&batch=2023';

  return (
    <View style={styles.container}>

      <Toolbar title='WebView' />
      
      <WebView source={{ uri: SOURCE_URL }} style={{ flex: 1 }} />
    </View>
  )
}

export default WebViewScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  toolbar:{
    

  }
})