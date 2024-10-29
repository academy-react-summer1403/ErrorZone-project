import React from 'react'
import {Input} from "@nextui-org/react";

const UserLinksMob = () => {
    const placements = [
      
        "outside",
     
      ];

  return (
    <> 
    <div className="flex flex-col gap-4 pl-10 pt-10 desktop:hidden">

      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              key={placement}
              type="text"
              label="لینک تلگرام"
              labelPlacement={placement}
              placeholder="لینک تلگرام خود را وارد کنید"

            />
          ))}
        </div>
      </div>
     <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              key={placement}
              type="text"
              label="لینک لینکدین"
              labelPlacement={placement}
              placeholder="لینک لینکدین خود را وارد کنید"

            />
          ))}
        </div>
      </div>        
    </div>  



    <div className="relative top-[20px]  flex justify-start desktop:hidden">
            <button
              type="submit"
              className="w-[125px] h-12 rounded-[10] bg-blue text-white font-DanaFaNum-500 text-base "
            >
              {" "}
              اعمال تغییرات{" "}
            </button>
          </div>
  </>
  )
}

export default UserLinksMob