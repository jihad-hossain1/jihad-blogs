import AuthContext from '@/contexts/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
    const auth = useContext(AuthContext);
    const inClient = typeof window !== 'undefined'
    if (!inClient & auth) return {}
    if (!auth) {
        throw new Error("You must wrap your application with authProvider at use the useAuth")
    }
    return auth;
};

export default useAuth;