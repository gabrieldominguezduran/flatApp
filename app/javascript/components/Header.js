import React, { Component } from 'react'
import main from '../../assets/images/main.jpg'
import styled from 'styled-components'

const Section = styled.section`
    background-image: url(${main});
    background-repeat: no-repeat;
    background-position: center fixed;
		background-size: cover;
		width: 100vw;
		heigth: 100vh;
`

const Title = styled.div`
    padding: 20% 5%;
`
const P = styled.p`
    font-size: 2em;
    font-weight: 900;
    line-heigth: 52px;
    color: #FB8407 ;
`
const H1 = styled.h1`
    font-size: 4em;
    font-weight: 900;
    line-heigth: 52px;
		color: #FB8407;
`



const Header = () => {
    return (
        <Section>
					<Title>
						<H1>Flat App</H1>
							<P>Find your perfect flat match</P>
					</Title>          
        </Section>
    )
}

export default Header