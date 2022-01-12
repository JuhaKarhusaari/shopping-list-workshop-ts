import {List} from '@mui/material';
import React from 'react';
import {ListItem} from '../models';
import {ShoppingListItem} from './ShoppingListItem';

interface ShoppingListListProps {
  list: ListItem[];
  deleteItem: (id: string) => void;
}

export const ShoppingListList: React.FC<ShoppingListListProps> = ({
  list,
  deleteItem,
}) => {
  return (
    <div>
      <List dense={true}>
        {list.map(item => (
          <ShoppingListItem
            key={item.id}
            id={item.id}
            name={item.name}
            count={item.count}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </div>
  );
};

export default ShoppingListList;
