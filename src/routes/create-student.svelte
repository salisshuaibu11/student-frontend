<script>
	import { Form, FormGroup, FormText, Input, Label, Button } from 'sveltestrap/src';
</script>

<div class="form-wrapper">
	<Form>
		<FormGroup>
			<Label for="name">Name</Label>
			<Input type="text" name="name" id="name" value="Enter your name" />
		</FormGroup>
	</Form>
</div>
