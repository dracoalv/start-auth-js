import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="w-full max-w-3xl mx-auto p-10">
      <div className="flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </main>
  )
}