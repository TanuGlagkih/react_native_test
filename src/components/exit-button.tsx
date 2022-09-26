import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setAuth } from '../servises/main-store';

export const ExitButton = (props: any) => {

    const exitIcon = require('../../assets/exit.png');
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(setAuth(false))
    }

    return (
        <TouchableOpacity onPress={() => logOut()}>
            <View >
                <Image source={exitIcon} style={styles.img} />
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    img: {
        width: 59,
        height: 56,
    }
})