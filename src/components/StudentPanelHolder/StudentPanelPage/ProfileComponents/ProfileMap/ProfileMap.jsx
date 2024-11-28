import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import ProfileMapLocationMarker from './ProfileMapLocationMarker/ProfileMapLocationMarker';
import { useMapEvent } from 'react-leaflet'
import { icon} from "leaflet";

const ProfileMap = ({markerLocationState,setMarkerLocationState}) => {

const userInfo = useSelector((reducer) => reducer.user.userInformations);

const [markers, setMarkers] = useState([])
//  const center = [
//    userInfo.latitude === null
//       ? 36.56624251947416
//       : parseFloat(userInfo.latitude),
//    userInfo.longitude === null
//      ? 53.058799328447755
//      : parseFloat(userInfo.longitude),
//  ];

//  const map = useMapEvent({
//   click(e){
//     let lat = parseFloat(e.latlng.lat);
//     let lng = parseFloat(e.latlng.lng);
    
//     setMarkerLocationState([lat, lng]);
//   }
// })
// const customIcon = new icon({

//   iconSize: [38, 38],
// });


const AddMarkerToClick = () => {
  const map = useMapEvent({
    click(e){
      const {lat , lng} = e.latlng;
      setMarkers([...markers , {id: Date.now(), lat,lng}]);
    }
  })
  return null
}


  return (
    <div className="border-[3px] border-solid border-bluePrimary p-2 rounded-[20px]">
      <MapContainer
        center={[51.505,-0.09]}
        zoom={13}
        style={{
          height: "200px",
          borderRadius: "15px",
          boxShadow: "2px 4px 6px -4px rgb(0 0 0 / 0.3)",
        }}
      >
         
         <AddMarkerToClick />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            {/* <Marker position={markerLocationState} icon={customIcon}>
               <Popup style={{ border: "2px solid blue" }}>
                 {userInfo.homeAdderess ? `${userInfo.homeAdderess}` : "آدرس خانه"}
               </Popup>
             </Marker> */}
               {/* <ProfileMapLocationMarker
                setMarkerLocationState={setMarkerLocationState}
            markerLocationState={markerLocationState}
        />  */}
         {markers.map((marker) =>(
          <Marker key={marker.id} position={[marker.lat , marker.lng]}>  </Marker>
         ))}

      </MapContainer>
    </div>
  )
}

export default ProfileMap




