import { useCallback } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const backToUserListPage = useCallback(() => {
    navigate("/user-list");
  }, []);

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 style={{ fontSize: "64px", marginBottom: "50px" }}>
        404 Page not found
      </h1>
      <Button className="p-3 fs-5" onClick={backToUserListPage}>
        вернуться на главную
      </Button>
    </Container>
  );
};

export default ErrorPage;
