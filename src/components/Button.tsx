import React from 'react';

interface IconPrimaryButtonProps {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	icon: string;
}

export const IconPrimaryButton = ({
	onClick,
	icon,
}: IconPrimaryButtonProps) => {
	return (
		<button
			onClick={onClick}
			className='w-10 h-10 flex justify-center items-center bg-zinc-900 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-900 border-2 border-transparent hover:border-rose-500 dark:hover:border-rose-600 rounded-full transition-all'>
			<span className={icon} />
		</button>
	);
};

