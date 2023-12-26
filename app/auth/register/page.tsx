import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <main className="w-full max-w-screen-xl mx-auto p-4 xl:p-10">
      <div className="flex flex-col justify-center items-center">
        <RegisterForm />
      </div>
    </main>
  )
}