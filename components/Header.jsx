import React, { useContext, Fragment } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { ThemeContext } from '../Context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import globalStyle from '../styles/globalStyle';


export default function Header()  {
    const { theme, themeStyles } = useContext(ThemeContext);

    return (
        <Fragment>
            <View style={[styles.headerContainer, { backgroundColor: themeStyles.accentColor.color }]}>
                <Text style={[themeStyles.textColor, styles.editText]} onPress={() => console.log('Press')}>Edit</Text>
                <Text style={[themeStyles.textColor, styles.titleText]}>Habits</Text>
                <Ionicons name={'ios-add'} size={30} color={'#fff'} />
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20
    },
    editText: {
        fontSize: 15
    }
})