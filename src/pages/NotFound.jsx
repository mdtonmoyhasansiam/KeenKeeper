import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you are looking for doesn't exist.</p>
      <Link to="/" className="bg-emerald-700 text-white px-8 py-4 rounded-2xl">Back to Home</Link>
    </div>
  );
}