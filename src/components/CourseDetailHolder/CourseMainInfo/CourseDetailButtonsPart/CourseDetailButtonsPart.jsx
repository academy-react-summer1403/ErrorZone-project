import { Archive02Icon, Book02Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React from 'react'
import ButtonSpecial from '../../../common/ButtonSpecial'

const CourseDetailButtonsPart = () => {

  return (
    <div className="flex items-center justify-between spay flex-wrap-reverse desktop:gap-2">
    <ButtonSpecial
      innerHtml={
        <>
          <Book02Icon
            strokeWidth={2}
            size={24}
            className="hidden tv:block"
          ></Book02Icon>
          <p>رزرو دوره</p>
        </>
      }
      className="bg-blue text-white py-3 px-6 font-DanaFaNum-700 desktop:text-lg"
    />

    <ButtonSpecial
      innerHtml={
        <>
          <Archive02Icon
            strokeWidth={2}
            size={24}
            className="hidden tv:block"
          ></Archive02Icon>
          <p>اضافه به لیست موردعلاقه</p>
        </>
      }
      className="bg-black text-white dark:bg-white dark:text-black py-3 px-6 font-DanaFaNum-700 desktop:text-lg desktop:ml-auto"
    />

    <div className="flex gap-0 desktop:gap-4 items-center">
      <ButtonSpecial
        innerHtml={
          <>
            <ThumbsUpIcon className="size-4 desktop:size-6"></ThumbsUpIcon>
          </>
        }
        className="bg-blue text-white rounded-full p-4"
      />

      <ButtonSpecial
        innerHtml={
          <>
            <ThumbsDownIcon className="size-4 desktop:size-6"></ThumbsDownIcon>
          </>
        }
        className="bg-white dark:bg-black dark:text-white border border-gray-400 rounded-full p-4"
      />
    </div>
  </div>
  )
}

export default CourseDetailButtonsPart