import { Logo } from "./logo";
import { Navlinks } from "./navlinks";
import { UserSettings } from "./user-settings";

export async function Header() {
  return (
    <header className="fixed w-full h-20 flex items-center p-4 text-slate-800 border-b">
      <nav className="w-full max-w-screen-xl mx-auto flex items-center justify-between">
        <Logo />
        <Navlinks />
        {/* <UserSettings /> */}
      </nav>
    </header>
  )
}