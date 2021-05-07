import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { SvgFromUri } from 'react-native-svg';

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSave(){
    return(
        <View style={styles.container}>

            <View style={styles.plantInfo}>
                <SvgFromUri
                uri=""
                height={150}
                width={150}
                />

                <Text style={styles.plantName}>
                    Nome da Planta
                </Text>

                <Text style={styles.plantAbout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>

            <View style={styles.contoller}>
                <View style={styles.tipContainer}>
                    <Image 
                        style={styles.tipImage}
                        source={waterdrop}
                    />
                    <Text style={styles.tipText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </View>
            </View>

            <Text style={styles.alertLabel}>
                Ecolha o melhor horário para ser lembrado:
            </Text>

            <Button title="Cadastrar Planta" onPress={() => {}} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape,
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape,
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        lineHeight: 32,
        color: colors.heading,
        marginTop:15,
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 25,
        marginTop: 10
    },
    contoller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20,

    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    tipImage: {
        width: 56,
        height: 56,
    },
    tipText: {
        flex: 1,
        marginLeft: fonts.text,
        color: colors.blue,
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'justify',
    },
    alertLabel: {

    }
});