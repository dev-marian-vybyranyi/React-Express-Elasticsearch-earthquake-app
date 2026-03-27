import axios from "axios";
import { useState } from "react";
import NavBar from "./components/NavBar";
import FilterForm from "./components/FilterForm";
import SearchResults from "./components/SearchResults";
import "./App.css";

const App = () => {
  const [documents, setDocuments] = useState(null);

  const sendSearchRequest = (searchParams) => {
    const results = {
      method: "GET",
      url: "http://localhost:3001/results",
      params: searchParams,
    };
    axios
      .request(results)
      .then((response) => {
        console.log(response.data);
        setDocuments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="app">
      <NavBar />
      <p className="directions">
        {" "}
        Search for earthquakes using the following criteria:
      </p>
      <div className="main">
        <FilterForm sendSearchRequest={sendSearchRequest} />
        {documents && <SearchResults documents={documents} />}
      </div>
    </div>
  );
};

export default App;
