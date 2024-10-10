import { useEffect } from "react";
import { useAxios } from "../use";
import Loader from "../components/Loader";
import { POST_API_ENDPOINT } from "../const/api";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { APP_PATH } from "../const/router";

const PostList = () => {
  const { data: posts, axiosData, loading, error } = useAxios();

  useEffect(() => {
    axiosData(POST_API_ENDPOINT);
  }, [axiosData]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(posts);

  return (
    <>
      <h1 className="mb-4">Posts</h1>
      {loading ? (
        <div className="mt-3 ms-4">
          <Loader />
        </div>
      ) : (
        <>
          <ListGroup className="mb-5">
            {posts.map(({ id, title }) => (
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

export default PostList;
