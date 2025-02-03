import { useRoutes } from "react-router-dom";


export default function NotFoundPage() {
  const router = useRoutes();

  return (
    <div className="container">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <button className="back-button">Go Back</button>
    </div>
  );
}
