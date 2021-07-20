import React, { useContext, useEffect } from 'react';
import { Button, Avatar, Typography } from 'antd'
import styled from 'styled-components'
import { auth, db } from '../firebase/config';
import { AuthContext } from '../../Context/AuthProvider';

const Infostyled = styled.div`
    display:flex;
    justify-content: space-between;
    padding:12px 16px;
    border-bottom: 1px solid rgba(82,38,83);

    .username{
        color:white;
        margin-left:5px
    }



`

function InfoUser() {
    // useEffect(() => {
    //     db.collection('users').onSnapshot((snapshot) => {
    //         const data = snapshot.docs.map(doc => ({
    //             ...doc.data(),
    //             id: doc.id
    //         }))



    //         console.log({ data, snapshot, docs: snapshot.docs });
    //     })
    // }, [])

    const { user: {
        displayName,
        photoURL
    } } = useContext(AuthContext)

    return (
        <Infostyled>
            <div>
                <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}</Avatar>
                <Typography.Text className='username'>{displayName}</Typography.Text>
            </div>
            <Button ghost onClick={() => { auth.signOut() }}>Đăng xuất</Button>
        </Infostyled>
    );
}

export default InfoUser;