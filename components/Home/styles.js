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
		margin-left: 5px;
	}
`;

export const LogoImg = styled.img`
	width: 175px;
	transform: scale(0.5);

	@media (max-width: 1000px) {
		width: 125px;
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
	margin: 7vh auto;
	justify-content: center;

	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
`;

export const FooterContainer = styled.div`
	position: relative;

	display: flex;
	width: 100%;
	justify-content: center;
`;

export const ContactContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 45vw;
	margin: 7vh auto;
	justify-content: center;
	align-items: center;

	@media (max-width: 1300px) {
		width: 75vw;
	}
`;

export const ContactText = styled.p`
	color: white;
	font-size: 25px;
	text-align: center;

	@media (max-width: 1300px) {
		font-size: 20px;
	}
`;

export const CardContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
	gap: 30px;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #282828;
	border-radius: 5px;
`;

export const CardMainHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding-left: 20px;
	padding-top: 20px;
	padding-right: 20px;
`;

export const CardHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding-top: 20px;
	padding-left: 20px;
`;

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	height: 100px;
	margin-bottom: 70px;
	width: 100%;
	padding: 20px;
`;

export const CardFooter = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin-top: 10px;
	margin-bottom: 20px;
	margin-left: 20px;
	margin-right: 20px;
`;

export const MainContainer2 = styled.div`
	position: relative;
	display: flex;
	width: 70vw;
	margin: 2vh auto;

	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
`;

export const InnerGrid = styled.div`
	position: relative;
	display: grid;

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

export const TextContainer2 = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: left;
`;

export const TextContainerAbout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	padding-left: 15%;
	justify-content: left;

	@media (max-width: 1150px) {
		padding-left: 0;
		justify-content: center;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	flex-flow: wrap;
	width: 100%;
	justify-content: space-around;
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: right;
`;

export const HeroImg = styled.img`
	display: block;

	@media (max-width: 1150px) {
		width: 100%;
		transform: scale(0.7);
	}
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const RightContainer2 = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: flex-end;
	padding-right: 17%;

	@media (max-width: 1000px) {
		padding-right: 0;
	}
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

	flex-basis: 75vw;
	grid-template-columns: repeat(2, 1fr);
	margin: 3.5vh auto;

	@media (max-width: 1150px) {
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
