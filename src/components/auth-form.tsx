import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Formik } from 'formik';
import { setAuth } from "../servises/main-store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../servises/config-store";

export const AuthForm = () => {
    const { tablet } = useSelector((state: TRootState) => state.mainStore);
    const dispatch = useDispatch();
    const [message, setMessage] = useState(false);

    const compare = (values: any) => {
        if (values.login == 'test' && values.password == 'test-test') {
            setMessage(false);
            dispatch(setAuth(true));
        } else {
            setMessage(true);
        }
    }

    return (
        <View style={!tablet ? styles.box : styles.bigBox}>
            <Text style={!message ? styles.header : { ...styles.header, color: 'red' }}> Authorization </Text>
            <Formik
                initialValues={{ login: '', password: '' }}
                onSubmit={values => compare(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={!tablet ? styles.innerBox : styles.bigInnerBox}>
                        <Text style={styles.text}>login</Text>
                        <TextInput
                            onChangeText={handleChange('login')}
                            onBlur={handleBlur('login')}
                            value={values.login}
                            style={!message ? styles.input : { ...styles.input, borderColor: 'red' }}
                        />
                        <Text style={styles.text}>password</Text>
                        <TextInput
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={!message ? styles.input : { ...styles.input, borderColor: 'red' }}
                        />
                        <TouchableOpacity onPress={() => handleSubmit()}>
                            <View style={styles.button}>
                                <Text style={styles.btnText}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        color: '#27569C',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 29.05,
        textAlign: 'center',
        marginTop: 8,
    },
    box: {
        width: 290,
        height: 333,
        borderRadius: 6,
        borderColor: '#27569C',
        borderWidth: 5,
        paddingLeft: 35,
        paddingRight: 43,
        marginTop: 10,
    },
    bigBox: {
        width: 480,
        height: 330,
        borderRadius: 6,
        borderColor: '#27569C',
        borderWidth: 5,
        paddingTop: 30,
        paddingLeft: 35,
        paddingRight: 43,
        marginTop: 10,
    },
    innerBox: {
        flexDirection: 'column',
    },
    bigInnerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30
    },
    text: {
        marginTop: 13,
        color: 'black',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 29.05,
        width: 145,
        marginRight: 28
    },
    input: {
        boxSizing: 'border-box',
        width: 212,
        height: 39,
        backgroundColor: '#D9D9D9',
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#27569C',
        borderRadius: 10,
        marginTop: 13,
    },
    btnText: {
        color: 'black',
        fontWeight: '800',
        fontSize: 24,
    },
    button: {
        backgroundColor: '#E4B062',
        fontWeight: '800',
        fontSize: 24,
        marginBottom: 28,
        marginTop: 26.52,
        width: 213,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
})
