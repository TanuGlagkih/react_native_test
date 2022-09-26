import { Image, StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux";
import { TUser } from "../screens/content_screen";
import { TRootState } from "../servises/config-store";

export const Card = (props: { data: TUser }) => {
    const { tablet, photos, posts } = useSelector((state: TRootState) => state.mainStore);

    const photoUrl = photos.find(item => item.albumId == props.data.id)?.url;
    const user = posts.find(item => item.userId == props.data.id);

    return (
        <View style={!tablet ? styles.box : styles.bigBox}>
            {tablet && photoUrl ?
                <Image source={{ uri: photoUrl }} style={styles.img} />
                :
                <></>
            }
            <Text style={styles.text}>Author: {props.data.username} </Text>
            <Text style={styles.text}>Company: {props.data.company.name} </Text>
            <Text style={styles.text}>Title: {user?.title}</Text>
            {tablet ?
                <Text style={styles.text}>{user?.body}</Text>
                :
                <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        margin: 15,
        borderWidth: 5,
        borderColor: '#27569C',
        height: 200,
        width: 292,
        borderRadius: 5,
        overflow: 'hidden'
    },
    bigBox: {
        margin: 15,
        borderWidth: 5,
        borderColor: '#27569C',
        height: 470,
        width: 325,
        borderRadius: 5,
        overflow: 'hidden'
    },
    img: {
        width: 150,
        height: 150,
        marginTop: 15,
        marginLeft: 15,
    },
    text: {
        fontWeight: 'bold',
        margin: 15
    }
})