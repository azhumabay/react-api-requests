import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { APP_PATH } from "../const/router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const backToUserListPage = () => {
    navigate(APP_PATH.HOME);
  };

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
