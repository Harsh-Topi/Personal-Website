import React, { Component } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardMainHeader,
} from './styles';
import { Row, Col, Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

function CardView(props) {
	var techs = props.tech.map(function (tech) {
		return <p style={{ color: 'white' }}>{tech}</p>;
	});

	return (
		<>
			<Card>
				<CardMainHeader>
					<IconContext.Provider value={{ size: '3em' }}>
						<FaFolderOpen />
					</IconContext.Provider>
				</CardMainHeader>
				<CardHeader>
					<h1 style={{ color: 'white' }}>{props.projectName}</h1>
				</CardHeader>
				<CardBody>
					<p style={{ color: 'white' }}>{props.description}</p>
				</CardBody>
				<CardFooter>{techs}</CardFooter>
			</Card>
		</>
	);
}

export default CardView;
