import { icon, marker } from "leaflet";
import React , {useState , useEffect} from 'react'
import { Marker, Popup, useMapEvent } from 'react-leaflet'


const ProfileMapLocationMarker = () => {

const [position, setPosition] = useState(null)
  //  useMapEvent({
  //    click(event){
  //      console.log('clickevent: ' , event)
  //       const latlng = event.latlng;
  //       if(typeof latlng.lat === 'number' && typeof latlng.lng === 'number'){

  //         console.log('lating' , lat , lng)
  //         setMarker((prevMarker) => [...prevMarker , [ latlng.lat  , latlng.lng ]]);
  //       }else {
  //        console.error('invalid object' , latlng);
  //       }

  //    }
  //  })
useEffect(() => {
   if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude , longitude } = position.coords;
        setPosition([latitude, longitude])
      },
      (error) => {
        console.error('error getting position', error)
        console.log('unable')
      }
    )
   }else {
    console.log('no location')
   }
}, [])

  return (
    <Marker position={position ? position : [36.5659, 53.0586]}  >
      <Popup style={{ border: "2px solid blue" }}>
    
       <p>  saat squere </p>
      </Popup>
    </Marker>

    
  )
}

export default ProfileMapLocationMarker

