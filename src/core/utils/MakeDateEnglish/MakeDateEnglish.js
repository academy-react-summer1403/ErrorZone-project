// import jMoment from 'moment-jalaali'
import jMoment from "moment-jalaali"


const MakeDateEnglish = (time) => {
  
  const date = jMoment(time , "jYYYY/jMM/jDD").format("YYYY/MM/DD");
 
    

  return date;
};

export { MakeDateEnglish };