import { Field, Form, Formik , ErrorMessage  } from 'formik'
import React ,{useState , useEffect} from 'react'
import GoldenInput from '../../../../common/GoldenInput/GoldenInput'
import RadioButtonField from '../../../../common/InputFields/RadioButtonFields/RadioButtonFields'
import GetCurrentUserProfile from '../../../../../core/services/api/UserPanel/GetCurrentUserProfile'
import { useDispatch, useSelector } from 'react-redux'
import { onSetUserInfo } from '../../../../../redux/User/user'
import onSetFormData from '../../../../../core/utils/onSetFormData/onSetFormData'
import UpdateProfileInfo from '../../../../../core/services/api/UserPanel/UpdateProfileInfo'
import { makeDatePersian } from '../../../../../core/utils/date-helper.utils'
import { MakeDateEnglish } from '../../../../../core/utils/MakeDateEnglish/MakeDateEnglish'
import { UserPanelEditProfileFormSchema } from '../../../../../core/validations/PanelUser/UserPanelEditProfileFormSchema'
import ButtonSpecial from '../../../../common/ButtonSpecial'
import { ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router'
import { BlueInputField } from '../../../../common/InputFields/BlueInputFields'
import { BlueButton } from '../../../../common/BlueButton/BlueBotton'
import { BlueDatePickerInputField } from '../../../../common/InputFields/BlueDatePickerInputFields/BlueDatePickerInputFields'

const ProfileUserInformation = () => {
  // const dispatch = useDispatch()

   const userInfo = useSelector((reducer) => reducer.user.userInformations)

  // const [markerLocationState, setMarkerLocationState] = useState([
  //   userInfo.latitude === null ? false : parseFloat(userInfo.latitude),
  //   userInfo.longitude === null ? false : parseFloat(userInfo.longitude),
  // ]);


  // const [datePickerDateTime, setDatePickerDateTime] = useState(
  //   makeDatePersian(userInfo.birthDay)
  // );


 const getProfile = async () => {
  const user = await GetCurrentUserProfile()
  console.log('user' , user)
   dispatch(onSetUserInfo(user))  
 }

 console.log('useInfo' , userInfo)

 useEffect(() => {
getProfile()
 }, [])

//  const [datePickerDateTime, setDatePickerDateTime] = useState(
//   makeDatePersian(userInfo.birthDay)
// );

// const onSubmit = async (value) => {
//   console.log('value1', value)
// try {
//   // const data = onSetFormData(value)
//   const formData = new FormData()
//   const keys = Object.keys(value)
//   keys.forEach((key) => {
//   const item = value[key];

//     formData.append(key, item);
//     // console.log('formdata', formData)
// })

// console.log('formdar', formData)
//   const res = await UpdateProfileInfo(formData)
//   console.log('rir' , res)

// } catch (error) {
  
// }
// }

// console.log('onsubmit' , onSubmit)

//  const handleSubmit = (value) => {

//   const newValue = {
//   ...value,
//     LName: value.LName,
//     FName: value.FName,
//     UserAbout: value.UserAbout,
//     NationalCode : value.NationalCode,
//     HomeAdderess : value.HomeAdderess,
//     Gender: Boolean(value.Gender),
//     BirthDay: MakeDateEnglish(datePickerDateTime),
//     Latitude: String(markerLocationState[0]),
//     Longitude: String(markerLocationState[1]),
//   }
//   console.log('newValue' , newValue)
//  onSubmit(newValue)
//  }

//   return (
//     <Formik initialValuesinitialValues={{
//        LName: userInfo.lName,
//        FName: userInfo.fName,
//        UserAbout: userInfo.userAbout,
//        Birthday: userInfo.birthDay,
//        HomeAdderess: userInfo.homeAdderess,
//        NationalCode: userInfo.nationalCode,
//        Gender: String(userInfo.gender),
//        PhoneNumber: userInfo.phoneNumber,
//         }}
//        validationSchema={UserPanelEditProfileFormSchema}
//        onSubmit={(value) => handleSubmit(value)}
//    >  
//       <Form> 
//     <div className='w-[100%] h-auto pt-[90px] pl-[278px] pb-[137px] pr-[24px]'>
//        <div className=' w-[100%]  flex '>
//           <GoldenInput
//             type='text'
//             name='FName'
//             placeholder='نام خود را وارد کنید'
//             label='نام '
//             FieldclassName='w-[268px] h-[48px] rounded-[24px] pr-3 mt-2 border border-gray-400'
//           />
//           <GoldenInput
//             type='text'
//             name='LName'
//             placeholder='نام خود را وارد کنید'
//             label='نام خانوادگی '
//             FieldclassName='w-[268px] h-[48px] rounded-[24px] mr-[40px] mt-2 border border-gray-400 pr-2'
//           />         
//        </div>
//        <div className='w-[100%] pt-4'>
//         <GoldenInput
//             type='text' 
//             name='UserAbout'
//             placeholder='متن خود را وارد کنید'  
//             label='درباره من'
//             FieldclassName='w-[576px] h-[123px] rounded-[24px]  mt-2 pr-2 border border-gray-400'
//          /> 
//         </div>
//        <div className='w-[100%]  flex pt-4'> 
//        <GoldenInput
//             type='text'
//             name='PhoneNumber'
//             placeholder='شماره همراه خود را وارد کنید'
//             label='شماره همراه '
//             FieldclassName='w-[268px] h-[48px] rounded-[24px] pr-3 mt-2 border border-gray-400'
//           />
//           <GoldenInput
//             type='text'
//             name='NationalCode'
//             placeholder='کدملی خود را وارد کنید'
//             label='کدملی'
//             FieldclassName='w-[268px] h-[48px] rounded-[24px] mr-[40px] mt-2 border border-gray-400 pr-2'
//           />         
//        </div>
//        <div className='w-[100%] flex pt-4'> 
//           <GoldenInput
//             type='text'
//             name='Birthday'
//             placeholder='تاریخ تولد خود را وارد کنید'
//             label='تاریخ تولد'
//             FieldclassName='w-[268px] h-[48px] rounded-[24px]  mt-2 border border-gray-400 pr-2'
//           />           
//         <div className='w-[100%] '> 
//            <h1>    جنسیت  </h1>
//            <div className='w-[100%] flex '> 
//           <RadioButtonField
//                radioInputName="Gender"
//                labelName="مرد"
//                labelId="Man"
//                radioValue="true"        
//           />
//           <RadioButtonField
//               radioInputName="Gender"
//               labelName="زن"
//               labelId="Woman"
//              radioValue="false"
//            />
//           <ErrorMessage
//             name="Gender"
//             component={"p"}
//             className="text-right text-[15px] text-errorColor mr-5 mt-[1px]"
//             />
//             <p className='w-[69px] h-[24px] font-DanaFaNum-500 text-sm text-blue mt-4'>  انتخاب کنید  </p>
//            </div>
//         </div>

//        </div>    
//        <div className='w-[100%]'> 
//        <GoldenInput
//             type='text'
//             name='Email'
//             placeholder='ایمیل خود را وارد کنید'
//             label='ایمیل'
//             FieldclassName='w-[576px] h-[48px] rounded-[24px]  mt-2 border border-gray-400 pr-2'
//           />    
//         </div> 
//        <div className='w-[100%] pt-4'> 
//        <GoldenInput
//             type='text'
//             name='HomeAdderess'
//             placeholder='ادرس محل سکونت خود را وارد کنید '
//             label='ادرس سکونت'
//             FieldclassName='w-[576px] h-[48px] rounded-[24px]  mt-2 border border-gray-400 pr-2'
//           />           
//        </div>
//        <button onClick={onSubmit}  type="submit" className='bg-red w-[125px] h-[48px] rounded-[40px] mt-2' > اعمال تغییرات</button>
//     </div>
//       </Form>
//     </Formik>
//   )



const dispatch = useDispatch();
const Navigate = useNavigate();

/* Inputs Field State */
const [isToggle, setIstoggle] = useState(userInfo.receiveMessageEvent);

const [markerLocationState, setMarkerLocationState] = useState([
  userInfo.latitude === null ? false : parseFloat(userInfo.latitude),
  userInfo.longitude === null ? false : parseFloat(userInfo.longitude),
]);

const [datePickerDateTime, setDatePickerDateTime] = useState(
  makeDatePersian(userInfo.birthDay)
);

const onSubmit = async (value) => {
  try {
    console.log(value);
    const data = onSetFormData(value);

    const result = await UpdateProfileInfo(data);

    if (result.success === true) {
      console.log(result);
      SuccessToastify("درخواست ویرایش حساب شما با موفقیت انجام شده است");
      setTimeout(() => {
        Navigate("/User/Panel/Dashboard");
      }, 2000);
    } else if (result.success === false) {
      ErrorToastify(result.errors);
    }
  } catch (error) {
    return false;
  }
};

const handleSubmit = (value) => {
  console.log(datePickerDateTime);

  const newValue = {
    ...value,
    Gender: Boolean(value.Gender),
    BirthDay: MakeDateEnglish(datePickerDateTime),
  };

  onSubmit(newValue);
};

return (
  <Formik
    initialValues={{
      LName: userInfo.lName,
      FName: userInfo.fName,
      UserAbout: userInfo.userAbout,
      HomeAdderess: userInfo.homeAdderess,
      NationalCode: userInfo.nationalCode,
      Gender: String(userInfo.gender),
    }}
    validationSchema={UserPanelEditProfileFormSchema}
    onSubmit={(value) => handleSubmit(value)}
  >
    <Form className="w-full">
      <ToastContainer rtl cl />
      <div className=" w-full pl-[278px]  pr-[24px]  pt-[80px] flex-wrap ">

        <div className="w-[100%] flex gap-[40px]">
         <div>
           <h1 className='font-DanaFaNum-600 text-base'> نام  </h1>
          <BlueInputField
            type="text"
            name="FName"
            placeholder="نام"
          />
          </div>
          <div>
            <h1 className='font-DanaFaNum-600 text-base'> نام خانوادگی  </h1>
          <BlueInputField
            type="text"
            name="LName"
            placeholder="خانوادگی "
          />
           </div>
        </div>       
          <div className='w-[100%] relative mt-[-30px] '>   
          <h2 className="font-DanaFaNum-600 text-base text-bluePrimary my-1">
            درباره من 
          </h2>
          <Field
            name="UserAbout"
            placeholder="متن خود را وارد کنید"
            extraClasses="w-full"
            className='w-[576px] h-[123px] rounded-[24px] border border-gray-400 pr-2'
          />
          </div>
          <div className=' w-[100%] flex gap-[40px] pt-4'>
             <div > 
               <h1 className='font-DanaFaNum-600 text-base'>  شماره همراه  </h1>
             <BlueInputField
               type="text"
               name="phoneNumber"
               placeholder="شماره همراه خود را وارد کنید"
             />    
             </div>
             <div>
               <h1>  کد ملی </h1>              
             <BlueInputField
               type="text"
               name="NationalCode"
               placeholder="کد ملی خود را وارد کنید"
             />               
             </div>
          </div>
           <div className=' flex gap-[40px] relative top-[-18px]'>  
             <div>
                <h1 className='font-DanaFaNum-600 text-base mb-1'>  تاریخ تولد  </h1>
                <BlueDatePickerInputField
                datePickerDateTime={datePickerDateTime}
               setDatePickerDateTime={setDatePickerDateTime}
                /> 
             </div>
             <div>
            <div className='w-full'> 
              <h1 className='font-DanaFaNum-600 text-base'>    جنسیت  </h1>
              <div className='w-[100%] flex '> 
              <RadioButtonField
                radioInputName="Gender"
                labelName="مرد"
                labelId="Man"
                radioValue="true"
              />
              <RadioButtonField
                radioInputName="Gender"
                labelName="زن"
                labelId="Woman"
                radioValue="false"
              />

             <p className='mt-3 font-DanaFaNum-500 text-sm  text-blue'  >  انتخاب کنید  </p>
            </div>
            <ErrorMessage
              name="Gender"
              component={"p"}
              className="text-right text-[15px] text-errorColor mr-5 mt-[1px]"
            />
          </div>
             </div>
           </div>
            <div className='relative top-[-40px]'>
           <div>  
            <div className="">
  
          <div className=" relative bottom-3 ">
            <h2 className="text-[20px] text-bluePrimary my-1">
               ایمیل 
            </h2>

            <Field 
              name="Email"
              placeholder="ایمیل خود را وارد کنید" 
              className='w-[815px] h-[48px] rounded-[24px] border border-gray-400 pr-2'           
            />
          </div>

        </div>            
           </div>              
            </div>
           <div>  
        <div className="">
          {/* HomeAdderess */}
          <div className=" relative top-[-40px] bottom-3 ">
            <h2 className="text-[20px] text-bluePrimary my-1">
              آدرس سکونت 
            </h2>
            <Field 
              name="HomeAdderess"
              placeholder="ادرس مخل سکونت خود را وارد کنید" 
              className='w-[815px] h-[48px] rounded-[24px] border border-gray-400 pr-2'           
            />
          </div>
        <div className="relative top-[-20px]  flex justify-start">
          {/* <BlueButton type="submit" buttonText="ثبت" /> */}
           <button type='submit' className='w-[125px] h-[48px] rounded-[10] bg-blue text-white font-DanaFaNum-500 text-base '>    اعمال تغییرات  </button>
        </div>             
        </div>              
           </div>
      </div>
    </Form>
  </Formik>
);










 }

export default ProfileUserInformation