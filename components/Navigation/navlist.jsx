import React, { Component } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import dynamic from 'next/dynamic';

import {
	NavigationBar,
	LogoContainer,
	LogoImg,
	NavigationList,
	NavItem,
	LinkAnchor,
} from './styles';

function Navlist() {
	return (
		<>
			<NavigationList className="navlist">
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
		</>
	);
}

export default Navlist;
