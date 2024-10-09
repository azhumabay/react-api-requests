import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAxios } from "../use";

const UserList = () => {
  const { data: users, axiosData, loading, error } = useAxios([]);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  if (loading) {
    return <Loader />;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1 className="mb-4">Users</h1>
      <ListGroup>
        {users.map(({ id, name }) => (
          <ListGroup.Item key={id}>
            <Link to={`/user/${id}`}>{name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default UserList;
