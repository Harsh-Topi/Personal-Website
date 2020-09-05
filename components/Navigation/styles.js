import styled from 'styled-components';
import Particles from 'react-particles-js';

import { Button } from 'antd';

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

	@media (max-width: 740px) {
		display: none;
	}
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
