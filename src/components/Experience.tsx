import React from 'react';

interface ExperienceProps {
	timestamp: string;
	title: string;
	subtitle: string;
	description: string[];
}

const Experience = ({
	timestamp,
	title,
	subtitle,
	description,
}: ExperienceProps) => {
	return (
		<div className='pl-4 flex flex-col gap-1 border-l-2 border-zinc-400 dark:border-zinc-800'>
			<span className='text-xs text-zinc-400'>{timestamp}</span>
			<span className='text-lg font-bold'>{title}</span>
			<span className='text-sm font-medium'>{subtitle}</span>
			<ul className='list-disc list-outside ml-4'>
				{description.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default Experience;

