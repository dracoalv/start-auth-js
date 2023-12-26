import { SearchTodos } from "./search-todos";
import { TodosList } from "./todos-list";

export default function TodosPage() {
  return (
    <main className="w-full max-w-3xl mx-auto p-10 border rounded-md">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-medium text-gray-600 mb-10">
          Esta rota é <strong>Pública</strong>, assim como a rota inicial.
        </h1>
        <SearchTodos />
        <TodosList />
      </div>
  </main>
  )
}