import React from 'react';
import Footer from '../sections/Footer';
import LeftHome from '../sections/LeftHome';
import RightHome from '../sections/RightHome';

const Home = () => {
	return (
		<React.Fragment>
			<div className='container'>
				<div className='laptop:grid laptop:grid-cols-2 laptop:gap-4'>
					<LeftHome />
					<div className='mobile:hidden'>
						<RightHome />
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Home;

