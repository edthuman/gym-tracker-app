import { StyleSheet, Text, View } from "react-native"


export default function WelcomePage() {
    return <View style={styles.view}>
        <Text>Welcome to WelcomePage!</Text>
    </View>
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "yellow"
    }
})