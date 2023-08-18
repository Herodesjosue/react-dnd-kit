import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Users = ({ users }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: users.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      className="text-gray-900 
    p-4
    rounded-md shadow-md bg-white my-4"
      style={style}
    >
      <h1>{users.name}</h1>
    </div>
  );
};

export default Users;
