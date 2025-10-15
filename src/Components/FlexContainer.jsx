import styled from "styled-components"

export default function FlexContainer(props){
    return(
        <Flex style={props.styles}>
            {props.children}
        </Flex>
    )

}

const Flex = styled.div`
    display: flex;
    flex-direction: row;
      @media only screen and (max-width: 1200px) {
        flex-direction: column;
}
`