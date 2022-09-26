import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { AuthForm } from "../components/auth-form";
import { TRootState } from "../servises/config-store";

export default function AuthScreen() {
    const { tablet } = useSelector((state: TRootState) => state.mainStore);

    return (
        <View style={styles.mainBox}>
            <View style={!tablet ? styles.container : styles.bigContainer}>
                <AuthForm />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    bigContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
})