import {IconButton, ListItem, ListItemText} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
interface Props {
  name: string;
  count: number;
  id: string;
  deleteItem: (id: string) => void;
}

export const ShoppingListItem: React.FC<Props> = ({
  name,
  count,
  id,
  deleteItem,
}) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteItem(id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={name} secondary={count} />
    </ListItem>
  );
};
