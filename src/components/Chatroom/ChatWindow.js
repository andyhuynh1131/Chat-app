
import styled from 'styled-components'
import { UserAddOutlined } from '@ant-design/icons'
import { Button, Tooltip, Avatar, Form, Input, Alert, message } from 'antd';
import Message from './Message';
import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../Context/AppProvider";
import { addDocument } from '../firebase/service'
import { AuthContext } from '../../Context/AuthProvider';
import { db } from '../firebase/config'






const HeaderStyled = styled.div`
    display:flex;
    justify-content: space-between;
    height:56px;
    padding:0 16px;
    align-items:center;
    border-bottom:1px solid rgb(230,230,230);


    .header{
        &-info{
            display:flex;
            flex-direction:column;
            justify-content:center;

        }

        &-title{
           margin:0;
           font-weight:bold;
            
        }

        &-desription{
           font-size:12px;
            
        }
    }

`
const ButtonGroupStyled = styled.div`
    display:flex;
    align-items:center;

`
const ListmessageStyled = styled.div`
        max-height:100%;
        overflow-y:auto;

`

const Wrapper = styled.div`
    height:100vh
`
const ContentStyled = styled.div`
    height:calc(100% - 56px);
    display:flex;
    flex-direction:column;
    padding:11px;
    justify-content:flex-end;
`
const FormStyled = styled(Form)`
    display:flex;
    align-items: center;
    padding : 2px 2px 2px 0;
    border: 1px solid rgb(230,230,230);
    border-radius:3px;
    height:60px;

    ant-form-item{
        margin-bottom:0;
        flex:1;
    }

`


function ChatWindow() {
    const [state, setState] = useState([])
    const { user: { uid, photoURL, displayName } } = useContext(AuthContext)
    const { selectedRoom, setIsInviteMember, members } = useContext(AppContext)
    const [inputValue, setInputValue] = useState('')
    const [form] = Form.useForm()


    const handleInputChange = (e) => {

        setInputValue(e.target.value)

    }


    const handelSendMessage = () => {
        addDocument('messages', {

            text: inputValue,
            uid,
            photoURL,
            roomId: selectedRoom.id,
            displayName
        })

        form.resetFields(['message'])
    }



    useEffect(() => {

        if (!selectedRoom.id) {
            return;
        }
        let message = db.collection('messages').where('roomId', "==", selectedRoom.id)
        const unsubccibed = message.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            documents.sort((a, b) => { return a.createdAt - b.createdAt })
            setState(documents)

        })

        return unsubccibed
    }, [selectedRoom.id])




    return (
        <Wrapper>
            {
                selectedRoom.id ? (
                    <>
                        <HeaderStyled>
                            <div className="header-info">

                                <p className="header-title">{selectedRoom.name}</p>
                                <span className="header-desription">{selectedRoom.desription}</span>
                            </div>
                            <div>
                                <ButtonGroupStyled>
                                    <Button icon={<UserAddOutlined />} onClick={() => setIsInviteMember(true)}>Mời</Button>
                                    <Avatar.Group size='small' maxCount={2}>
                                        {
                                            members.map(member =>
                                                <Tooltip title={member.displayName}>
                                                    <Avatar src={member.photoURL} key={member.id}></Avatar>
                                                </Tooltip>)

                                        }
                                    </Avatar.Group>
                                </ButtonGroupStyled>
                            </div>

                        </HeaderStyled>

                        <ContentStyled>
                            <ListmessageStyled>
                                {
                                    state.map(message => <Message key={message.id} text={message.text} photoURL={message.photoURL}
                                        createdAt={message.createdAt} displayName={message.displayName}

                                    />)
                                }


                            </ListmessageStyled>
                            <FormStyled form={form}>
                                <Form.Item name="message" style={{ width: '100%' }}>
                                    <Input onChange={handleInputChange} onPressEnter={handelSendMessage} placeholder="Nhập tin nhắn  . . ." bordered={false} autoComplete="off" />
                                </Form.Item>
                                <Button type="primary" onClick={handelSendMessage}>Gửi</Button>

                            </FormStyled>

                        </ContentStyled>
                    </>
                ) : <Alert message="Hãy chọn phòng" type="info" showIcon style={{ margin: 5 }} closable />
            }

        </Wrapper >
    );
}

export default ChatWindow;