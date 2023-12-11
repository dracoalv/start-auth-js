import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full max-w-screen-xl mx-auto p-4 xl:p-10">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-medium text-slate-800 mb-6">Página pública</h1>
        <Link 
          href="/todos" 
          className="px-4 py-2 mt-4 bg-gray-100 hover:bg-gray-50 border rounded"
        >
          Ir para lista de todos
        </Link>
      </div>
    </main>
  )
}
