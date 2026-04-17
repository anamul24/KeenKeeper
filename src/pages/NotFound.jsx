import { Link } from 'react-router-dom';

export default function NotFound(){
    return (
        <div className="min-h-60vh flex items-center justify-center text-center px-6">
            <div>
                <h1 className="text-8xl font-bold text-gray-200">404</h1>
                <h2 className="text-3xl font-semibold mt-4">Page not found</h2>
                <p className="text-gray-600 mt-3">The page you're looking for doesn't exist</p>
                <Link to="/" className="inline-block mt-8 bg-emerald-600 text-white px-8 py-3 rounded-2xl">Go back home</Link>
            </div>
        </div>
    );
}