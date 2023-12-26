import Link from "next/link";

export function Logo () {
  return (
    <Link 
      href="/" 
      className="text-xl font-semibold text-gray-600 hover:text-violet-500"
    >
      Auth JS Beta
      </Link>
  )
}