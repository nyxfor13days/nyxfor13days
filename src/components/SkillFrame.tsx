import React from 'react';
import { motion } from 'framer-motion';

interface SkillFrameProps {
	skill: string;
	value: number;
}

const SkillFrame = ({ skill, value }: SkillFrameProps) => {
	return (
		<div className='flex flex-col tablet:flex-row gap-y-1 gap-x-4'>
			<span className='font-bold'>{skill}</span>

			<div className='w-full flex justify-between items-center gap-4'>
				<div className='w-full h-2 bg-zinc-400 dark:bg-zinc-800 rounded-full'>
					<motion.div
						initial={{ width: '0%' }}
						whileInView={{ width: `${value}%` }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className='h-full bg-rose-500 dark:bg-rose-600 rounded-full'
					/>
				</div>
				<span className='text-zinc-400'>{value}%</span>
			</div>
		</div>
	);
};

export default SkillFrame;

