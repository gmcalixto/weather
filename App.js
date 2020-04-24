import React,{Component} from 'react';
import { Text, 
         View, 
         StyleSheet,
         KeyboardAvoidingView,
         TextInput,
         Platform,
         ImageBackground,
         Image } from 'react-native';



class App extends Component {
  render(){
    
    
return (
<KeyboardAvoidingView
  behavior="height">
	
  <ImageBackground 
    source = {require('./image/colors.jpg')}
    style={styles.container}> 


  <Image 
    source={require('./image/cloud.png')}/>
    
	<Text style={[styles.largeText,styles.textStyle]}>São Paulo</Text>
	<Text style={[styles.smallText,styles.textStyle]}>Nuvens</Text>
	<Text style={[styles.largeText,styles.textStyle]}>18°</Text>
	<TextInput 
      autoCorrect = {false} 
	    placeholder = "Busque uma cidade" 
		  placeholderTextColor = "white" 
		  style = {styles.textInput}
		  clearButtonMode = "always" />

  </ImageBackground> 

</KeyboardAvoidingView>
  );

  }
  
}
export default App

const styles = StyleSheet.create({
  container:
		{ width: '100%', 
      height: '100%',
      alignItems:'center',
		  justifyContent:'center'},
	 textStyle:{
	 	textAlign:'center',
	 	fontFamily:Platform.OS==='ios'?'AvenirNext-Regular':'Roboto'},
	 largeText:{
		fontSize:44},
	smallText:{
		fontSize:18},
  textInput: {
	    backgroundColor:'#666',
	    color:'white',
	    height: 40,
	    width: 300,
	    marginTop: 20,
	    marginHorizontal:20,
	    paddingHorizontal:10,
	    alignSelf: 'center'}
});
