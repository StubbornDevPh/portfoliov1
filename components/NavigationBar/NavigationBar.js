import {
	Nav,
	Navbar,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import styles from "./styles.module.scss";

const Navigationbar = () => {
	return (
		<>
			<Navbar bg="light">
				<Navbar.Brand>
					<div className={styles.brandContainer}>
						<img
							alt=""
							src="/gabcodes.png"
							className={`d-inline-block align-top ${styles.brandImage}`}
						/>
						<p className={styles.brandText}>Gabcodes</p>
					</div>
				</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">About</Nav.Link>
						<Nav.Link href="#link">Projects</Nav.Link>
						<Nav.Link href="#link">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigationbar;
