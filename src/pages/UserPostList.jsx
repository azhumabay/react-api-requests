import { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAxios } from "../use";
import { APP_PATH } from "../const/router";
import Loader from "../components/Loader";

const UserPostList = () => {
  const { data: posts, axiosData, loading, error } = useAxios();
  const navigate = useNavigate();
  const { userId } = useParams();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axiosData(`${APP_PATH.POST_LIST}`);
  }, [axiosData]);

  const userPosts =
    posts?.filter((post) => post.userId === Number(userId)) || [];

  if (error) <div>Error: {error}</div>;

  return (
    <>
      <Button onClick={goBack} variant="outline-primary" className="mb-4">
        Вернуться назад
      </Button>
      {loading ? (
        <div className="mt-3">
          <Loader />
        </div>
      ) : (
        <>
          <h1 className="mb-4">User Posts</h1>
          <ListGroup>
            {userPosts.map(({ id, title }) => (
              <ListGroup.Item key={id}>
                <Link to={`${APP_PATH.POST_LIST}/${id}`}>{title}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </>
  );
};

export default UserPostList;
