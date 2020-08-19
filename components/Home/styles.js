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
	align-items: center;
	width: 85vw;
	margin: 2vh auto;
	border-radius: 10px;
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
