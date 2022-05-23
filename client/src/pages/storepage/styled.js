import styled from "styled-components"

export const Main = styled.div`
    height:100%;
    background-color:white;
    display:flex;
    justify-content:center;
    h1{
        position: absolute;
        margin-top:100px;
        font-size:50px;
    }
`
export const Banner = styled.div`
    height:100%;
    width:100vw;
    position:fixed;
    z-index:-1;
    img{
        opacity:0.2;
    }
`