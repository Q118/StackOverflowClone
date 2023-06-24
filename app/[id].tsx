import { View, Text, FlatList } from 'react-native';
import { useSearchParams } from 'expo-router';
import { QuestionHeader } from '../src/components/QuestionHeader';
import * as questions from '../data/questions.json';
import * as answers from '../data/answers.json';
import { Question as QuestionType } from '../src/types';
import { AnswerListItem } from '../src/components/AnswerListItem';

const QuestionDetailsPage = () => {

    const { id } = useSearchParams();

    const question = questions.items.find((question: QuestionType) => question.question_id + '' === id) as QuestionType;



    console.log(question);

    if (!question) {
        return <Text>Question not found</Text>;
    }

    return (
        <View>

            <FlatList
                data={answers.items}
                renderItem={({ item }) => <AnswerListItem answer={item} />}
                ListHeaderComponent={() => <QuestionHeader question={question} />}
            />
        </View>
    );
}

export default QuestionDetailsPage;