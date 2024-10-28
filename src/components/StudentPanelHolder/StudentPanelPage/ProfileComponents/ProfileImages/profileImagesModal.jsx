import React from 'react'

const ProfileImagesModal = (modalOpen , setModalOpen) => {
  return (
    <div className={`w-full h-full bg-red z-50 fixed${modalOpen ? 'hidden ' : 'show'}`}>
       <button onClick={() => setModalOpen(false)}> x  </button>
    </div>
  )
}

export default ProfileImagesModal