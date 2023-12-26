import { Logo } from "./logo";
import { Navlinks } from "./navlinks";
// import { UserSettings } from "./user-settings";

export async function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto my-6 px-6 py-8 border rounded-md bg-gray-50">
      <nav className="w-full max-w-screen-xl mx-auto flex items-center justify-between">
        <Logo />
        <Navlinks />
        {/* <UserSettings /> */}
      </nav>
    </header>
  )
}