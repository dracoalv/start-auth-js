import { SearchTodos } from "./search-todos";
import { TodosList } from "./todos-list";

export default function TodosPage() {
  return (
    <main className="w-full max-w-screen-2xl h-full mx-auto p-4 xl:p-10">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-medium text-slate-800 mb-10">
          Esta rota é <strong>Pública</strong>, assim como a rota inicial.
        </h1>
        <SearchTodos />
        <TodosList />
      </div>
  </main>
  )
}