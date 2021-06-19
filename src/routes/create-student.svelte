<script>
	import { Form, FormGroup, Input, Label, Button } from 'sveltestrap/src';
	import students from '../student-store';
	import axios from 'axios';

	let name = '';
	let email = '';
	let rollno = '';

	const handleSubmit = async (e) => {
		e.preventDefault();
		const studentData = {
			name: name,
			email: email,
			rollno: rollno
		};

		try {
			const response = await axios.post(
				'http://localhost:4000/students/create-student',
				studentData
			);
			const student = response.data;
			students.createStudent(student);
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="form-wrapper">
	<Form on:submit={handleSubmit}>
		<FormGroup id="name">
			<Label for="name">Name</Label>
			<Input bind:value={name} type="text" name="name" id="name" placeholder="Enter your name" />
		</FormGroup>

		<FormGroup id="email">
			<Label for="email">Email</Label>
			<Input bind:value={email} type="email" name="email" placeholder="Enter your email" />
		</FormGroup>

		<FormGroup id="name">
			<Label for="rollno">Roll No</Label>
			<Input bind:value={rollno} type="text" name="rollno" placeholder="Enter your roll no" />
		</FormGroup>

		<Button size="lg" block="block" type="submit">Create Student</Button>
	</Form>
</div>
