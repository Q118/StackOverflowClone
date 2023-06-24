import { StyleSheet, Text, View, FlatList } from 'react-native';
import QuestionListItem from '../src/components/QuestionListItem';
import questions from '../data/questions.json';
import { useNavigation } from 'expo-router';
import { useState, useLayoutEffect, SetStateAction } from 'react';

export default function Page() {

    const [ searchTerm, setSearchTerm ] = useState('');

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                onChangeText: (event: { nativeEvent: { text: SetStateAction<string>; }; }) => setSearchTerm(event.nativeEvent.text),
                // onBlur: search,
                onblur: () => console.log('blur'),
            },
        });
    }, [ navigation, searchTerm, setSearchTerm ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={questions.items}
                renderItem={({ item }) => <QuestionListItem question={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
