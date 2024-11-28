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
import { useNavigate } from 'react-router'
import { BlueInputField } from '../../../../common/InputFields/BlueInputFields'
import { BlueButton } from '../../../../common/BlueButton/BlueBotton'
import { BlueDatePickerInputField } from '../../../../common/InputFields/BlueDatePickerInputFields/BlueDatePickerInputFields'
import moment from 'jalali-moment'
import { SuccessToastify } from '../../../../../core/utils/Toastifies/SuccessToastify.Utils'
import { ErrorToastify } from '../../../../../core/utils/Toastifies/ErrorToastify.Utils'
import { ToastContainer } from 'react-toastify'

const ProfileUserInformation = () => {
  
 const userInfo = useSelector((reducer) => reducer.user.userInformations)

 const getProfile = async () => {
  const user = await GetCurrentUserProfile()
  console.log('user' , user)
   dispatch(onSetUserInfo(user))  
 }

 console.log('useInfo' , userInfo)

 useEffect(() => {
getProfile()
 }, [])


const dispatch = useDispatch();
const Navigate = useNavigate();

/* Inputs Field State */
// const [isToggle, setIstoggle] = useState(userInfo.receiveMessageEvent);

// const jalali = () => {
//   moment().locale('fa').format('jYYYY/jMM/jDD') 
// } 


const [datePickerDateTime, setDatePickerDateTime] = useState(
  makeDatePersian(userInfo.birthDay)
);

const onSubmit = async (value) => {
  try {
    // console.log(value);
    const data = onSetFormData(value);

    const result = await UpdateProfileInfo(data);
    if (result.success === true) {
      console.log(result);
      SuccessToastify("درخواست ویرایش حساب شما با موفقیت انجام شده است");
      setTimeout(() => {
        Navigate("/StudentPanel/");
      }, 2000);
    } else if (result.success === false) {
      ErrorToastify(result.errors);
    }
  } catch (error) {
    return false;
  }
};



const handleSubmit = (value) => {
  console.log('date1233' ,datePickerDateTime);

  const newValue = {
    ...value,
    Gender: Boolean(value.Gender),
    BirthDay: String(MakeDateEnglish(datePickerDateTime)),
  };
  
  console.log('newvalue' , newValue)

  onSubmit(newValue);
};

return (
  <Formik
    initialValues={{
      LName: userInfo.lName,
      FName: userInfo.fName,
      Email: userInfo.email,
      UserAbout: userInfo.userAbout,
      HomeAdderess: userInfo.homeAdderess,
      NationalCode: userInfo.nationalCode,
      Gender: String(userInfo.gender),
      BirthDay: userInfo.birthDay
    }}
    validationSchema={UserPanelEditProfileFormSchema}
    onSubmit={(value) => handleSubmit(value)}
  >
    <Form className="w-full">
     <ToastContainer rtl/>
      <div className="   pr-[24px]  pt-[80px] pl-[278px] hidden desktop:flex dark:bg-blackPanel">
        <div className=''>
          <div className='w-[500px] h-[48px] grid grid-cols-2 '>
           <div className='w-[230px] h-full'> 
           <GoldenInput
            type="text"
            name="FName"
            placeholder="نام"
            FieldclassName='w-full h-[48px] rounded-[24px] border border-gray-400 pr-2'
            label='نام'
        />        
        </div>
         <div className='w-[230px] h-full '>
           <GoldenInput
            type="text"
            name="LName"
            placeholder="خانوادگی "
           FieldclassName='w-full h-[48px] rounded-[24px]  border border-gray-400 pr-2'
           label='نام خانوادگی'
        />            
           </div>        
      </div>
      <div className=' w-[470px] pt-10'>   
          <h2 className="font-DanaFaNum-600 text-base text-bluePrimary my-1">
            درباره من 
          </h2>
          <Field
            as="textarea"           
            name="UserAbout"
            placeholder="متن خود را وارد کنید"
            extraClasses="w-full"
            className='w-full  rounded-[24px] border border-gray-400 pt-4 pr-2 max-h-[123px]'
          />
          </div>  
          <div className='w-[500px] h-[48px] grid grid-cols-2 pt-2'>
        <div className='w-[230px] h-full'> 
         <GoldenInput
           type="text"
           name="phoneNumber"
           placeholder="شماره همراه خود را وارد کنید"
           FieldclassName='w-full h-[48px] rounded-[24px] border border-gray-400 pr-2'
           label='شماره همراه'
        />        
        </div>
        <div className='w-[230px] h-full '>
        <GoldenInput
           type="text"
           name="NationalCode"
           placeholder="کد ملی خود را وارد کنید"
           FieldclassName='w-full h-[48px] rounded-[24px] border border-gray-400 pr-2 '
           label='کد ملی '
        />            
           </div>        
      </div>
          <div className='w-[500px] h-[48px] grid grid-cols-2 pt-12'>
        <div className='w-[230px] h-full '> 
         <div>
           <h1 className='font-DanaFaNum-600 text-base mb-1'>  تاریخ تولد  </h1>
           <BlueDatePickerInputField
             datePickerDateTime={datePickerDateTime}
             setDatePickerDateTime={setDatePickerDateTime}
            /> 
           </div>     
        </div>
        <div className='w-[230px] h-full '>
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

             <p className='mt-3 font-DanaFaNum-500 text-sm  text-blue text-nowrap'  >  انتخاب کنید  </p>
            </div>
            <ErrorMessage
              name="Gender"
              component={"p"}
              className="text-right text-[15px] text-errorColor mr-5 mt-[1px]"
            />
          </div>          
           </div>               
      </div>
      
      <div className=' w-[470px] pt-[88px]  '>   
          <h2 className="font-DanaFaNum-600 text-base text-bluePrimary my-1">
             ایمیل 
          </h2>
          <Field
            name="Email"
            placeholder="ایمیل خود را وارد کنید" 
            extraClasses="w-full"
            className='w-full h-12  rounded-[24px] border border-gray-400  pr-2 max-h-[123px]'
          />
          </div>  

      <div className=' w-[470px] pt-5'>   
          <h2 className="font-DanaFaNum-600 text-base text-bluePrimary my-1">
             ادرس سکونت 
          </h2>
          <Field
             name="HomeAdderess"
             placeholder="ادرس مخل سکونت خود را وارد کنید"  
            extraClasses="w-full"
            className='w-full h-12  rounded-[24px] border border-gray-400  pr-2 max-h-[123px]'
          />
          </div>  

       <div className="relative  flex justify-start pt-6">  
           <button type='submit' className='w-[125px] h-[48px] rounded-[10] bg-blue text-white font-DanaFaNum-500 text-base '>    اعمال تغییرات  </button>
       </div>   

     </div>
   </div>
    </Form>
  </Formik>
);
 }

export default ProfileUserInformation