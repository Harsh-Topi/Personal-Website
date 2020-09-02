import React, { Component } from 'react';

import { Card, CardHeader, CardBody, CardFooter } from './styles';
import { Row, Col, Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

function CardView(props) {
	return (
		<>
			<Card>
				<CardHeader>
					<Title style={{ color: 'white' }}>Lorem Ipsum</Title>
				</CardHeader>
				<CardBody>
					<p style={{ color: 'white' }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						as
					</p>
				</CardBody>
				<CardFooter>
					<p>dingus</p>
					<p>dingus</p>
					<p>dingus</p>
				</CardFooter>
			</Card>
		</>
	);
}

export default CardView;
