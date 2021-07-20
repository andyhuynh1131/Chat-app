import { AuthContext } from './AuthProvider';
import React, { useState, useMemo, useContext, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import { db } from '../components/firebase/config'


export const AppContext = React.createContext();

function AppProvider({ children }) {
    const [isInviteMember, setIsInviteMember] = useState(false)

    const [members, setMembers] = useState([])

    const [selectedRoomId, setSelectedRoomId] = useState('')

    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false)

    const { user: { uid } } = useContext(AuthContext)

    const roomscondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    }, [uid])

    const rooms = useFirestore('rooms', roomscondition)


    const selectedRoom = React.useMemo(
        () => rooms.find((room) => room.id === selectedRoomId) || {}

        , [rooms, selectedRoomId])



    useEffect(() => {
        if (!selectedRoom.members) {
            return;
        }
        let collectionRef = db.collection('users').where('uid', 'in', selectedRoom.members)
        const unsubccibed = collectionRef.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))

            setMembers(documents)
        })

        return unsubccibed;

    }, [selectedRoom.members])



    return (
        <AppContext.Provider value={{
            rooms, members, selectedRoom, isAddRoomVisible,
            setIsAddRoomVisible, selectedRoomId, setSelectedRoomId,
            isInviteMember, setIsInviteMember
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;