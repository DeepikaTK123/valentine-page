import { useState } from "react";
import "./App.css";

function App() {
  const [price, setPrice] = useState("");
  const [result, setResult] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const calculateGST = async () => {
    const response = await fetch(`${API_URL}/calculate-gst`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div id="root">
      <h1>🧾 GST Calculator (18%)</h1>

      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateGST}>Calculate GST</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p>Original Price: ₹ {result.original_price}</p>
          <p>GST (18%): ₹ {result.gst_amount}</p>
          <h3>Final Price: ₹ {result.final_price}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
