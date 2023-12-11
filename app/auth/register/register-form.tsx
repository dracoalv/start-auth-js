import Link from "next/link";

export default function RegisterForm() {    
  return (
    <form className="w-96 p-10 border rounded bg-teal-50/20">
      <h1 className="mb-10 font-medium text-lg text-slate-600">Crie uma conta para continuar</h1>
      <div className="grid gap-1 mb-4">
        <label htmlFor="name" className="text-slate-600">Github Username</label>
        <input
          type="text"
          name="username"
          placeholder="Antonio Alves"
          className="max-w-xs h-9 px-2 text-sm placeholder:text-slate-300 border rounded"
        />
      </div>
      <div className="grid gap-1 mb-4">
        <label htmlFor="email" className="text-slate-600">E-mail</label>
        <input
          type="text"
          name="email"
          placeholder="seuemail@dvsk.com"
          className="max-w-xs h-9 px-2 text-sm placeholder:text-slate-300 border rounded"
        />
      </div>
      <div className="grid gap-1 mb-6">
        <label htmlFor="password" className="text-slate-600">Password</label>
        <input
          type="password"
          name="password"
          className="max-w-xs h-9 px-2 text-sm placeholder:text-slate-300 border rounded"
        />
      </div>
      <button 
        type="submit"
        className="px-4 py-2 mb-4  bg-slate-50 hover:bg-slate-100 border rounded"
      >
        Criar conta
      </button>
      <p className="w-full">
        Já tem uma conta? {' '} 
        <Link href="/auth/login" className="text-blue-500 hover:underline">Faça login</Link>
      </p>
    </form>
  )
}
