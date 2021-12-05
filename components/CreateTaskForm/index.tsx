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
      render={({ handleSubmit, form: { reset } }) => (
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            handleSubmit(e);
            reset();
          }}
        >
          <Field
            name="title"
            validate={(value) =>
              typeof value === "string" && value.length >= 1
                ? undefined
                : "Title should be at least one character string"
            }
            render={({ input, meta }) => (
              <TextField
                variant="filled"
                helperText={meta.touched && meta.error ? meta.error : null}
                label="Title"
                {...input}
                error={!meta.pristine && meta.error}
              />
            )}
          />
          <div style={{ margin: "16px" }}>
            <Button variant="contained" color="primary" type="submit">
              Create task
            </Button>
          </div>
        </form>
      )}
    />
  );
};

export default CreateTaskForm;
