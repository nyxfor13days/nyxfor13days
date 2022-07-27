import React from 'react';
import LittleSections from '../components/LittleSections';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Skills from './Skills';
import Socials from './Socials';
import Work from './Work';

const LeftHome = () => {
	return (
		<div className='flex flex-col gap-12 mb-12'>
			<div className='relative'>
				<img
					src='https://images.unsplash.com/photo-1567324216289-97cc4134f626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80'
					alt='profile'
					className='object-cover w-full tablet:w-96 h-96'
				/>

				<h1 className='absolute bottom-0 leading-[86px]'>Hello,</h1>
			</div>

			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-1'>
					<h2>Nyxfor13days</h2>
					<h4>Frontend Developer</h4>
				</div>
				<p>
					I am a Frontend Developer, Blockchain Developer, Crypto
					Investor and Entrepreneur, currently working as a web
					development contracter. I have a passion for creating
					content and I am always looking to learn more about life,
					business and technology. I have been researching on future
					technologies like Blockchain and Artificial Intelligence. I
					also create video content about programming, lifestyle and
					how to improve your everyday life. I graduated from CT
					University in 2022 with a B.Tech in Computer Science
					(Specialised in Artificial Intelligence).
				</p>
			</div>

			<div className='laptop:hidden'>
				<BasicInfo />
			</div>

			<div className='laptop:hidden'>
				<Socials />
			</div>

			<Skills />

			<Work />

			<div className='laptop:hidden'>
				<Education />
			</div>

			<div className='laptop:hidden'>
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
			</div>

			<div className='laptop:hidden'>
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
			</div>

			<div className='laptop:hidden'>
				<LittleSections
					title='Languages'
					list={['English', 'Punjabi', 'Hindi', 'Greek']}
				/>
			</div>

			<div className='laptop:hidden'>
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
		</div>
	);
};

export default LeftHome;

