import styled from 'styled-components';
import Particles from 'react-particles-js';

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
`;

export const LogoContainer = styled.div`
	display: inline-block;
	margin-left: 40px;
`;

export const MainContainer = styled.div`
	position: relative;
	display: flex;
	width: 85vw;
	margin: 2vh auto;
	justify-content: center;
	align-content: center;
	background-color: white;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
`;

export const InnerGrid = styled.div`
	position: relative;
	display: grid;
	height: 55vh;
	flex-basis: 75vw;
	grid-template-columns: repeat(2, 1fr);
	margin: 3.5vh auto;

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const TextContainer = styled.div`
	display: flex;
	width: 100%;
	height: 80%;
	justify-content: flex-end;
	background-color: blue;
`;

export const PictureContainer = styled.div`
	display: flex;
	width: 100%;
	height: 80%;
	justify-content: flex-start;
	background-color: orange;
`;

export const ThiccText = styled.h1`
	font-weight: normal;
	font-size: 80px;
	color: white;
	text-align: right;
`;

export const SmallText = styled.h1`
    font-weight: normal:
    font-size: 50px;
    color: white;
`;
