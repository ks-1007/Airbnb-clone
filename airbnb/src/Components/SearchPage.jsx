import React,{useEffect,useState} from 'react';
import './SearchPage.css';
import SearchResult from "./SearchResult";
import axios from 'axios';

function SearchPage() {


    const [data,setData] = useState([])

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:3001/data`)
        setData(data)
     }

     useEffect(() => {
         getData()
         
    },[])

    return (

        <div>
            {data.map((el) =>
               ( <div>
                    <SearchResult key={el.hotelId}  images={el.images} address={el.address} description={el.details} name={el.name} starRating={el.starRating} price={el.price} reviews={el.reviews} />
                </div>
            ))}
        </div>

        
        
    )
}

export default SearchPage
