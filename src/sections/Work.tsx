import React from 'react';
import Experience from '../components/Experience';
import { fetchWork } from '../services/firestore';

const Work = () => {
	const [work, setWork] = React.useState<any[]>([]);

	React.useEffect(() => {
		const fetchData = async () => {
			setWork(await fetchWork());
		};

		fetchData();
	}, []);

	return (
		<div className='flex flex-col gap-4'>
			<h3>Work</h3>

			{work.map(({ timestamp, title, subtitle, description }, index) => (
				<Experience
					key={index}
					timestamp={timestamp}
					title={title}
					subtitle={subtitle}
					description={description}
				/>
			))}
		</div>
	);
};

export default Work;

