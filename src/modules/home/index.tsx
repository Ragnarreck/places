import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input';
import ActivityType from './components/ActivityType';
import Header from './components/Header';
import TopPick from './components/TopPick';

const activityTypes = [
    { 
        id: 'something_1',
        image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
        title: 'Outdoors Outdoors Outdoors Outdoors Outdoors Outdoors',
        place: 'Naukova, 56',
    },
    { 
        id: 'something_2',
        image: 'https://www.expatica.com/app/uploads/sites/6/2014/05/The-10-best-places-to-visit-in-Germany.jpg',
        title: 'Indoors',
        place: 'Pushkinska, 11',
    },
    { 
        id: 'something_3',
        image: 'https://www.usnews.com/dims4/USNEWS/399cc03/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F17%2F5c%2Fe08bd2a347be848e3dd4e98d88d9%2F2-30.%20San%20Francisco-Getty.jpg',
        title: 'Exhibitions',
        place: 'Sumska, 25',
    },
    { 
        id: 'something_4',
        image: 'https://purewows3.imgix.net/images/articles/2021_05/Most_Beautiful_Places_in_Florida_Islamorada.jpg?auto=format,compress&cs=strip',
        title: 'Activity 4',
        place: 'Romena Rolana, 66'
    },
];

interface ActivityTypeItem {
    id: string;
    image: string;
    title: string;
}

interface TopPickItem {
    id: string;
    image: string;
    title: string;
    place: string;
}

const HomeScreen = () => {
    const [place, setPlace] = useState('');

    const renderTopPicksHeader = () => (
        <View style={styles.listHeaderContainer}>
            <Text style={styles.headerText}>
                Top picks
            </Text>
            <TouchableOpacity>
                <Text style={styles.seeAllText}>
                    See all
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Input 
                    placeholder="McDonalds"
                    value={place}
                    onChange={setPlace} 
                    leftIconProps={{
                        name: 'paper-plane-outline',
                        color: '#4984f9',
                    }}
                    rightIconProps={{ name: 'mic-outline', size: 30 }}
                />
                <View style={styles.listContainer}>
                    <View style={styles.listHeaderContainer}>
                        <Text style={styles.headerText}>
                        Type of activity
                        </Text>
                    </View>
                    <FlatList
                        keyExtractor={item => item.id}
                        horizontal 
                        data={activityTypes}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }: { item: ActivityTypeItem}) => (
                            <ActivityType 
                                title={item.title} 
                                imageSrc={item.image} 
                            />
                        )} 
                    />
                </View>
                <View>
                    {renderTopPicksHeader()}
                    <FlatList
                        horizontal
                        keyExtractor={item => `${item.id}_lol`}
                        data={activityTypes}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }: { item: TopPickItem}) => (
                            <TopPick
                                address={item.place} 
                                title={item.title} 
                                imageSrc={item.image} 
                            />
                        )} 
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
    },
    listContainer: {
        marginTop: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    listHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    seeAllText: {
        fontSize: 16,
        color: '#929292',
    }
});

export default HomeScreen;
