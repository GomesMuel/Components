import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native"; 
import { CarContext } from "./CarContext";

export default function CarCountComponent() {
    const { carros } = useContext(CarContext)
    const [carCount, setCarCount] = useStates[0];

    useEffect( ()=> {
        setCarCount(carros.length);
    }, [carros])

    return(
        <View> 
            <Text estilo={estilo.titulo}>{ carCount }</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    titulo:{
        fontSize: 20
    }
})
