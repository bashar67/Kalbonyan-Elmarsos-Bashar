import React, { useState } from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [entredUsername, setEntredUsername] = useState("");
  const [entredAge, setEntredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (entredUsername.trim().length === 0 || entredAge.trim().length === 0) {
      setError({
        title: "invalid inputs",
        message: "please enter a valid values (not empty values)",
      });
      return;
    }
    if (+entredAge < 1) {
      setError({
        title: "invalid age",
        message: "enter valid age must be > 0",
      });
      return;
    }

    props.onAddUser(entredUsername, entredAge);
    setEntredAge("");
    setEntredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEntredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEntredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
    
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={entredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={entredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
