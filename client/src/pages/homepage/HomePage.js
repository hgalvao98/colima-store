import React from 'react'
import { Main, Banner } from './styled'
import SurfBanner from '../../assets/videos/surfbanner.mp4'
import CardHome from '../../components/CardHome/CardHome'

export default function HomePage() {
    return (
        <Main>
            <Banner>
                <video width="100%" loop playsInline autoPlay muted>
                    <source src={SurfBanner}></source>
                </video>
                <CardHome />
            </Banner>
        </Main>
    )
}
