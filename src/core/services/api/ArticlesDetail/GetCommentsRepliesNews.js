import React from 'react'
import instance from '../../interceptor';

const GetCommentsRepliesNews = async (id) => {
    try {
        const res = await instance.get(`/News/GetRepliesComments?Id=${id}`);
        return res;
      } catch (err) {
        console.log(err);
        return 0;
      }
}

export default GetCommentsRepliesNews