"use client";
import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const route = useRouter();
  return (
    <div
      onClick={() => {
        route.push("/tasks/edit/" + task.id);
      }}
      className="bg-slate-800 p-3 hover:bg-slate-700 hover:cursor-pointer"
    >
      <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
export default TaskCard;
