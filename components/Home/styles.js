import styled from 'styled-components';

export const Background = styled.div`
	background-image: linear-gradient(
			12deg,
			rgba(193, 193, 193, 0.05) 0%,
			rgba(193, 193, 193, 0.05) 2%,
			rgba(129, 129, 129, 0.05) 2%,
			rgba(129, 129, 129, 0.05) 27%,
			rgba(185, 185, 185, 0.05) 27%,
			rgba(185, 185, 185, 0.05) 66%,
			rgba(83, 83, 83, 0.05) 66%,
			rgba(83, 83, 83, 0.05) 100%
		),
		linear-gradient(
			321deg,
			rgba(240, 240, 240, 0.05) 0%,
			rgba(240, 240, 240, 0.05) 13%,
			rgba(231, 231, 231, 0.05) 13%,
			rgba(231, 231, 231, 0.05) 34%,
			rgba(139, 139, 139, 0.05) 34%,
			rgba(139, 139, 139, 0.05) 71%,
			rgba(112, 112, 112, 0.05) 71%,
			rgba(112, 112, 112, 0.05) 100%
		),
		linear-gradient(
			236deg,
			rgba(189, 189, 189, 0.05) 0%,
			rgba(189, 189, 189, 0.05) 47%,
			rgba(138, 138, 138, 0.05) 47%,
			rgba(138, 138, 138, 0.05) 58%,
			rgba(108, 108, 108, 0.05) 58%,
			rgba(108, 108, 108, 0.05) 85%,
			rgba(143, 143, 143, 0.05) 85%,
			rgba(143, 143, 143, 0.05) 100%
		),
		linear-gradient(
			96deg,
			rgba(53, 53, 53, 0.05) 0%,
			rgba(53, 53, 53, 0.05) 53%,
			rgba(44, 44, 44, 0.05) 53%,
			rgba(44, 44, 44, 0.05) 82%,
			rgba(77, 77, 77, 0.05) 82%,
			rgba(77, 77, 77, 0.05) 98%,
			rgba(8, 8, 8, 0.05) 98%,
			rgba(8, 8, 8, 0.05) 100%
		),
		linear-gradient(334deg, hsl(247, 0%, 2%), hsl(247, 0%, 2%));
	height: 100%;
	overflow: hidden;
`;

export const NavigationBar = styled.div`
	display: flex;
	width: 100%;
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
