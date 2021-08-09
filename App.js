import React, {useState} from "react"
import { StyleSheet, Text, View, Modal, TextInput} from "react-native"
import {Item, Input, H1, Button} from "native-base"
import Axios from "axios"
import Weather from "./components/Weather"

const App = () =>{
  const [cityName, setCityName] = useState('');
  const [modelOn, setModelOn] = useState(false)
  const [temp, setTemp] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')
  
  


  const fetchDetails = async () =>{
    try {
      const {data} = await Axios.get("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=3f72967c254c134f286ee21b0624b9b5&units=metric")
      const temp = data.main.temp
      setTemp(temp)
      const desc = data.weather[0].description
      setDesc(desc)
      const icon = data.weather[0].icon
      const img = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'
      setImg(img)
      setModelOn(true)

      
    } catch (error) {
      console.log(error)
      
    }
  }


  const slideModal = () =>{
    setModelOn(false)
  } 

  return(
    <View style={styles.container}>
      <H1 style={styles.heading}>WEATHER APP</H1>
      <Item rounded style={styles.formItem}>
        <Input placeholder="Enter the City name" style={{color: "#00b7c2", borderWidth:1, borderRadius:25}} onChangeText={(text) => setCityName(text)}/>
      </Item>
      <Button rounded block success  onPress={() => fetchDetails()}>
        <Text>CLICK</Text>
      </Button>
      <Weather visible={modelOn} slide={slideModal} name={cityName} temperature={temp} description={desc} imgURL={img}/>
      

      
      
      
    </View>
  )

}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",

  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 100,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
    marginTop: 150,
    textAlign: "center"
  },
  
})