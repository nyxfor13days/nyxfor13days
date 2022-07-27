import React from 'react';
import { IconPrimaryButton } from '../components/Button';
import { fetchSocials } from '../services/firestore';

const Socials = () => {
	const [socials, setSocials] = React.useState<any[]>([]);

	React.useEffect(() => {
		const fetchData = async () => {
			setSocials(await fetchSocials());
		};

		fetchData();
	}, []);

	return (
		<div className='flex gap-4'>
			{socials.map(({ icon, to }, index) => (
				<IconPrimaryButton
					key={index}
					onClick={() => window.open(to, '_blank')}
					icon={`fa-brands ${icon}`}
				/>
			))}
		</div>
	);
};

export default Socials;

