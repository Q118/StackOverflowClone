import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import QuestionListItem from '../src/components/QuestionListItem';
import { useNavigation } from 'expo-router';
import { useState, useLayoutEffect, SetStateAction } from 'react';
import { useQuery } from 'urql';

import { questionsQuery } from '../src/graphql/queries';



export default function Page() {

    const [ searchTerm, setSearchTerm ] = useState('');

    const navigation = useNavigation();

    const [ response ] = useQuery({
        query: questionsQuery,
        variables: { sort: 'votes' },
    });


    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                onChangeText: (event: { nativeEvent: { text: SetStateAction<string>; }; }) => setSearchTerm(event.nativeEvent.text),
                // onBlur: search,
                onblur: () => console.log('blur'),
            },
        });
    }, [ navigation, searchTerm, setSearchTerm ]);

    if (response.fetching) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        );
    }
    if (response.error) {
        return (
            <SafeAreaView>
                <Text>Error: {response.error.message}</Text>
            </SafeAreaView>
        );
    }





    return (
        <View style={styles.container}>
            <FlatList
                // data={questions.items}
                data={response.data.questions.items}
                renderItem={({ item }) => <QuestionListItem question={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
});
