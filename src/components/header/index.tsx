import { Images } from "@/assets"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="relative flex items-center justify-end border-b border-black px-4">
      <Link
        href="/home"
        className="absolute left-1/2 flex -translate-x-1/2 gap-2"
      >
        <Image width={20} height={20} src={Images.logo} alt="poke-logo" />
        PokéDrawDex!
      </Link>
      <Link href="/dex" className="px-1 py-2 uppercase underline">
        Dex
      </Link>
    </header>
  )
}
