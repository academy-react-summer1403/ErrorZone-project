import React , {useState , useEffect} from 'react'
import { Formik , Form } from 'formik';
import { MapContainer , TileLayer , useMapEvents , Marker , Popup  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import ProfileMapLocationMarker from '../ProfileMap/ProfileMapLocationMarker/ProfileMapLocationMarker';

const ProfileAddress = () => {

const [marker, setMarker] = useState([])

const AddMarker = (position) => {
  setMarker((prevmarker) => [...prevmarker, position] )
}


   return (
    <Formik > 
      <Form>
     <div className='w-[100%] h-[100%]  pt-[90px] pr-[24px] pl-[24px]'>
         <h1 className='w-[390px] h-[23px] font-DanaFaNum-600 text-base text-blue'>  داخل نقشه موقعیت مکانی محل سکونت خود را پیدا کنید   </h1>
           <MapContainer center={[36.5659, 53.0586]} zoom={13} style={{height: '403px' , width:'808px'}}>
             <TileLayer 
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />  
               <ProfileMapLocationMarker  AddMarker={AddMarker}/> 
             </MapContainer>    
     </div>
     
     </Form>
   </Formik> 


   )

          }


export default ProfileAddress