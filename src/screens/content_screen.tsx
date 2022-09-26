import { View, StyleSheet, FlatList } from "react-native";
import { Card } from "../components/card";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { TRootState } from "../servises/config-store";
import { useDispatch } from "react-redux";
import { setPhotos, setPosts } from "../servises/main-store";

export type TUser = {
    id: number,
    username: string,
    company: {
        name: string,
    }
};

export default function ContentScreen() {
    const { tablet } = useSelector((state: TRootState) => state.mainStore);
    const [data, setData] = useState(null);
    const dispatch = useDispatch();

    function getPosts() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (response && response.ok) return response.json()
            })
            .then((json) => {
                setData(json);
            })
            .catch((error) => console.error(error));
    };

    function getContent() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (response && response.ok) return response.json()
            })
            .then((json) => {
                dispatch(setPosts(json));
            })
            .catch((error) => console.error(error));
    };

    function getPhoto() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                if (response && response.ok) return response.json()
            })
            .then((json) => {
                dispatch(setPhotos(json));
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getContent();
        getPosts();
        if (tablet) {
            getPhoto()
        };
    }, []);

    if (data == null) return null;

    return (
        <View style={!tablet ? styles.container : styles.bigContainer}>
            {!tablet ?
                <FlatList
                    data={data}
                    keyExtractor={user => user.id}
                    style={{ alignContent: 'space-around' }}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <Card data={item} />
                    )
                    }
                />
                :
                <FlatList
                    data={data}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                    keyExtractor={user => user.id}
                    style={{ alignContent: 'space-around' }}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Card data={item} />
                    )
                    }
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowY: 'scroll',
    },
    bigContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
    }
})