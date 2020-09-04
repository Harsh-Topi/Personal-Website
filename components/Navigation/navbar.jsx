import React, { Component } from 'react';
import Link from 'next/link';

import {
	NavigationBar,
	LogoContainer,
	LogoImg,
	NavigationList,
	NavItem,
	LinkAnchor,
} from './styles';

function Navbar() {
	return (
		<>
			<NavigationBar>
				<LogoContainer>
					<LogoImg src="/logo/logowhite.svg" />
				</LogoContainer>
				<NavigationList>
					<NavItem>
						<Link href="#about">
							<LinkAnchor>About Me</LinkAnchor>
						</Link>
					</NavItem>
					<NavItem>
						<Link href="/">
							<LinkAnchor>Reports</LinkAnchor>
						</Link>
					</NavItem>
					<NavItem>
						<LinkAnchor href="#contact">Contact</LinkAnchor>
					</NavItem>
				</NavigationList>
			</NavigationBar>
		</>
	);
}

export default Navbar;
