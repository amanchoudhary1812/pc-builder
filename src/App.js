import React, { useState } from "react";

const components = {
  CPU: ["Intel i5", "Intel i7", "AMD Ryzen 5", "AMD Ryzen 7"],
  GPU: ["NVIDIA RTX 3060", "AMD RX 6600", "NVIDIA RTX 3070"],
  RAM: ["8GB DDR4", "16GB DDR4", "32GB DDR4"],
  Storage: ["256GB SSD", "512GB SSD", "1TB HDD"],
};

export default function PCPicker() {
  const [selectedParts, setSelectedParts] = useState({});

  const handleSelect = (category, value) => {
    setSelectedParts((prev) => ({ ...
      prev, [category]: value }));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Build Your PC</h2>
      {Object.keys(components).map((category) => (
        <div key={category} style={{ marginBottom: "10px" }}>
          <label>{category}:</label>
          <select onChange={(e) => handleSelect(category, e.target.value)} style={{ width: "100%", padding: "5px" }}>
            <option value="">Select {category}</option>
            {components[category].map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      ))}

      <div style={{ marginTop: "15px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
        <h3>Selected Components:</h3>
        <ul>
          {Object.entries(selectedParts).map(([key, value]) => (
            <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


