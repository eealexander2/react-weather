/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var React = require('react-native');

var {
  AppRegistry, 
  MapView, 
  View, 
  Stylesheet
} = React; 


var Weather = React.createClass({
  render: function(){
    return <MapView style = {styles.map}></MapView>
  }
}); 


var styles = stylesheet.create ({
  map:{
    flex: 1 
  }
}); 


AppRegistry.registerComponent('weather', () => Weather); 