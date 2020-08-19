import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import {
	Background,
	NavigationBar,
	LogoContainer,
	MainContainer,
	ThiccText,
	SmallText,
} from './styles';
import { Row, Col, Divider } from 'antd';

function HomeContainer() {
	return (
		<>
			<Background>
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
					<SmallText>Hey there!</SmallText>
					<ThiccText>I'm Harsh Topiwala.</ThiccText>
				</MainContainer>
			</Background>
		</>
	);
}

export default HomeContainer;
