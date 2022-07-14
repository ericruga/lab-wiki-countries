import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom"; 
import countriesData from "./countries.json";

function App() {

  return (
<div className="App">
  <Navbar />
  <CountriesList />
  <Route path="/:id" element={ <CountryDetails countries={countriesData} /> } />
</div>
  )
}
export default App;
