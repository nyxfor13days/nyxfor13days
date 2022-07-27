import React from 'react';
import Experience from '../components/Experience';
import { fetchEducation } from '../services/firestore';

const Education = () => {
	const [education, setEductaion] = React.useState<any[]>([]);

	React.useEffect(() => {
		const fetchData = async () => {
			setEductaion(await fetchEducation());
		};

		fetchData();
	}, []);

	return (
		<div className='flex flex-col gap-4'>
			<h3>Education</h3>

			<div className='flex flex-col-reverse gap-4'>
				{education.map(
					({ timestamp, title, subtitle, description }, index) => (
						<Experience
							key={index}
							timestamp={timestamp}
							title={title}
							subtitle={subtitle}
							description={description}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Education;

