import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import useStore from "../../store";

// Most of the code from MUI doc: https://v4.mui.com/components/lists/#checkbox
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TasksList() {
  const classes = useStyles();
  const { tasks, updateTask, deleteTask } = useStore();

  return (
    <List className={classes.root}>
      {tasks.map(({ id, title, checked }) => {
        return (
          <ListItem key={id} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": id }}
                onClick={() => updateTask({ id, checked: !checked })}
              />
            </ListItemIcon>
            <ListItemText id={id} primary={title} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTask(id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
