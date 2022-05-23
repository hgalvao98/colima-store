import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:150px;
    width:150px;
    background-color:transparent;
    border:2px solid black;
    border-radius:5px;
    z-index:2;
    position:fixed;
    align-self:center;
    top:450px;  
    right:0;
    h3{
        margin-left:4px;
        font-size:30px;
        position: relative;
    }
`