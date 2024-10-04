import React from 'react'
import { Link } from 'react-router-dom'

const BestTeacherSecDescribe = () => {
  return (
    <div className="w-80w tablet:w-[527px] space-y-6 mt-6">
    <span className="font-DanaFaNum-700 text-2xl">
      اساتید برتر هفته آکادمی
    </span>
    <p className="m-0 p-0 text-xl">
      در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود
      تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های
      مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک
      کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و
      انگیزشی را برای یادگیری فراهم آورده‌اند.
    </p>
    <Link className="block py-2 px-4 bg-blue rounded-full w-fit" to="/">
      صفحه اساتید
    </Link>
  </div>
  )
}

export default BestTeacherSecDescribe