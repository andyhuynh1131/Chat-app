import React from 'react';
import { Row, Col } from 'antd'
import InfoUser from './InfoUser';
import ListMessage from './ListMessage';
import styled from 'styled-components'

const SideBarstyled = styled.div`
    background: #3f0e40;
    color : white;
    height: 100vh;
`


function SideBar() {
    return (
        <SideBarstyled>
            <Row>
                <Col span={24}><InfoUser /></Col>
                <Col span={24}><ListMessage /></Col>
            </Row>
        </SideBarstyled>
    );
}

export default SideBar;