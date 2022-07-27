import React from 'react';
import SkillFrame from '../components/SkillFrame';

const Skills = () => {
	return (
		<div className='flex flex-col gap-4'>
			<h3>Skills</h3>

			<SkillFrame skill='HTML' value={95} />
			<SkillFrame skill='CSS' value={90} />
			<SkillFrame skill='Javascript' value={85} />
			<SkillFrame skill='Typescript' value={70} />
			<SkillFrame skill='Python' value={80} />
		</div>
	);
};

export default Skills;

