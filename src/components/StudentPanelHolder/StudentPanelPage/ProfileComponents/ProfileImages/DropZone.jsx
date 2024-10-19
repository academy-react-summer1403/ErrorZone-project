import { Formik  , Form, Field} from 'formik'
import { object } from 'prop-types'
import React, {useCallback , useState} from 'react'
import {useDropzone} from 'react-dropzone'
import AddImageProfile from '../../../../../core/services/api/UserPanel/AddImageProfile'
import onSelectProfileImgFormData from '../../../../../core/utils/onSelectProfileImgFormData/onSelectProfileImgFormData'

 const DropZone = ({className}) => {
// const [file, setfiles] = useState([])

//  const onDrop = useCallback(acceptedFiles => {
//           // Do something with the files
//           if(acceptedFiles?.length){
//           setfiles(previousFiles => [
//             ...previousFiles,
//             ...acceptedFiles.map(file =>
//            Object.assign(file, {preview: URL.createObjectURL(file)}))
//           ])
//           }
          
//         }, [])
        const [state , setState] = useState([])

        const {getRootProps, getInputProps, isDragActive} = useDropzone({
            onDrop: useCallback((files) => {
                console.log(files)
                setState(files)
            } , [])
        })

//     //   handleSubmit = async e => {
//     //   e.preventDefault()
//     //   if(!file?.length) return
//     //   const selectImageData = onSelectProfileImgFormData(value);

//     //   const res = await AddImageProfile(selectImageData)
//     //   console.log('resing' , res)
      

//     // }
        
//         return (
//          <form >
//           <div {...getRootProps({
//             className: className
//           })}>
//             <input {...getInputProps()} />
//             {
//               isDragActive ?
//                 <p>Drop the files here ...</p> :
//                 <p>Drag 'n' drop some files here, or click to select files</p>
//             }
//           </div>
//           <div className='bg-red w-[100%] flex gap-6'>
//              {file.map(file => (
//                 <div key={file.name}>
//                    {/* <i  src={file.preview} alt='' width={189} height={189} /> */}
//                    <img src={file.preview} className='w-[189px] h-[189px] rounded-[16px] bg-green-500'/>
//                 </div>
//              ))}
//           </div>
//        </form>
//         )

     
//}

//export default DropZone

const onSubmit = () => {

    
}





  return (
    <>
    <Formik
     onSubmit={onSubmit}
    >  
        <Form>
       <div className='p-10 border border-black' {...getRootProps()}>  
          <Field  {...getInputProps()} />
          {
            isDragActive ? <p>    drop the file here   </p> : <p>   dreghere or click the select files  </p>
          }
          
       </div>

       <div className='bg-blue'>
        {
            state && state.length>0 && state.map((c, i) => {
               return <img  src={URL.createObjectURL(c)} className='w-[180px] h-[180px]'  />
            })
        }
      </div>

      <button type='submit'>  ثبت  </button>
      </Form>
     </Formik> 
    </>
  )
}

export default DropZone