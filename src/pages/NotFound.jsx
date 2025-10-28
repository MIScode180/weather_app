import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-muted-foreground mb-4">Page not found.</p>
      <Link to="/" className="text-blue-600 underline">
        Go back home
      </Link>
    </div>
  );
}
