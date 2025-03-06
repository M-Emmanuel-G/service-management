import Link from "next/link";

export default function Home() {
  return(
    <main className="w-screen h-screen text-white flex flex-col items-center justify-center">
      <Link className="text-white" href="/HomePage">Home Page</Link>
    </main>
  )
}