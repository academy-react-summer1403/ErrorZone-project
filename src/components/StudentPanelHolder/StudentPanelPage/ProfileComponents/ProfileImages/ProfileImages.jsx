import { ImageAdd02Icon, MoreVerticalCircle01Icon } from 'hugeicons-react'
import onSelectProfileImgFormData from '../../../../../core/utils/onSelectProfileImgFormData/onSelectProfileImgFormData'
import SelectImageProfile from '../../../../../core/services/api/UserPanel/SelectImageProfile'
import { SuccessToastify } from '../../../../../core/utils/Toastifies/SuccessToastify.Utils'
import { useNavigate } from 'react-router'
import { ErrorToastify } from '../../../../../core/utils/Toastifies/ErrorToastify.Utils'
import AddImageProfile from '../../../../../core/services/api/UserPanel/AddImageProfile'
import GetCurrentUserProfile from '../../../../../core/services/api/UserPanel/GetCurrentUserProfile'
import { useSelector } from 'react-redux'
import React, {useCallback , useState , useEffect} from 'react'
 import {useDropzone} from 'react-dropzone'
import DropZone from './DropZone'
import inputImages from './../../../../../assets/images/InputImages/inputImage.jpg'
import { result } from 'lodash'

const ProfileImages = () => {



   const navigate = useNavigate()
   const userInfo = useSelector((reducer) => reducer.user.userInformations)

//  const onSelectUserProfileImage = async (value) => {
//  try {
//    const selectImageData = onSelectProfileImgFormData(value)
//    const result = await SelectImageProfile(selectImageData)
//       console.log('addprof' , result)

//    if(result.success === true){
//     // SuccessToastify(result.message)
//      setTimeout(() => {
//      navigate("/StudentPanel/dashboard")
//      } , 2000)
//    }else if(result.success === false){
//      // return ErrorToastify(result.message)
//    }
//  } catch (error) {
//    return error
//  }
//  }

//   const onDrop  = useCallback((acceptedFiles) => {
//     {
//       acceptedFiles.map(async (file) => {
//         try {
//           const imageData = onSelectProfileImgFormData(file)
//            const result = await AddImageProfile(imageData)
//             if(result.success === true){
//                //SuccessToastify(result.message)
//               // {
//                 // async () =>{
//                 //   const user = await GetCurrentUserProfile()
//                 //    console.log('user' , user)
//                 // }
           
//             }else if(result.success === false){
//              //ErrorToastify(result.message)
//             }
           
//         } catch (error) {
//            console.log('erroring' , error)
//         }
//      })
//     }
//   })

  // const getProfile = async () => {
  //   const user = await GetCurrentUserProfile()
  //   console.log('user' , user)
  //   // setProfile(res)

  // }

  // useEffect(() => {
  // getProfile()
  // }, [])
  
 
  // const {getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop })
const [image, setImage] = useState('')
const [profile, setProfile] = useState([])
// const handleImage = (e) => {
//   console.log( 'files' , e.target.files)
//    setImage(e.target.files[0])
// }

// handleApi = async () => {
//   // const formData = new FormData();
//   // formData.append('image' , image);
//   // const res = await AddImageProfile(formData);
   
// }

// const handleApi = async () => {
//       const formData = new FormData();
//       formData.append('image' , image);
//       const res = await AddImageProfile(formData);
//       console.log( 'res' , res)
// }

const GetProfile = async () => {
  const res =  await GetCurrentUserProfile()
  console.log('resing' , res.userImage)
  setProfile(res.userImage)
}

useEffect(() => {
  
GetProfile()
}, [])


const onUpload = async () => {
  const imageData = new FormData();
  imageData.append('formFile' , image);
  const result = await AddImageProfile(imageData)
  if(result.success === true){
    SuccessToastify(result.message)
  }
  console.log('res' ,result)
}


  return (
   <div className=' w-[100%] h-[100%] pt-[90px] pl-[24px] pr-[24px]'>
          <div className='flex gap-2'>
            <input className='w-[179px] h-[48px] rounded-[40px] bg-blue flex items-center justify-center' type='file' name='file' onChange={(e) => setImage (e.target.files[0])} />
            <button className='w-[179px] h-[48px] rounded-[40px] bg-blue flex items-center justify-center'  onClick={onUpload}>   UPLOPAD   </button>         
 
            <img className='w-[189px] h-[189px] bg-pink-200 ' src={ image ? URL.createObjectURL(image) : inputImages} />   
 
          </div>





   <div className='w-[100%] pt-6'>
     <div className='w-[100%]  rounded-[16px] flex flex-wrap gap-[25px]' >
                {/* {profile.map((items , index) => {
                  return   <img  className='w-[180px] h-[180px] '  />
                })} */}
        {/* <DropZone /> */}
       {profile?.map((item , index) => {
        console.log('item' , item)
         return <div className='w-[189px] h-[189px] rounded-[16px] '>  <img className='w-[189px]  rounded-[16px]'  src={item.puctureAddress} /> </div>
       })} 

       </div> 
      </div>
   </div> 
  )
}

export default ProfileImages