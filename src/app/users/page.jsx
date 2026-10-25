import React, { Suspense } from 'react';
import Users from './components/Users'
const userPromise =async() =>{
    const data =await fetch ('http://localhost:7000/users')
    return data.json()
}


const UsersPage =async () => {
   
    return (
        <div>
            <h2>user data comming soon: </h2>
            <Suspense fallback ={<h3>loading...</h3>}>
            <Users userPromise={userPromise}></Users>
            </Suspense>
        </div>
    );
};

export default UsersPage;