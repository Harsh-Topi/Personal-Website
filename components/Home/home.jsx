import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Particles from 'react-particles-js';
import { FaJava, FaPython, FaJs, FaNode, FaReact } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import {
	Background,
	MainContainer,
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
			<MainContainer style={{ marginBottom: '25vh' }}>
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
								style={{
									color: 'white',
									borderColor: 'white',
								}}
								ghost={'true'}
								type={'primary'}
								size={'large'}
								href="https://drive.google.com/file/d/1p1c198vRGkrzzNy2BZL2JY1QT9A3jhAo/view?usp=sharing"
								target="_blank">
								Resume
							</CustomButton>
							<CustomButton
								style={{ color: 'white', borderColor: 'white' }}
								ghost={'true'}
								type={'primary'}
								size={'large'}
								href="https://github.com/Harsh-Topi"
								target="_blank">
								GitHub
							</CustomButton>
							<CustomButton
								style={{ color: 'white', borderColor: 'white' }}
								ghost={'true'}
								type={'primary'}
								size={'large'}>
								Projects
							</CustomButton>
						</ButtonContainer>
					</RightContainer>
				</InnerGrid>
			</MainContainer>

			<MainContainer style={{ marginBottom: '25vh' }}>
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
							</IconContext.Provider>
						</IconContainer>
					</TextContainerAbout>
					<RightContainer2>
						<HeroImg src="/logo/aboutme3.png" />
					</RightContainer2>
				</InnerGrid2>
			</MainContainer>

			<Background params={particlesOptions} />
		</>
	);
}

export default HomeContainer;
