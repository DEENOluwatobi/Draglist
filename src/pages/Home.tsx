"use client"
// import React, { useState } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import DraggableList from '../components/DraggableList';
// import { ListItem } from '../types';

import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import DraggableList from '../components/DraggableList';
import { ListItem } from '../types';
import isTouchDevice from '../utils/isTouchDevice';

const initialItems: ListItem[] = [
  {
    id: '1',
    image: '/pic.svg',
    name: 'Scotland Island',
    description: 'Sydney, Australia'
  },
  {
    id: '2',
    image: '/pic2.svg',
    name: 'The Charles Grand Brasserie & Bar',
    description: 'Lorem ipsum, Dolor'
  },
  {
    id: '3',
    image: '/pic3.svg',
    name: 'Bridge Climb',
    description: 'Dolor, Sit amet'
  },
  {
    id: '4',
    image: '/pic4.svg',
    name: 'Clam Bar',
    description: 'Etcetera veni, Vidi vici'
  },
  {
    id: '5',
    image: '/pic5.svg',
    name: 'Vivid Festival',
    description: 'Sydney, Australia'
  },
];

const ListHome = () => {
  const [items, setItems] = useState(initialItems);
  const [backend, setBackend] = useState<any>(null);

  useEffect(() => {
    if (isTouchDevice()) {
      setBackend(() => TouchBackend);
    } else {
      setBackend(() => HTML5Backend);
    }
  }, []);

  if (!backend) {
    return null; // Or a loading spinner
  }

  return (
    <>
      {/* <DndProvider backend={HTML5Backend}>
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <div className="w-full max-w-md p-4">
            <DraggableList items={items} setItems={setItems} />
          </div>
        </div>
      </DndProvider> */}

    <DndProvider backend={backend}>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="w-full max-w-md p-4">
          <h1 className="mb-4 text-2xl font-bold text-center">Draggable List</h1>
          <DraggableList items={items} setItems={setItems} />
        </div>
      </div>
    </DndProvider>
    </>
  );
};

export default ListHome;
