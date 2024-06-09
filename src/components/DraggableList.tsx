import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import DraggableListItem from './DraggableListItem';
import { ListItem } from '../types';

interface DraggableListProps {
  items: ListItem[];
  setItems: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const DraggableList: React.FC<DraggableListProps> = ({ items, setItems }) => {
  const dropRef = useRef<HTMLUListElement>(null);

  const [, drop] = useDrop({
    accept: 'list-item',
    hover: (draggedItem: any) => {
      const draggedIndex = draggedItem.index;
      const hoverIndex = draggedItem.hoverIndex;
      if (draggedIndex === hoverIndex) return;

      const updatedItems = [...items];
      const [movedItem] = updatedItems.splice(draggedIndex, 1);
      updatedItems.splice(hoverIndex, 0, movedItem);

      setItems(updatedItems);
      draggedItem.index = hoverIndex;
    },
  });

  drop(dropRef);

  return (
    <ul ref={dropRef} className="p-2 bg-gray-100 rounded-lg">
      {items.map((item, index) => (
        <DraggableListItem key={item.id} item={item} index={index} setItems={setItems} items={items} />
      ))}
    </ul>
  );
};

export default DraggableList;
