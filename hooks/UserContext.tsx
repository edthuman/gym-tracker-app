import { SetUser, User } from '@/types';
import React, { createContext } from 'react';

type Context = React.Context<{
    user: User
    setUser?: SetUser
}>


const UserContext: Context = createContext({
    user: { 
        username: "guest",
        _id: "guest"
    }
})
export default UserContext