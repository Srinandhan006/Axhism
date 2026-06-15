import { useEffect, useState } from "react";
import { getHealth } from "./api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getHealth()
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("Backend not reachable");
      });
  }, []);

  return (
    <div
      style={{
        padding: "50px",
        fontSize: "24px"
      }}
    >
      <h1>DevOps Demo</h1>

      <p>{message}</p>
    </div>
  );
}

export default App;