<script>
	import { Button } from 'sveltestrap/src';
	export let students;
</script>

{#if !students}
	<tr>
		<p>Loading</p>
	</tr>
{:else}
	<tr>
		<td>{students.name}</td>
		<td>{students.email}</td>
		<td>{students.rollno}</td>
		<td>
			<a class="edit-link" href={`/edit-student/${students._id}`}> Edit </a>
			<Button size="sm">Delete</Button>
		</td>
	</tr>
{/if}
