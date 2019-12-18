import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogActions, Button, TextField, DialogTitle } from '@material-ui/core';

const FieldsModal = ({addNewNote, open = false, onClose}) => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    addNewNote({
      title,
      text
    })
  }

  return (<Dialog onClose={onClose} open={open}> 
    <DialogTitle>Заметка</DialogTitle>
    <DialogContent>
      <TextField fullWidth margin="normal" label="Название" onChange={handleChangeTitle} />
      <TextField fullWidth margin="normal" label="Текс" onChange={handleChangeText} />
    </DialogContent>
    <DialogActions>
      <Button variant="contained" color="primary" onClick={handleClick}>Сохранить</Button>
    </DialogActions>
  </Dialog>)
}

export default FieldsModal;
