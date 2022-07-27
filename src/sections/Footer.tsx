import React from 'react';
import Socials from './Socials';

const Footer = () => {
	return (
		<div className='bg-zinc-300 dark:bg-zinc-800'>
			<div className='container py-4'>
				<div className='flex flex-col laptop:flex-row justify-between items-center gap-4'>
					<div className='flex items-center gap-2'>
						<span>nyxfor13days</span>
						<span className='fa-regular fa-copyright' />
						<span>{new Date().getFullYear()}</span>
					</div>

					<Socials />
				</div>
			</div>
		</div>
	);
};

export default Footer;

