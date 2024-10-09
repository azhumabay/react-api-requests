import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeProvider";
import { Link } from "react-router-dom";

export default function AppHeader() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Navbar className="bg-body-tertiary mb-5">
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="fs-4 me-3" as={Link} to="/user-list">
              Users
            </Nav.Link>
            <Nav.Link className="fs-4" as={Link} to="/post-list">
              Posts
            </Nav.Link>
          </Nav>
          <Button
            className="ms-auto"
            variant={`outline-${theme === "dark" ? "light" : "dark"}`}
            onClick={toggleTheme}
          >
            Toggle theme
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
