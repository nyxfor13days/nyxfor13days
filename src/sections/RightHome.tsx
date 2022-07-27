import React from 'react';
import LittleSections from '../components/LittleSections';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Socials from './Socials';

const RightHome = () => {
	return (
		<div className='flex flex-col gap-12 my-12'>
			<BasicInfo />
			<Socials />
			<Education />

			<LittleSections
				title='Personal Values'
				list={[
					'Creative',
					'Innovative',
					'Curious',
					'Dedicated',
					'Responsible',
				]}
			/>

			<LittleSections
				title='Expertise'
				list={[
					'User Experience',
					'Quality Testing',
					'Brand Identity',
					'Web Development',
					'Website Design',
				]}
			/>

			<LittleSections
				title='Languages'
				list={['English', 'Punjabi', 'Hindi', 'Greek']}
			/>

			<LittleSections
				title='Interests'
				list={[
					'Coding random funny projects',
					'Playing Football',
					'Playing with Linux Operating System',
					'Studying about Space Exploration',
					'Making different types of coffee',
				]}
			/>
		</div>
	);
};

export default RightHome;

