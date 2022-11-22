import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import {colors} from '../../utils/colors';
const Width = Dimensions.get('window').width;
const Modal_Height = 150;

const ModalPop = ({
    modalMsg,
    modalNeg,
    modalPos,
    modalOption,
    setIsModal
}) => {


    return (
        <View style={style.container}>
            <View style={style.modalBody}>

                <Text style={{fontWeight:'700',fontSize:18,color:'#333333'}}>{modalOption}</Text>
                <Text style={{marginVertical:10}}>{modalMsg}</Text>

                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <TouchableOpacity onPress={()=>setIsModal(false)} style={[style.actionButton,{marginHorizontal:20}]}>
                        <Text>{modalNeg}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>setIsModal(false)} style={[style.actionButton, {backgroundColor:'#DB0004'}]}>
                        <Text style={{color:'#fff'}}>{modalPos}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default ModalPop

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'

    },
    modalBody: {
        backgroundColor: '#ffffff',
        height: Modal_Height,
        width: Width - 80,
        padding:20,
        borderRadius:8
    },
    actionButton:{
        Width:100,
        height:35,
        borderRadius:8,
        borderWidth:1,
        borderColor:colors.borderColor,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:5
    }
})