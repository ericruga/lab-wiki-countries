import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import countriesData from "../countries.json";

function CountriesList() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        setCountries(countriesData)
        console.log(countries)
    }, [])
    return (

    <div className="container">
        <div className="row">
            <div className="col-5">
                <div className="list-group">
                    {countries.map((e) => {
                        console.log(e)
                        return(
                         <Link to={e.alpha3Code}>   
                        <p>{e.name.official}</p>
                        </Link> 
                    )}

                    )}

                </div>
            </div>
        </div>
    </div>
    
    )
}

    
  export default CountriesList;