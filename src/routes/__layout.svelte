<script>
	import { Nav, Navbar, Container, NavbarBrand, Row, Col } from 'sveltestrap/src';
	import 'bootstrap/dist/css/bootstrap.css';
</script>

<div class="app">
	<header class="app-header">
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavbarBrand>
					<a href="/" class="nav-link"> React MERN Stack App </a>
				</NavbarBrand>

				<Nav class="justify-content-end">
					<Nav>
						<a to="/create-student" class="nav-link"> Create Student </a>
					</Nav>

					<Nav>
						<a to="/edit-student" class="nav-link"> Edit Student </a>
					</Nav>

					<Nav>
						<a to="/" class="nav-link"> Student List </a>
					</Nav>
				</Nav>
			</Container>
		</Navbar>
	</header>

	<Container>
		<Row>
			<Col md={12}>
				<div class="wrapper">
					<slot />
				</div>
			</Col>
		</Row>
	</Container>
</div>
