import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './screens/auth-screen';
import ContentScreen from './screens/content_screen';
import { useSelector } from 'react-redux';
import { TRootState } from './servises/config-store';
import { useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';
import { useEffect } from 'react';
import { setTablet } from './servises/main-store';

export const Stack = createNativeStackNavigator();

const winWidth = Dimensions.get('window').width;

export default function AppNavigation() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (winWidth > 420) {
            dispatch(setTablet(true));
        } else {
            dispatch(setTablet(false));
        }
    }, [])
    const { isAuth } = useSelector((state: TRootState) => state.mainStore);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuth ? (
                    <Stack.Screen name="Content" component={ContentScreen} options={{
                        headerShown: false,
                    }} />
                ) : (
                    <Stack.Screen name="Authorization" component={AuthScreen} options={{
                        headerShown: false
                    }}
                    />
                )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

