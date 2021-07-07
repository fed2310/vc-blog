import {useEffect, useState} from 'react'
import axios from 'axios'

function useLookupApi() {
    const [geoLocation, setGeoLocation] = useState({
        country: ""
    })

    useEffect(()=>{
        axios.get("https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1").then((response) => {
            let data = response.data
            setGeoLocation({country: data.country_name})
        }).catch((error) => {
            //console.log(error)
        });
    },[])

    return geoLocation
}

export default useLookupApi;
