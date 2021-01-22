import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Pesan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Inbox</Text>
            </View>
        );
    }
}
export default Pesan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});