import { useRoutes } from "react-router-dom";


export default function NotFoundPage() {
  const router = useRoutes();

  return (
    <div className="container">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <button onClick={() => router.back()} className="back-button">Go Back</button>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
          background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
          color: #333;
          font-family: 'Poppins', sans-serif;
        }
        h1 {
          font-size: 6rem;
          margin: 0;
          color: #fff;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
        }
        p {
          font-size: 1.8rem;
          margin-top: 0.5rem;
          color: #fff;
        }
        .back-button {
          margin-top: 20px;
          padding: 12px 24px;
          font-size: 1.2rem;
          background-color: #ff6b6b;
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .back-button:hover {
          background-color: #ff4757;
          transform: scale(1.05);
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 4rem;
          }
          p {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
