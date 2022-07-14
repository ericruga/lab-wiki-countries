import CountriesList from './CountriesList';
import {useParams} from "react-router-dom"

function CountryDetails({countries}) {
    const [allCountries, setAllCountries] = useState([countries]);
   
    
    useEffect(() => {
 
    },[] )

return (
 <div class="col-7">
 <h1>{countries.name.common}</h1>
 <table class="table">
   <thead></thead>
   <tbody>
     <tr>
       <td style="width: 30%">Capital</td>
       <td>{countries.capital}</td>
     </tr>
     <tr>
       <td>Area</td>
       <td>
         {countries.area} km
         <sup>2</sup>
       </td>
     </tr>
     <tr>
       <td>Borders</td>
       <td>
         <ul>
           <li><a href="/AND">Andorra</a></li>
           <li><a href="/BEL">Belgium</a></li>
           <li><a href="/DEU">Germany</a></li>
           <li><a href="/ITA">Italy</a></li>
           <li><a href="/LUX">Luxembourg</a></li>
           <li><a href="/MCO">Monaco</a></li>
           <li><a href="/ESP">Spain</a></li>
           <li><a href="/CHE">Switzerland</a></li>
         </ul>
       </td>
     </tr>
   </tbody>
 </table>
</div>

);
}
export default CountryDetails;
