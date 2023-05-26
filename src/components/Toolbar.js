import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const Toolbar = (props) => {

    const { title, ...attributes } = props;

    const navigation = useNavigation();

    return (
        <View style={styles.toolbarContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons style={styles.icon} name='arrow-left-thin' size={30} color={COLORS.white} />
            </TouchableOpacity>

            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default Toolbar

const styles = StyleSheet.create({
    toolbarContainer: {
        height: 50,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    icon: {
        marginHorizontal: 5
    }
})