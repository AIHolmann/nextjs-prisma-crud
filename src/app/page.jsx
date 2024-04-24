import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTask() {
  //como este es un componente del lado del servidor gracias a nextjs, y la base de datos/servidor estan integradas en la misma aplicacion, y se van a desplegar en el mismo lugar; se puede:
  // 1º llamar a prisma y acceder a la base de datos desde aqui
  return await prisma.task.findMany();
  // console.log(tasks);
  // 2º hacer una peticion HHTP a /api/tasks
  //const res = await fetch("http://localhost:3000/api/task", {
  //  cache: "no-store",
  //});
  //const data = await res.json();
  //return data;
}

//export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const tasks = await loadTask();
  console.log(tasks, "desde el page");
  return (
    <section className="container mx-auto p-10">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>
    </section>
  );
}
