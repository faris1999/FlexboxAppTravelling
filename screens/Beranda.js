import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Beranda extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Beranda</Text>
            </View>
        );
    }
}
export default Beranda;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});