<script context="module">
	import axios from 'axios';

	export async function load({ page }) {
		const id = page.params.id;
		const url = `http://localhost:4000/students/edit-student/${id}`;
		const response = await axios.get(url);
		const student = response.data;

		console.log(student);
		if (response.status === 200) {
			return {
				props: {
					loadedStudent: {
						...student,
						id: id
					}
				}
			};
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { Form, Button } from 'react-bootstrap';
	import axios from 'axios';

	export let loadedStudent = [];
</script>
