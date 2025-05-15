import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

function App() {
  const [count, setCount] = useState(0);
  const [health, setHealth] = useState<HealthResponse | null>(null);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/health`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: HealthResponse = await response.json();
        setHealth(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de la santé de l'API:",
          error
        );
      }
    };

    fetchHealth();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Logo Vite" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="Logo React" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Le compteur est à {count}
        </button>
      </div>
      <p className="read-the-docs">
        Cliquez sur les logos Vite et React pour en savoir plus
      </p>
      {health ? (
        <div className="health-check">
          <h2>Statut de l'API</h2>
          <p>Status : {health.status}</p>
          <p>Message : {health.message}</p>
          <p>Horodatage : {new Date(health.timestamp).toLocaleString()}</p>
        </div>
      ) : (
        <p>Chargement du statut de l'API...</p>
      )}
    </>
  );
}

export default App;
