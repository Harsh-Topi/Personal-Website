import React, { Component } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import dynamic from 'next/dynamic';

import NavList from './navlist';

import {
	NavigationBar,
	LogoContainer,
	LogoImg,
	NavItem,
	LinkAnchor,
} from './styles';

function Navbar() {
	return (
		<>
			<NavigationBar>
				<LogoContainer>
					<a href="#start">
						<LogoImg src="/logo/logowhite.svg" />
					</a>
				</LogoContainer>
				<NavList id="nlist" />
			</NavigationBar>
		</>
	);
}

export default Navbar;
