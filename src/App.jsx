import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import Users from "./Users";

const App = () => {
  const [data, setData] = useState([
    {
      name: "herodes",
      id: "1",
    },
    {
      name: "eduardo",
      id: "2",
    },
    {
      name: "tomodachi",
      id: "3"
    },
    {
      name: "alfonzo",
      id: "4"
    },
    {
      name: "fazt",
      id: "5"
    },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setData((data) => {
      const oldIndex = data.findIndex((d) => d.id == active.id);
      const newIndex = data.findIndex((d) => d.id == over.id);
      return arrayMove(data, oldIndex, newIndex);
    });
  };

  return (
    <div className="container">
      <div className="w-4/6 mx-auto">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div>
            <h1 className="text-white text-2xl font-bold">Users List</h1>
          </div>
          <SortableContext items={data} strategy={verticalListSortingStrategy}>
            {/* componentes */}
            {data.map((u) => {
              return (
                <>
                  <Users key={u.id} users={u} />
                </>
              );
            })}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default App;
