import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Particles from 'react-particles-js';

import {
	Background,
	NavigationBar,
	LogoContainer,
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
			<NavigationBar>
				<LogoContainer>
					<img
						style={{
							width: '175px',
							transform: 'scale(0.5)',
						}}
						src="/logo/logowhite.svg"
					/>
				</LogoContainer>
			</NavigationBar>
			<MainContainer>
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
								size={'large'}>
								Resume
							</CustomButton>
							<CustomButton
								style={{ color: 'white', borderColor: 'white' }}
								ghost={'true'}
								type={'primary'}
								size={'large'}>
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
			<Background params={particlesOptions} />
		</>
	);
}

export default HomeContainer;
