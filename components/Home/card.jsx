import React, { Component } from 'react';
import { FaFolderOpen, FaExternalLinkSquareAlt } from 'react-icons/fa';
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
	var i = 0;
	var techs = props.tech.map(function (tech, i) {
		i += 1;
		return (
			<p key={i} style={{ color: 'white' }}>
				{tech}
			</p>
		);
	});

	return (
		<>
			<Card>
				<CardMainHeader>
					<IconContext.Provider value={{ size: '3em' }}>
						<FaFolderOpen />
						<a style={{ color: 'black' }} href={props.link} target="_blank">
							<FaExternalLinkSquareAlt className="cardlink" />
						</a>
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
