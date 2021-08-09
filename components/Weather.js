import React from "react"
import { Modal, View, Text, Image } from "react-native"
import { Button, H2, H1 } from "native-base"


const Weather = props =>{
    

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={{flex: 1, backgroundColor:"#000", alignItems:"center", justifyContent:"center"}}>
            <H1 style={{color:"#00b7c2"}}>WEATHER REPORT</H1>
        </View>
        <View style={{flex: 1, backgroundColor:"#000", alignItems:"center"}}>
            
            <H2 style={{color: "#FFF338"}}>{props.name}</H2>
            <Text style={{color: "#fff", marginTop: 30, fontSize:18}}>The temperature is {props.temperature}°C,  {props.description}</Text>
            
            <Image 
                source={{
                    uri: props.imgURL,
                    width: 90,
                    height: 90
                }}
            />
            
            <Button rounded block success onPress={props.slide}>
                <Text>BACK</Text>
            </Button>
        </View>
        </Modal>
    )

}



export default Weather;