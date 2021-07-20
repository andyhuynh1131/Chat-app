import React from 'react';
import { Row, Col, Button, Typography } from 'antd'
import firebase, { auth, db } from '../firebase/config'
import { addDocument, generateKeywords } from '../firebase/service';



const { Title } = Typography

const fbProvider = new firebase.auth.FacebookAuthProvider();





function Login() {


    const handleFBlogin = async () => {

        const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider)
        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName)
            })
        }
    }




    return (
        <div>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: "center", marginBottom: 10 }} Level={3}>
                        App Chat
                    </Title>
                    <Button style={{ marginBottom: 5, width: '100%' }}>Đăng nhập bằng GooGle</Button>
                    <Button onClick={handleFBlogin} style={{ width: '100%' }}>Đăng nhập bằng FaceBook</Button>

                </Col>

            </Row>
        </div>
    );
}

export default Login;