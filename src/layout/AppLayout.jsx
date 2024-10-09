import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AppHeader from "../components/AppHeader";

export default function AppLayout() {
  return (
    <>
      <AppHeader />

      <Container>
        <Outlet />
      </Container>
    </>
  );
}
