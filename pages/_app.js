import React from 'react';
import PropTypes from 'prop-types';

// STYLESHEETS
import 'antd/dist/antd.css';
import '../styles/index.css';
import '../styles/styles.css';

MyApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.any,
};

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
