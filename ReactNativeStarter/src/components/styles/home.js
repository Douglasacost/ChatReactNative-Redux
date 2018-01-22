import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 20
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: '100%',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        borderTopColor: '#cccccc',
        borderTopWidth: 1
      },
    textInput: {
        backgroundColor: '#ffffff',
        height: 50,
        width: '60%',
        margin: 10,
        borderRadius: 5,
        padding: 3
    },
    buttonText: {
        margin: 10,
        padding: 3,
        fontSize: 20
    }
})