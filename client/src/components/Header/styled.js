import styled from "styled-components";

export const Main = styled.div`
    z-index:2;
    position:sticky;
    top:0;
    width:100%;
    background-color:white;
    border-bottom:1px solid grey;
    height:100px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    
    h1{
        color:black;
        padding:0;
        margin:0 0 0 70px;
        align-self:center;
    }
`

export const RightNavBar = styled.div`
    width:50%;
    display:flex;
    justify-content:space-around;
    button{
        text-decoration:none;
        background:transparent;
        border:none;
        font-family: 'Amatic SC', cursive, sans-serif;
        font-size:30px;
        :hover{
            cursor: pointer;
        }
    }
`

export const LeftNavBar = styled.div`
    h1{
        :hover{
            cursor: pointer;
        }
    }
`