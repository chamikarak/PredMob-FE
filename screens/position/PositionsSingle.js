import React from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import Header from "../../components/Header";
import Colors from "../../assets/colors/Colors";
import {Image} from "react-native-elements";
import {authContext} from "../../context/AuthContext";

function PositionSingle({navigation, route}) {

    const {altData} = React.useContext(authContext)
    const {position} = route.params;

    const positionDataMap = {
        'Goalkeeper': altData.goalkeepers.top,
        'Midfielder': altData.midfielders.top,
        'Defender': altData.defenders.top,
        'Forward': altData.forwards.top
    };

    const [players, setPlayers] = React.useState(positionDataMap[position.position] || []);

    const listItemClick = (item) => {
        navigation.navigate('PlayerProfile', {player: item})
    }

    return (
        <SafeAreaView style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
            <Header style={styles.header} navigation={navigation}/>
            <View style={styles.contentContainer}>
                <View style={styles.background}>
                    <View style={styles.card}>
                        <Image source={position.image} style={styles.cardImage}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.cardTitle}>Position </Text>
                            <Text style={styles.position}>{position.position}</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>{position.description}</Text>
                </View>
                {altData && <FlatList
                    style={{marginBottom: 40, backgroundColor: Colors.bottomBar}}
                    data={players}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <>
                            <TouchableOpacity style={styles.listItem} onPress={() => listItemClick(item)}>
                                <Text style={styles.listName}>{item.name}</Text>
                                <Text style={styles.listTeam}>{item.team}</Text>
                                <Text style={styles.listPosition}>{item.position}</Text>
                            </TouchableOpacity>
                            <View style={styles.separator}/>
                        </>
                    )}
                />}
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bg
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        padding: 10,
        paddingTop: 30,
    },
    background: {
        backgroundColor: Colors.cards,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        color: Colors.light,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
    },
    cardImage: {
        width: 150,
        height: 100,
        marginRight: 10,
        borderRadius: 20,
    },
    cardTitle: {
        fontFamily: 'Poppins',
        color: Colors.light,
        fontSize: 12,
        fontWeight: 'bold',
    },
    position: {
        fontFamily: 'Poppins',
        color: Colors.light,
        fontSize: 25,
        fontWeight: 'light',
    },
    description: {
        fontFamily: 'Poppins',
        color: Colors.light,
        fontSize: 15,
        fontWeight: 'light',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    listItem: {
        backgroundColor: Colors.bottomBar,
        padding: 20,
    },
    listName: {
        fontFamily: 'Poppins',
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
    },
    listTeam: {
        fontFamily: 'Poppins',
        color: Colors.light,
        alignSelf: "flex-end"
    },
    listPosition: {
        fontFamily: 'Poppins',
        color: Colors.light,
        alignSelf: "flex-end"
    },
    separator: {
        height: 1,
        backgroundColor: Colors.light,
        opacity: 0.1,
        width: '80%',
        alignSelf: "center",
    }
});

export default PositionSingle;
