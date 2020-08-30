import PropTypes from 'prop-types';
import HeadComponent from '../Head';
import Navbar from '../Navigation';

const Layout = ({ title, children }) => {
	return (
		<div className={'MAIN_BODY'}>
			<HeadComponent title={title} />
			<Navbar />
			<div className={'MAIN_CONTENT'}>{children}</div>
		</div>
	);
};

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any,
};

export default Layout;
