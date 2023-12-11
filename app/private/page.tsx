import { TodoForm } from "./create-todo";

export default async function PrivatePage() {
  return (
    <main className="w-full h-full max-w-screen-xl mx-auto p-4 xl:p-10">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-medium text-slate-800 mb-6">
          Olá <strong>_name_</strong>, seja bem vindo(a) a área privada.
        </h1>
        <TodoForm />
      </div>
    </main>
  )
}