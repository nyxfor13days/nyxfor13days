import React from 'react';

interface LittleSectionsProps {
	title: string;
	list: string[];
}

const LittleSections = ({ title, list }: LittleSectionsProps) => {
	return (
		<div className='pl-4 flex flex-col gap-4 border-l-2 border-zinc-400 dark:border-zinc-800'>
			<h3>{title}</h3>

			<ul className='flex flex-col gap-1'>
				{list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default LittleSections;

