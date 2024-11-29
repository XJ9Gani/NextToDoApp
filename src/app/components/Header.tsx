import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="border bg-gray-900 h-[10vh]">
        <nav className="my-5  flex justify-center gap-10">
          <Link href="/alltodos" className="text-white text-2xl">
            All Products
          </Link>
          <Link href="/donetodos" className="text-white text-2xl">
            Done Products
          </Link>
        </nav>
      </header>
    </>
  );
}
