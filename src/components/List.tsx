import React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { ListItem } from '../types';

interface DraggableListProps {
  items: ListItem[];
  setItems: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const DraggableList: React.FC<DraggableListProps> = ({ items, setItems }) => {
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="draggable-list">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className="p-4 bg-gray-100 rounded-lg">
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="p-4 mb-2 bg-white rounded-lg shadow flex justify-between items-center"
                    style={{ ...provided.draggableProps.style }} // Ensure styles are applied
                  >
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 mr-4 rounded-lg" />
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    {/* <div {...provided.dragHandleProps} className="cursor-pointer select-none p-2 bg-gray-300 rounded">
                      Move
                    </div> */}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
