import { app } from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const database = getFirestore(app);

export const fetchSocials = async () => {
	const socials = await getDocs(collection(database, 'socials'));
	return socials.docs.map((social) => social.data());
};

export const fetchWork = async () => {
	const work = await getDocs(collection(database, 'work'));
	return work.docs.map((work) => work.data());
};

export const fetchEducation = async () => {
	const education = await getDocs(collection(database, 'education'));
	return education.docs.map((education) => education.data());
};
