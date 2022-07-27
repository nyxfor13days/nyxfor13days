import React from 'react';

const BasicInfo = () => {
	return (
		<div className='flex flex-col gap-1 pl-4 border-l-2 border-zinc-400 dark:border-zinc-800'>
			<span>Born on August 15, 1999</span>
			<span>nyxfor13days@gmail.com</span>
			<span>(+91) 98787-81378</span>
			<div className='flex items-center gap-2'>
				<span className='fa-solid fa-circle-check text-lime-600 dark:text-lime-500' />
				<span className='font-bold'>Available for Freelance</span>
			</div>
		</div>
	);
};

export default BasicInfo;

