/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import news_Data from './news_data.json'
import news_banner_data from "./news_banner_data.json"
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions, 
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.Container1}>
    <View style={styles.Header}>
      <Text style={styles.Title}>News App</Text>
    </View>

    <FlatList
      ListHeaderComponent={()=>
        <ScrollView horizontal>
        {
          news_banner_data.map(News=>
            <Image style={styles.Banner_Image} source={{uri:News.imageUrl}}/>)
        }
      </ScrollView>
      }
      keyExtractor={item=>item.u_id.toString()}
      data={news_Data}
      renderItem={({item})=>
      <View style={styles.Container}>
          <Image style={styles.ımage} source={{uri:item.imageUrl}}></Image>
          <View style={styles.Card_Title1}><Text style={styles.Card_Title2}>{item.title}</Text></View>
          <Text style={styles.Card_Description}>{item.description}</Text>
          <Text style={styles.Card_Author}>{item.author}</Text>
      </View>       
    }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container1:{
    backgroundColor:`#dcdcdc`
  },
  Container: {
    margin:10,
    marginBottom:15,
    borderRadius:10,
    backgroundColor:`white`,


  },
  Title:{
    fontSize:50,
    fontWeight:"700",

  },
  Header:{
    alignItems:"center",
    margin:5,
  },
  ımage:{
    height:Dimensions.get('window').height / 4 ,
    borderRadius:10
  },
  Card_Title1:{
    alignItems:"center"
  },
  Card_Title2:{
    fontSize:18,
    fontWeight:"700",
    padding:5
  },
  Card_Description:{
    fontSize:18,
    marginTop:10,
    padding:15,
    fontStyle:"italic",
    fontWeight:"700"

  },
  Card_Author:{
    fontSize:16,
    textAlign:"right",
    margin:5,
    fontWeight:"500"
  },
  Banner_Image:{
    height:Dimensions.get('window').height/3,
    width:Dimensions.get('window').width/1,
  }

});

export default App;
