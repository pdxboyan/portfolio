import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-black px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6 text-gray-400">Oops! Project not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}