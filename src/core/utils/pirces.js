export const priceSeparator = (num)=>{

    const formattedNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNum;
}