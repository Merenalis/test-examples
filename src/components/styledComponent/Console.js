import React, {useState} from 'react';
import styled from 'styled-components'
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  color: ${({color})=>color || 'white'};
  resize: none;
  &:focus{
    outline: none;
  }
`

function Console({color, ...props}) {

    const [lines,setLines] = useState(['C/Users/VasylSnus228>'])
    const onKeyPress = e =>{
        if (e.charCode==13){
            setLines([...lines,'C/Users/VasylSnus228>'])
        }
    }
    return (
        <Flex>
            <Flex direction={'column'} margin={'0px 10px'}>
                {lines.map((line,index)=>
                    <Line key={index} color={color}>{line}</Line>
                )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>    );
}

export default Console;