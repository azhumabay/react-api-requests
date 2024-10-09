import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeProvider";
import { NavLink } from "react-router-dom";
import { APP_PATH } from "../const/router";

export default function AppHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar className="bg-body-tertiary mb-5">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              className="fs-4 me-3"
              as={NavLink}
              to={APP_PATH.USER_LIST}
            >
              Users
            </Nav.Link>
            <Nav.Link className="fs-4" as={NavLink} to={APP_PATH.POST_LIST}>
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
