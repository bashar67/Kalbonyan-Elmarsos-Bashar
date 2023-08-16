import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const entredName = nameInputRef.current.value;
    const entredUserAge = ageInputRef.current.value;

    if (entredName.trim().length === 0 || entredUserAge.trim().length === 0) {
      setError({
        title: "invalid inputs",
        message: "please enter a valid values (not empty values)",
      });
      return;
    }
    if (+entredUserAge < 1) {
      setError({
        title: "invalid age",
        message: "enter valid age must be > 0",
      });
      return;
    }

    props.onAddUser(entredName, entredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
