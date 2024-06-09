import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ListItem } from '../types';

interface DraggableListItemProps {
  item: ListItem;
  index: number;
  setItems: React.Dispatch<React.SetStateAction<ListItem[]>>;
  items: ListItem[];
}

const DraggableListItem: React.FC<DraggableListItemProps> = ({ item, index, setItems, items }) => {
  const ref = useRef<HTMLLIElement>(null);

  const [, drag] = useDrag({
    type: 'list-item',
    item: { type: 'list-item', id: item.id, index },
  });

  const [, drop] = useDrop({
    accept: 'list-item',
    hover: (draggedItem: any) => {
      if (draggedItem.index === index) return;
      draggedItem.hoverIndex = index;
    },
  });

  drag(drop(ref));

  return (
    <li
      ref={ref}
      className="p-4 mb-2 bg-white rounded-lg shadow flex justify-between items-center"
    >
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 mr-4 rounded-full" />
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </div>
      <div className="cursor-pointer select-none p-2 bg-gray-300 rounded">Move</div>
    </li>
  );
};

export default DraggableListItem;
