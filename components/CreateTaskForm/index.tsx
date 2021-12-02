import React from "react";
import { Form, Field } from "react-final-form";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useStore from "../../store";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const CreateTaskForm = () => {
  const { createTask } = useStore();
  const classes = useStyles();

  return (
    <Form
      onSubmit={createTask}
      render={({ handleSubmit }) => (
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Field
            name="title"
            validate={(value) =>
              typeof value === "string" && value.length >= 1
                ? undefined
                : "Title should be at least one character stringF"
            }
            render={({ input, meta }) => (
              <TextField
                variant="outlined"
                label="Title"
                {...input}
                error={meta.touched && meta.error}
              />
            )}
          />
          <Button variant="contained" color="primary" type="submit">
            Create task
          </Button>
        </form>
      )}
    />
  );
};

export default CreateTaskForm;
