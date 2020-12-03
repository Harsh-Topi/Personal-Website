import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Particles from 'react-particles-js';
import {
	FaJava,
	FaPython,
	FaJs,
	FaNode,
	FaReact,
	FaLinkedin,
	FaGithubSquare,
	FaInstagramSquare,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import CardView from './card';

import {
	Background,
	MainContainer,
	MainContainer2,
	ThiccText,
	SmallText,
	InnerGrid,
	TextContainer,
	RightContainer,
	ButtonContainer,
	CustomButton,
	SmallTextLeft,
	InsideLeftContainer,
	InsideRightContainer,
	InnerGrid2,
	GeneralSkillsContainer,
	TextContainerAbout,
	IconContainer,
	AboutParagraph,
	ImgContainer,
	HeroImg,
	RightContainer2,
	CardContainer,
	TextContainer2,
	ContactContainer,
	ContactText,
	FooterContainer,
} from './styles';

import { Row, Col, Typography, Button } from 'antd';

const { Title } = Typography;

const particlesOptions = {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: '#ffffff',
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000',
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.3,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 4,
				size_min: 0.3,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 80,
			color: '#ffffff',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 1,
			direction: 'none',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 600,
			},
		},
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: true,
				mode: 'bubble',
			},
			onclick: {
				enable: true,
				mode: 'grab',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 250,
				size: 0,
				duration: 2,
				opacity: 0,
				speed: 3,
			},
			repulse: {
				distance: 400,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
};

