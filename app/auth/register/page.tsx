import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <main className="w-full h-full max-w-screen-xl mx-auto p-4 xl:p-10">
      <div className="h-full flex flex-col justify-center items-center">
        <RegisterForm />
      </div>
    </main>
  )
}