import Link from "next/link";

export function LoginForm() {
  return (
    <form className="w-fit p-10 border rounded bg-slate-50/80">
      <h1 className="mb-10 font-medium text-lg text-slate-600">Faça login para continuar</h1>
      <div className="grid gap-1 mb-4">
        <label htmlFor="email" className="text-slate-600">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="seuemail@dvsk.com"
          className="max-w-xs h-9 px-2 text-sm placeholder:text-slate-300 border rounded"
        />
      </div>
      <div className="grid gap-1 mb-6">
        <label htmlFor="email" className="text-slate-600">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="max-w-xs h-9 px-2 text-sm placeholder:text-slate-300 border rounded"
        />
      </div>
      <button 
        type="submit"
        className="px-4 py-2 mb-4  bg-slate-50 hover:bg-slate-100 border rounded"
      >
        Acessar
      </button>

      <p className="w-full">
        Ainda não tem uma conta? {' '} 
        <Link href="/auth/register" className="text-blue-500 hover:underline">Crie gratuitamente.</Link>
      </p>
    </form>
  )
}