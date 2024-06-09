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
    item: { type: 'list-item', id: item.id },
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
      className="p-2 mb-1 bg-white rounded-sm flex justify-between items-center"
    >
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 mr-4 rounded-md" />
        <div>
          <h3 className="font-semibold text-[.9em]">{item.name}</h3>
          <div className='flex items-center gap-2'>
            <img src='/location.svg' alt='location-svg'/>
            <p className="text-sm text-gray-500 text-[.8em]">{item.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DraggableListItem;
