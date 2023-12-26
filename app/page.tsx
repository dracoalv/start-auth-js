import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full  max-w-3xl mx-auto p-10 border rounded-md">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-medium text-gray-600 mb-6">Página pública</h1>
        <Link 
          href="/todos" 
          className="px-6 py-3 mt-4 font-medium bg-violet-50 hover:bg-violet-100 border rounded"
        >
          Ir para lista de todos
        </Link>
      </div>
    </main>
  )
}
