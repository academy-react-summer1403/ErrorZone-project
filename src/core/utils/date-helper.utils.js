import jMoment from 'moment-jalaali'

export const makeDatePersian = (time) => {
    // const date = new Date(time).toLocaleDateString("fa-IR", {
    //   day: "2-digit",
    //   month: "long",
    //   year: "numeric",
    // });
    const date = jMoment(time).locale('fa').format('jYYYY jMM jD')
    return date;
  };
  