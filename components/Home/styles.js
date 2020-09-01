import styled from 'styled-components';
import Particles from 'react-particles-js';

import { Button } from 'antd';

export const Background = styled(Particles)`
	background-color: black;
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: -1;
`;

export const NavigationBar = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	justify-content: space-between;
	align-items: center;
`;

export const NavigationList = styled.ul`
	list-style: none;
	padding-right: 30px;
	margin-right: 30px;
`;

export const NavItem = styled.li`
	display: inline-block;
	text-direction: none;
	color: white;
	padding: 10px 40px;
	color: white;
	font-size: 25px;
	font-weight: normal;

	@media (max-width: 1000px) {
		font-size: 20px;
	}
`;

export const LinkAnchor = styled.a`
	color: white;
	border: 1px solid transparent;

	&:hover {
		color: white;
		border-bottom: 1px solid;
		border-spacing: 15px;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	margin-left: 30px;

	@media (max-width: 1000px) {
		margin-left: 20px;
	}

	@media (max-width: 500px) {
		margin-left: 10px;
	}
`;

export const LogoImg = styled.img`
	width: 175px;
	transform: scale(0.5);

	@media (max-width: 1000px) {
		width: 145px;
	}
`;

export const AboutParagraph = styled.div`
	color: white;
	font-size: 20px;
	padding-right: 30px;
	margin: auto;

	@media (max-width: 1000px) {
		padding-right: 0;
	}
`;

export const MainContainer = styled.div`
	position: relative;
	display: flex;
	width: 75vw;
	margin: 2vh auto;
	justify-content: center;
	align-content: center;

	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
`;

export const InnerGrid = styled.div`
	position: relative;
	display: grid;
	height: 55vh;
	flex-basis: 75vw;
	grid-template-columns: repeat(2, 1fr);
	margin: 3.5vh auto;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	line-height: 90px;
	align-items: center;
	justify-content: center;

	@media (max-width: 1050px) {
		line-height: 80px;
	}
`;

export const TextContainerAbout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding-left: 30px;
	justify-content: left;

	@media (max-width: 1000px) {
		padding-left: 0px;
		justify-content: center;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	width: 100%;
	justify-content: space-evenly;
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const ThiccText = styled.h1`
	font-weight: bold;
	font-size: 80px;
	color: white;
	text-align: right;

	@media (max-width: 1252px) {
		font-size: 70px;
	}

	@media (max-width: 1000px) {
		text-align: center;
		font-size: 60px;
	}
`;

export const InsideLeftContainer = styled.div`
	margin-right: 30px;

	@media (max-width: 1000px) {
		margin-right: 0;
	}
`;

export const InsideRightContainer = styled.div`
	margin-left: 30px;
	@media (max-width: 1000px) {
		margin-left: 0;
	}
`;

export const SmallText = styled.h1`
    font-weight: normal:
    font-size: 50px;
	color: white;

	@media (max-width: 1252px) {
		font-size: 25px;
	}

	@media (max-width: 1000px) {
		text-align: center;
		font-size: 23px;
	}

`;

export const SmallTextLeft = styled.h1`
    font-weight: normal:
    font-size: 50px;
	color: white;
	text-align: right;

	@media (max-width: 1252px) {
		font-size: 20px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: row;
	column-gap: 50px;

	@media (max-width: 1252px) {
		column-gap: 30px;
	}
`;

export const CustomButton = styled(Button)`
	border-radius: 10px;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
`;

export const InnerGrid2 = styled.div`
	position: relative;
	display: grid;
	height: 45vh;
	flex-basis: 85vw;
	grid-template-columns: repeat(2, 1fr);
	margin: 3.5vh auto;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const GeneralSkillsContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	width: 85vw;
	justify-content: space-around;
	align-self: center;
	column-gap: 70px;
	background-color: orange;
`;
