import { createSlice } from '@reduxjs/toolkit';

type TPhoto = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

type TPost = {
    id: number,
    title: string,
    body: string,
    userId: number
};

export type TInitState = {
    isAuth: boolean,
    tablet: boolean,
    photos: Array<TPhoto>,
    posts: Array<TPost>,
};

const initialState: TInitState = {
    isAuth: false,
    tablet: false,
    photos: [],
    posts: []
};

const mainStore = createSlice({
    name: 'mainStore',
    initialState: initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload;
        },
        setTablet(state, action) {
            state.tablet = action.payload;
        },
        setPhotos(state, action) {
            state.photos = action.payload;
        },
        setPosts(state, action) {
            state.posts = action.payload;
        },
    }
})

export default mainStore.reducer;
export const { setAuth, setTablet, setPhotos, setPosts } = mainStore.actions;