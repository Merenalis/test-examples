import React from 'react';
import Title from "./Title";
import Flex from "./Flex";
import styled from "styled-components";
import Console from "./Console";
import Button from "./Button";

const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
padding:2rem;
background:black;
`
function Main() {
    return (

            <AppWrapper className="App">
                <Flex justify={'center'}>
                    <Title color={'green'}>
                        YA EBANUTIY BEGITE
                    </Title>
                </Flex>
                <Flex direction={'column'} margin={'10px 0px'}>
                    <Console color={'green'}/>
                    <Button color={'green'} outlined align={'flex-end'}>SEND</Button>
                </Flex>

            </AppWrapper>

    );
}

export default Main;