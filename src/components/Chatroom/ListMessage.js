import React, { useContext, useEffect, useState } from 'react';
import { Button, Collapse, Typography } from 'antd'
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons'
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { db } from '../firebase/config'


const { Panel } = Collapse



const PanelStyled = styled(Panel)`
    &&&{
        .ant-collapse-header,
        p{
            color:white;
        }
        .ant-collapse-content-box{
            padding :0 40px;
        }

        .add-room{
            color:white;
            padding:0;
        }

    }
`

const ListMessageStyled = styled(Typography.Link)`
    display:block;
    margin-bottom:5px;
    color:white

`

function ListMessage() {
    const { rooms, setIsAddRoomVisible, setSelectedRoomId } = useContext(AppContext)

    const { user: { uid } } = useContext(AuthContext)

    const [state, setState] = useState([])



    const handleAddroom = () => {
        setIsAddRoomVisible(true)
    }

    React.useEffect(() => {
        let collectionRef = db.collection('rooms').where('members', 'array-contains', uid)
        const unsubccibed = collectionRef.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))

            setState(documents)
        })

        return unsubccibed;

    }, [])


    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header='Danh sách các cuộc trò chuyện' key='1'>
                {
                    state.map((room) => {
                        return <ListMessageStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}

                        >{room.name}</ListMessageStyled>
                    })
                }

                <Button type="text" icon={<PlusSquareOutlined />} className="add-room" onClick={handleAddroom}>Tạo Phòng</Button>
            </PanelStyled>
        </Collapse>
    );
}

export default ListMessage;