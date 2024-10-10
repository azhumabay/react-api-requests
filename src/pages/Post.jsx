import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAxios } from "../use";
import { useEffect } from "react";
import Loader from "../components/Loader";

const Post = () => {
  const { data: post, axiosData, loading, error } = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axiosData(location.pathname);
  }, [axiosData]);

  if (error) <div>Error: {error}</div>;

  return (
    <>
      <Button variant="outline-primary" onClick={goBack} className="mb-4">
        Вернуться назад
      </Button>
      {loading ? (
        <div className="mt-3">
          <Loader />
        </div>
      ) : (
        <>
          <h1 className="mb-4">{post.title}</h1>
          <p className="fs-5">{post.body}</p>
        </>
      )}
    </>
  );
};

export default Post;
