import React, {useState} from 'react';
import FieldsModal from './component/FieldsModal';
import { List, ListItem, Typography, Toolbar, Button, Card, Paper, CardHeader, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    width: 900,
    margin: '100px auto'
  },
  titleList: {
    paddingRight: 16
  }
});

function App() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [notes, setNote] = useState([{
    title: 'Тест1',
    text: 'React components for faster and easier web development. Build your own design system, or start with Material Design.'
  }, {
    title: 'Тест2',
    text: 'Install Material-UI s source files via npm. We take care of injecting the CSS needed.'
  }, {
    title: 'Тест3',
    text: 'Material-UI components work without any additional setup, and dont pollute the global scope.'
  }]);

  const addNewNote = (note) => {
    setNote([...notes, note])
  };

  const handleOpenModal = () => {
    setOpen(!open)
  }

  return (
    <Card className={classes.root}>
      <CardHeader title="Заметки" />
      <CardContent>
      <Toolbar><Button color="secondary" variant="contained" onClick={handleOpenModal}>Добавить</Button></Toolbar>
      <List>
      {notes.map(({title, text}, index) => (<ListItem key={index}>
      <Typography className={classes.titleList} variant="h6">{title}</Typography>
      <Typography>{text}</Typography>
      </ListItem>))}
      </List>
      </CardContent>
      <FieldsModal open={open} addNewNote={addNewNote} onClose={handleOpenModal} />
    </Card>
  );
}

export default App;
