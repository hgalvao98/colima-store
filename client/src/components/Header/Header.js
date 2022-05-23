import React from 'react'
import {useHistory} from 'react-router'
import { Main, RightNavBar, LeftNavBar } from './styled'
import {goToHome, goToAbout, goToStore} from '../../routes/coordinator'

export default function Header() {
    const history = useHistory()
    return (
        <Main>
            <LeftNavBar>
            <h1 onClick={()=> goToHome(history)}>Colima</h1>
            </LeftNavBar>
            <RightNavBar>
            <button onClick={()=> goToAbout(history)}>about</button>
            <button onClick={()=> goToStore(history)}>store</button>
            <button>log in</button>
            </RightNavBar>
        </Main>
    )
}
