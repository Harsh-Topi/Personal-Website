import styled from 'styled-components';
import Particles from 'react-particles-js';

import { Button } from 'antd';

export const Background = styled(Particles)`
	background-color: black;
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: -1;
`;
