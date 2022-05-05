import styled from 'styled-components';

export const Container = styled.div`
    padding-left: 55px;
    padding-top: 10px;
`
export const Image = styled.img`
    src: ${props => props.src};
    height: ${props => props.height};
    margin: ${props => props.style?.margin};
    alt: ${props => props.alt};
`