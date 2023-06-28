import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector } from 'react-redux'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Task2() {
    const data = useSelector((state) => state.oddeven);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.number}>{item.number}</Text>
            <Text style={styles.isOddEven}>{item.isOddEven}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>History</Text>
            <View style={styles.tableHeader}>
                <Text style={styles.header}>Number</Text>
                <Text style={styles.header}>Is Odd/Even</Text>
            </View>
            <FlatList
                data={data.history}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04638B',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    },
    header: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
        color: 'white'
    },
    tableHeader: {
        width: screenWidth*0.8,
        justifyContent:'space-between',
        marginBottom:5,
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        width: screenWidth * 0.8,
        justifyContent: 'space-between',
    },
    number: {
        fontSize: 18,
        marginRight: 10,
        color: 'white',
    },
    isOddEven: {
        fontSize: 18,
        color: 'white',
    },
});

export default Task2;