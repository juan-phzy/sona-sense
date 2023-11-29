// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <div className="text-white text-lg font-bold">
                  My Next.js App
                </div>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/">
                <div className="text-white">Home</div>
              </Link>
              <Link href="/">
                <div className="text-white">About</div>
              </Link>
              {/* Add more links as needed */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
