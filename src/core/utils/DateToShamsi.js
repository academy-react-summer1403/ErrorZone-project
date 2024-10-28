import jalaali from "jalaali-js"

const monthName = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

export const convertDate = (inputDate) => {

    const gregorianDate = inputDate;

    const dateObject = new Date(gregorianDate);

    const gYear = dateObject.getFullYear();
    const gMonth = dateObject.getMonth(); // Months are 0-based in JS
    const gDay = dateObject.getDate();

    const shamsiDate = jalaali.toJalaali(gYear, gMonth, gDay);

    return (`${shamsiDate.jd} ${monthName[shamsiDate.jm]} ${shamsiDate.jy}`);

}

