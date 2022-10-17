import Login from '@/components/login';
import React, { useEffect } from 'react';
import { axiosClient } from '../services/client';
const Home = () => {
    useEffect(() => {
        getApi('https://jsonplaceholder.typicode.com/todos/1');
    }, []);
    const getApi = async (url: string) => {
        const response = await axiosClient.get(url);
        console.log(await response.data);
    };
    return (
        <>
            <Login />
        </>
    );
};

// Home.getLayout = function getLayout(page: ReactElement) {
//     return <Layout>{page}</Layout>
// }
export default Home;
