import Link from "next/link";

export default function Home() {
  return(
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <Link href="/HomePage">Home Page</Link>
    </main>
  )
}