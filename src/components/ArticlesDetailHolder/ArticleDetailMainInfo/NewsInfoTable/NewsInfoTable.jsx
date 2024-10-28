import React from 'react'
import NewsInfoTablePcView from './NewsInfoTabelPcViews'
import NewsInfoTableMobView from './NewsInfoTabelMobView'



const NewsInfoTable = ({data}) => {

    
  return (
    <>
        <NewsInfoTablePcView data={data} />
        <NewsInfoTableMobView data={data} />
    </>
  )
}

export default NewsInfoTable