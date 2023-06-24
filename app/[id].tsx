import { View, Text } from 'react-native';
import { useSearchParams } from 'expo-router';
import { QuestionHeader } from '../src/components/QuestionHeader';
import * as questions from '../data/questions.json';
import { Question as QuestionType } from '../src/types';

const QuestionDetailsPage = () => {

    const { id } = useSearchParams();

    const question = questions.items.find((question: QuestionType) => question.question_id + '' === id) as QuestionType;



    console.log(question);

    if (!question) {
        return <Text>Question not found</Text>;
    }

    return (
        <View>
            <QuestionHeader question={question} />
            <Text>Render question with id: {id}</Text>
        </View>
    );
}

export default QuestionDetailsPage;