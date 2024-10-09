import { useEffect } from "react";
import { useAxios } from "../use";
import Loader from "../components/Loader";

const PostList = () => {
  const { data: posts, axiosData, loading, error } = useAxios();

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
    </>
  );
};

export default PostList;
