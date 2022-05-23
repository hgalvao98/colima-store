import styled from "styled-components"

export const Main = styled.div`
    height:100%;
    background-color:white;
    display:flex;
    justify-content:center;
    h1{
        color:black;
        font-size:80px;
        position:absolute;
        top:80px
    }
    h2{
        font-family: 'Homemade Apple', cursive;
        color:black;
        font-size:20px;
        position:absolute;
        top:200px;
    }
    p{
        position: absolute;
        margin:340px 500px 100px 500px;
        font-size:30px;
        color:black;
        font-weight:bold;
    }
    img{
       color:white; 
       position: absolute;
       height:50px;
       top:800px;
    }
`
export const Banner = styled.div`
    height:100%;
    width:100vw;
    position:fixed;
    z-index:-1;

    video{
        opacity:0.3;
    }
`