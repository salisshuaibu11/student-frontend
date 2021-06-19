import { writable } from 'svelte/store';

const students = writable([]);

const customStore = {
	subscribe: students.subscribe,
	setStudents: (studentsArray) => {
		students.set(studentsArray);
	},
	createStudent: (studentObject) => {
		const newStudent = {
			...studentObject
		};

		students.update((student) => {
			return [newStudent, ...student];
		});
	}
};

export default customStore;
