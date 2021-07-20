
import { Spin } from 'antd'
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { auth } from '../components/firebase/config'

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const history = useHistory()
    const [user, setUser] = useState({})
    const [isloading, setIsloading] = useState(true)


    React.useEffect(() => {
        const unsubccibed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user
                setUser({
                    displayName, email, uid, photoURL
                })
                setIsloading(false)
                history.push('/')
                return;
            }
            setIsloading(false)
            history.push('/login')

        });

        return () => {
            unsubccibed();
        }
    }, [history])


    return (
        <AuthContext.Provider value={{ user }}>
            {isloading ? <Spin /> : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;