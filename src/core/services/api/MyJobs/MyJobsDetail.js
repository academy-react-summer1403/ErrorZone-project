import React from 'react'
import instance from '../../interceptor'

const MyJobsDetail = async () => {
try {
    const res = await instance.get(`/SharePanel/GetJobHistory?HistoryId=${id}`)
    return res
} catch (error) {
    return false
}
}

export default MyJobsDetail