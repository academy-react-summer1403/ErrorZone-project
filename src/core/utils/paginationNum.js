export const paginationNum = (totalNum, inPgeRows) => {
    if (totalNum % inPgeRows == 0) {
      return totalNum / inPgeRows ;
    }
    else{
      return (Math.ceil(totalNum / inPgeRows));
    }
  }