import { ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React , {useState , useEffect} from 'react'

import { MakeDatePersian } from '../../../core/utils/MakeDatePersian.js/MakeDatePersian'
import { convertDate } from "../../../core/utils/DateToShamsi";
import { postQuery } from "../../../core/services/api/reactQuery/postQuery";
import http from "../../../core/services/interceptor"
import { useQueryClient } from "@tanstack/react-query";


const CommentsCard = ({data}) => {
 
  console.log('data223234' , data)
 
  const [isLike, setIsLike] = useState();
  const [isDissLike, setDissLike] = useState();
  const [likeCount, setLikeCount] = useState();
  const [dissLikeCount, setDissLikeCount] = useState();


  const queryclient = useQueryClient();

  const addLikeDissLike = async() => {
    if (!isLike) {
      await http.post(`/News/NewsLike/:${data?.id}`)
      setIsLike(true);
      setDissLike(false)
      
    } else {
      http.post(`/News/NewsDissLike/${data?.id}`);
      setIsLike(false);
      setDissLike(true)      
    }
  };
  const likeAndDislikeSituation = () => {
    if (data.currentUserEmotion == "LIKED") {
      setIsLike(true);
      setDissLike(false);
    } else if (data.currentUserEmotion == "DISSLIKED") {
      setIsLike(false);
      setDissLike(true);
    } else {
      setIsLike(false);
      setDissLike(false);
    }
  };

  useEffect(() => {
    likeAndDislikeSituation();
    queryclient.invalidateQueries(["courseComment"])
  }, [isLike, isDissLike])

  console.log(isLike,"like     ", isDissLike,"dislike ");



  return (
     <>  
       <div className="col-span-12 sm:col-span-6 xl:col-span-3 h-72 p-4 rounded-3xl border bg-gray-100 dark:bg-blackPanel flex flex-col justify-between shadow-md ">
      <div className="space-y-4">
        <div className="font-DanaFaNum-700 text-lg">{data.title}</div>
        <div className="text-gray-800 dark:text-gray-100">{data.describe}</div>
      </div>
      <div className="h-10 flex justify-between items-center">
        <div className="w-fit h-full flex gap-2">
          <img src={data.pictureAddress} alt="sss" className="rounded-full" />
          <div className="flex flex-col">
            <span className="font-DanaFaNum-600 text-sm text-nowrap text-ellipsis max-w-[100px] overflow-hidden w-full">
              {data.author}
            </span>
            <span className="text-xs text-gray-800 dark:text-gray-100 text-nowrap text-ellipsis max-w-[100px] overflow-hidden w-full">
              {MakeDatePersian(data.insertDate)}
            </span>
          </div>
        </div>

        <div className="w-2/5 h-6 flex gap-4 items-center justify-end">
          <div className="flex gap-2 w-fit cursor-pointer" onClick={addLikeDissLike}>
            {data.currentUserEmotion == "LIKED" ? (
              <ThumbsUpIcon size={24} color="blue" />
            ) : (
              <ThumbsUpIcon size={24} />
            )}
            {/* <ThumbsUpIcon size={24} /> */}
            <span className="h-min">{data.likeCount}</span>
          </div>
          <div className="flex gap-2 w-fit cursor-pointer" onClick={addLikeDissLike}>
          {data.currentUserEmotion == "DISSLIKED" ? (
              <ThumbsDownIcon size={24} color="red" />
            ) : (
              <ThumbsDownIcon size={24} />
            )}
            <span className="h-min">{data.disslikeCount}</span>
          </div>
        </div>
      </div>
    </div>
  
   </> 
  )
}

export default CommentsCard