import { useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { TRootState } from '../servises/config-store';

import { ExitButton } from './exit-button';

export const Header = () => {
    const { tablet, isAuth } = useSelector((state: TRootState) => state.mainStore)
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        if (tablet) {
            setLogo(require('../../assets/logo2.png'));
        } else {
            setLogo(require('../../assets/logo.png'));
        }
    }, [tablet])

    if (!logo) return <></>

    return (
        <View style={styles.header}>
            <Image source={logo} style={tablet ? styles.logo : styles.logoS} />
            {isAuth ?
                <ExitButton color={'#27569C'} />
                :
                <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 118,
        backgroundColor: '#E4B062',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 27
    },
    logoS: {
        height: 63,
        width: 63
    },
    logo: {
        height: 63,
        width: 273
    }
})
