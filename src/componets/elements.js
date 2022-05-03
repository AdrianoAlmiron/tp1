import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px 15%;
`
export const Image = styled.img`
    src: ${props => props.src};
    height: ${props => props.height};
    margin: ${props => props.style?.margin};
    alt: ${props => props.alt};
`