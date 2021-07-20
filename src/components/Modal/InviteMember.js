import React, { useContext, useMemo, useState } from 'react';
import { Modal, Form, Select, Spin } from 'antd'
import { AppContext } from '../../Context/AppProvider'
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../firebase/service';
import { debounce } from 'lodash'
import Avatar from 'antd/lib/avatar/avatar';
import { db } from '../firebase/config';



function DebounceSelect({ fecthOptions, debounceTimeout = 300, ...props }) {

    const [fetching, setFetching] = useState(false)

    const [options, setOptions] = useState([])

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value) => {
            setOptions([])
            setFetching(true)

            fecthOptions(value).then(newOptions => {
                setOptions(newOptions)
                setFetching(false)
            })
        }

        return debounce(loadOptions, debounceTimeout)
    }, [debounceTimeout, fecthOptions])

    return (
        <Select labelInValue onSearch={debounceFetcher}
            filterOption={false}
            notFoundContent={fetching ? <Spin size='small' /> : null}
            {...props}
        >
            {
                options.map((option) => {
                    return <Select.Option key={option.value} value={option.value} title={option.label}>
                        <Avatar size='small' src={option.photoURL}></Avatar>
                        {
                            option.photoURL ? '' : option.label?.chatAt(0).toUpperCase()
                        }
                        {`${option.label}`}
                    </Select.Option>
                })
            }


        </Select>
    )
}


async function fetchUserList(search) {
    return db.collection('users').where('keywords', 'array-contains', search).orderBy('displayName').limit(20).get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({
                lable: doc.data().displayName,
                value: doc.data().uid,
                photoURL: doc.data().photoURL
            }))
        })
}



function InviteMember() {
    const [value, setValue] = useState('')

    const { isInviteMember, setIsInviteMember, selectedRoomId, selectedRoom } = useContext(AppContext)

    const [form] = Form.useForm()

    const handleOk = () => {

        setIsInviteMember(false)
        form.resetFields()

        const roomRef = db.collection('rooms').docs(selectedRoomId)

        roomRef.update({ ...selectedRoom.members, ...value.map(val => val.value) })

        console.log(value);

    }


    const handelCancel = () => {
        setIsInviteMember(false)
        form.resetFields()

    }

    return (
        <div>
            <Modal
                title="Mời thành viên"
                visible={isInviteMember}
                onOk={handleOk}
                onCancel={handelCancel}
            >
                <Form >
                    <DebounceSelect
                        mode="multiple"
                        label="Tên các thành viên"
                        value={value}
                        fecthOptions={fetchUserList}
                        onChange={newValue => { setValue(newValue) }}
                        style={{ width: '100%' }}
                    >


                    </DebounceSelect>


                </Form>

            </Modal>
        </div>
    );
}

export default InviteMember;