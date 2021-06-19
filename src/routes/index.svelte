<script>
	import { onMount } from 'svelte';
	import studentsStore from '../student-store';
	import axios from 'axios';

	import { Table } from 'sveltestrap/src';
	import 'bootstrap/dist/css/bootstrap.css';
	import StudentTableRow from '../components/StudentTableRow.svelte';

	onMount(async () => {
		try {
			const response = await axios.get('http://localhost:4000/students/');
			const students = response.data;
			studentsStore.setStudents(students);
		} catch (error) {
			console.log(error);
		}
	});
</script>

<div class="table=wrapper">
	<Table striped bordered hover>
		<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Roll No</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#each $studentsStore as student}
				<StudentTableRow students={student} />
			{/each}
		</tbody>
	</Table>
</div>
