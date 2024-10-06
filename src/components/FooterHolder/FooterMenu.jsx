import React from 'react'
import { FooterMenuItems } from './FooterMenuItems'
import { Link } from 'react-router-dom'

const FooterMenu = () => {
  return (
    <div className='flex justify-evenly items-center flex-wrap gap-14 w-full tablet:w-1/2 h-fit'>
        {FooterMenuItems?.map((item,index) => {
            return(
                <div className="font-DanaFaNum-600 text-lg">
                    <Link to={item.path}>
                        {item.title}
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default FooterMenu