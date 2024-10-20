export const paginationNum = (totalNum, inPgeRows) => {
    if (totalNum % inPgeRows == 0) {
      return totalNum / inPgeRows
    }
    else{
      return (totalNum / inPgeRows) + 1;
    }
  }