function HomeContainer() {
	return (
		<>
			<MainContainer style={{ marginBottom: '25vh' }} id="start">
				<InnerGrid>
					<TextContainer>
						<InsideLeftContainer>
							<ThiccText>Hello!</ThiccText>
							<ThiccText>I'm Harsh.</ThiccText>
							<SmallTextLeft>// An aspiring Software Developer</SmallTextLeft>
						</InsideLeftContainer>
					</TextContainer>
					<RightContainer>
						<InsideRightContainer>
							<SmallText>
								Currently enjoying Web and Mobile Development. Open to any and
								all opportunities.
							</SmallText>
						</InsideRightContainer>
						<ButtonContainer
							style={{ marginTop: '30px', marginBottom: '25px' }}>
							<CustomButton
								className="raise"
								style={{
									color: 'white',
									borderColor: 'white',
								}}
								ghost={'true'}
								type={'primary'}
								size={'large'}
								href="https://drive.google.com/file/d/1scpsUUBCJNjSW5Cvtww8aroLekaRKXk8/view?usp=sharing"
								target="_blank">
								Resume
							</CustomButton>
							<CustomButton
								className="raise"
								style={{ color: 'white', borderColor: 'white' }}
								ghost={'true'}
								type={'primary'}
								size={'large'}
								href="https://github.com/Harsh-Topi"
								target="_blank">
								GitHub
							</CustomButton>
							<CustomButton
								className="raise"
								style={{ color: 'white', borderColor: 'white' }}
								ghost={'true'}
								type={'primary'}
								size={'large'}
								href="#projects">
								Projects
							</CustomButton>
						</ButtonContainer>
					</RightContainer>
				</InnerGrid>
			</MainContainer>

			<MainContainer
				style={{ marginBottom: '20vh', paddingTop: '10vh' }}
				id="about">
				<InnerGrid2>
					<TextContainerAbout>
						<Title
							style={{
								color: 'white',
								fontSize: '35px',
							}}>
							// About Me
						</Title>
						<AboutParagraph style={{ marginBottom: '30px' }}>
							Hi! I'm Harsh, an aspiring Software Developer based in Toronto,
							ON. I currently attend the University of Guelph where I study
							Computer Science. <br /> <br /> I'm currently enjoying Web and
							Mobile Development, however, I'm always looking for new topics to
							explore as I'm trying to find my footing in the broad world of
							software.
						</AboutParagraph>
						<p
							style={{
								color: 'white',
							}}>
							> Technologies I've been using
						</p>
						<IconContainer>
							<IconContext.Provider
								value={{
									color: 'white',
									size: '4em',
									style: { margin: '20px 20px' },
								}}>
								<FaJava />
								<FaPython />
								<FaJs />
								<FaNode />
								<FaReact />
							</IconContext.Provider>
						</IconContainer>
					</TextContainerAbout>
					<RightContainer2>
						<HeroImg src="/logo/aboutme3.png" />
					</RightContainer2>
				</InnerGrid2>
			</MainContainer>

			<MainContainer
				style={{
					marginBottom: '40vh',
					flexDirection: 'column',
					paddingTop: '10vh',
				}}
				id="projects">
				<TextContainer2>
					<Title style={{ color: 'white' }}> // Projects</Title>
					<p style={{ color: 'white' }}>
						Here are some of my projects through which I've curated my skills
						from. All my code can be found on my GitHub.
					</p>
				</TextContainer2>
				<MainContainer2>
					<CardContainer>
						<CardView
							projectName="Intern.House"
							description="A networking platform where interns can search housing and job listings while
							connecting with other interns and employers. (Currently in development)"
							tech={['Node', 'Express', 'Next.js', 'React', 'PostgreSQL']}
							link="https://intern.house/"
						/>
						<CardView
							projectName="LyricNet"
							description="Utilized machine learning algorithms, including Recurring Neural Networks to auto-complete lyrics and
							the BERT language model to answer questions in the style of a chosen music artist."
							tech={['Python', 'Flask', 'React']}
							link="http://lyricnet.tech/"
						/>
						<CardView
							projectName="Morno"
							description="Utilized the Model-View-Controller methodology to build a simple iOS application which allows you to
							set morning routines, read news, and browse specific recipes depending on the time of day."
							tech={['Swift', 'Core Data']}
							link="https://github.com/Harsh-Topi/MornoApp"
						/>
					</CardContainer>
				</MainContainer2>
			</MainContainer>

			<ContactContainer id="contact">
				<Title
					style={{
						color: 'white',
						textDecoration: 'underline',
						marginBottom: '40px',
					}}>
					Contact
				</Title>
				<ContactText>
					I'm currently looking for work and am open to any opportunities that
					come my way. Whether you've got some questions or just want to chat, I
					will always do my best to respond. Shoot me an email or contact me on
					my other social medias.
				</ContactText>
				<ButtonContainer style={{ marginTop: '30px', marginBottom: '25px' }}>
					<CustomButton
						className="raise"
						style={{
							color: 'white',
							borderColor: 'white',
						}}
						ghost={'true'}
						type={'primary'}
						size={'large'}
						href="mailto:htopiw@gmail.com">
						Contact Me
					</CustomButton>
				</ButtonContainer>
				<IconContainer
					style={{
						justifyContent: 'space-evenly',
						width: '20vw',
					}}></IconContainer>
			</ContactContainer>
			<footer style={{ marginTop: '20vh' }}>
				<FooterContainer>
					<IconContext.Provider
						value={{
							color: 'white',
							size: '3.5em',
							style: { margin: '20px 20px' },
						}}>
						<a
							className="raise"
							target="_blank"
							href="https://www.linkedin.com/in/htopiwala/">
							<FaLinkedin />
						</a>
						<a
							className="raise"
							target="_blank"
							href="https://github.com/Harsh-Topi">
							<FaGithubSquare />
						</a>
						<a
							className="raise"
							target="_blank"
							href="https://www.instagram.com/harsh.topi/">
							<FaInstagramSquare />
						</a>
					</IconContext.Provider>
				</FooterContainer>
				<FooterContainer style={{ marginTop: '20px', marginBottom: '50px' }}>
					<p style={{ color: 'white' }}>Harsh Topiwala &copy; 2020</p>
				</FooterContainer>
			</footer>

			<Background params={particlesOptions} />
		</>
	);
}

export default HomeContainer;
