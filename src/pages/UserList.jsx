import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAxios } from "../use";
import { USER_API_ENDPOINT } from "../const/api";
import { APP_PATH } from "../const/router";

const UserList = () => {
  const { data: users, axiosData, loading, error } = useAxios();

  useEffect(() => {
    axiosData(USER_API_ENDPOINT);
  }, [axiosData]);

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1 className="mb-4">Users</h1>
      {loading ? (
        <div className="mt-3 ms-4">
          <Loader />
        </div>
      ) : (
        <>
          <ListGroup>
            {users.map(({ id, name }) => (
              <ListGroup.Item key={id}>
                <Link to={`${APP_PATH.USER_LIST}/${id}`}>{name}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </>
  );
};

export default UserList;
