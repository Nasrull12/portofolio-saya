// app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-red-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="#about" className="text-white hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link href="#projects" className="text-white hover:text-gray-400">Projects</Link>
        </li>
        <li>
          <Link href="#contact" className="text-white hover:text-gray-400">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
