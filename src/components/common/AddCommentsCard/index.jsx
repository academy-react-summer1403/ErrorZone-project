import { CommentAdd01Icon, DistributeVerticalCenterIcon, VirtualRealityVr01Icon } from 'hugeicons-react'
import React , {useState} from 'react'
import AddCommentsModal from '../AddCommentsModal'

const AddCommentsCard = () => {
 const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-blue w-[324px] h-[282px] rounded-3xl opacity-[90%] flex items-center justify-center '>
      <div className=''>
       < CommentAdd01Icon className='text-white mr-[49px]'/>
       <h1 className='mt-[8px] font-DanaFaNum-600 text-lg text-white mr-[30px]'>   نظر شما  </h1>
       <button onClick={() => setIsOpen(true)}  className='mt-[16px] font-DanaFaNum-500 text-sm text-gray-100 text-opacity-[90%]'>   برای نظر دادن کلیک کنید   </button>
      </div>
      <AddCommentsModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}

export default AddCommentsCard