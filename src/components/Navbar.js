import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between py-4 px-6 shadow-md bg-white sticky top-0 z-10">
      <div className="flex items-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-600 hover:text-gray-900 cursor-pointer">Home</Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900 cursor-pointer">About</Link>
        {/* <Link href="/services" className="text-gray-600 hover:text-gray-900 cursor-pointer">Services</Link> */}
        <Link href="/contact" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</Link>
      </div>
      {/* <div className="flex items-center">
        <Link href="/signin">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
            Sign In
          </button>
        </Link>
      </div> */}
    </nav>
  );
}