import React, { useContext, useState } from 'react';
import { Modal, Form, Input } from 'antd'
import { AppContext } from '../../Context/AppProvider'
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../firebase/service';


function AddRoomModal() {

    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext)
    const { user: { uid } } = useContext(AuthContext)


    const [form] = Form.useForm()

    const handleOk = () => {
        console.log(form.getFieldsValue());
        addDocument('rooms', { ...form.getFieldsValue(), members: [uid] })

        setIsAddRoomVisible(false)
        form.resetFields()

    }


    const handelCancel = () => {
        setIsAddRoomVisible(false)
        form.resetFields()

    }

    return (
        <div>
            <Modal
                title="Tạo phòng"
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handelCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Tên phòng :" name="name">
                        <Input placeholder="Nhập tên phòng ..." />

                    </Form.Item>
                    <Form.Item label="Mô tả :" name="desription">
                        <Input.TextArea placeholder="Mô tả ..." />

                    </Form.Item>


                </Form>

            </Modal>
        </div>
    );
}

export default AddRoomModal;