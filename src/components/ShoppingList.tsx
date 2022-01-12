import {Button, Grid, TextField} from '@mui/material';
import React from 'react';
import {ListItem} from '../models';
import ShoppingListList from './ShoppingListList';
interface ShoppingListProps {
  activeUser: string;
}

export const ShoppingList = ({activeUser}: ShoppingListProps) => {
  const [list, setList] = React.useState<ListItem[]>([
    {name: 'maito', count: 2, id: '123123'},
    {name: 'leipä', count: 2, id: '12awdwa123'},
    {name: 'maito', count: 2, id: '12312da'},
  ]);

  const handleDelete = (id: string): void => {
    setList(list.filter(item => item.id !== id));
  };

  const addItem = (item: ListItem): void => {
    setList([...list, item]);
  };

  return (
    <div>
      <h2>{activeUser}</h2>
      <Grid container direction={'column'}>
        <Grid item>
          <TextField></TextField>
        </Grid>
        <Grid item>
          <TextField></TextField>
        </Grid>
        <Grid item>
          <Button onClick={() => console.log('add called')}>Add</Button>
        </Grid>
      </Grid>
      <ShoppingListList list={list} deleteItem={id => handleDelete(id)} />
    </div>
  );
};

export default ShoppingList;
