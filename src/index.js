import ReactDOM from "react-dom";
import "mvp.css";

import App from "./App";

// Async IIFE to pre-fetch the data and render App.
// Don't worry about the implementation details for now.
// Pre-fetching the data keeps our components simple.
// We'll explore more integrate data loading later.
(async function () {
  // Fetch API data on world countries.
  const url = "https://data.winnipeg.ca/resource/hfwk-jp4h.json";
  const apiResponse = await fetch(url);

  // Parse response JSON into an array.
  const parks = await apiResponse.json();

  // Render the App component to the div#root in markup.
  const root = document.getElementById("root");
  ReactDOM.render(<App parks={parks} />, root);
})();
