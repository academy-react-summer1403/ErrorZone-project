import React from 'react'

const NewsNote = () => {
  return (
    <div className=" box2 flex justify-center items-center gap-6 mobile:gap-5  flex-col text-center">
    <div className="box font-DanaFaNum-700 text-6xl tablet:pt-16 pt-11 tablet:mt-2 text-center mobile:w-[700px] w-[300px]  ">
      {" "}
      اطلاعات بیشتر ، درک بهتر
    </div>
    <div className=" box flex justify-center  w-full tablet:text-wrap text-nowrap  text-lg  text-gray-800 ">
      {" "}
    ما در بلاگ ها اطلاعات شما رو نسبت به <br /> تکنولوژی ای که یاد میگیرید بیشتر میکنیم
    </div>
  </div>
  )
}

export default NewsNote