import { Stack } from 'expo-router';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
    url: 'https://ainlegdah.stepzen.net/api/stackoverflowclone/__graphql',
    exchanges: [ cacheExchange, fetchExchange ],
    fetchOptions: {
        headers: {
            Authorization:
                'Apikey ainlegdah::stepzen.net+1000::ba61ee0d706cfebc52981be3f447fbb0ab941c541ea812702f91c1752a02626a',
            'Content-Type': 'application/json',
        },
    },
});


const RootLayout = () => {
    return (
        <Provider value={client}>
            <Stack>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
            </Stack>
        </Provider>
    );
};

export default RootLayout;
