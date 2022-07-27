import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
	return (
		<motion.div
			animate={{ opacity: [1, 0] }}
			transition={{ duration: 0.3, delay: 1.5 }}
			className='fixed top-0 left-0 z-50'>
			<div className='h-screen w-screen bg-zinc-200 dark:bg-zinc-900 flex justify-center items-center'>
				<div className='flex flex-col gap-1'>
					<span className='text-xs font-medium'>
						Entering the Metaverse...
					</span>
					<div className='h-[2px] w-64'>
						<motion.div
							animate={{ width: ['0%', '100%'] }}
							transition={{ duration: 1.25 }}
							className='h-full w-0 bg-rose-500 dark:bg-rose-600 rounded-full'
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Preloader;

