import * as React from 'react';
import { Text, View, Button } from 'react-native';
import {Audio} from 'expo-av'


class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://www.twitch.tv/manga_veteran' },
      { shouldPlay: true }
    
    );
  }


  playSound1 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://www.linkedin.com/in/jeremy-li-7b963522a/' },
      { shouldPlay: true }
    
    );
  }

  render() {
    return (
      <View>
      <Button title="Social Button" color="red" onPress={this.playSound} />
    <Button title="Social Button" color="green" onPress={this.playSound1} />
    </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
        
      </View>
    );
  }
}

