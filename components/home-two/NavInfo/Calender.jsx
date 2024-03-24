// import React from 'react';
// import { format } from 'date-fns';

// const Calendar = ({ startDate }) => {
//   const formattedDate = format(startDate, 'd MMM E'); // Format the date

//   return <div className="calendar-day">{formattedDate}</div>;
// };

// export default Calendar;

import React from "react";
import { format } from "date-fns";

const Calendar = ({ startDate }) => {
  const formattedDay = format(startDate, "d");
  const formattedMonth = format(startDate, "MMM");
  const formattedDayOfWeek = format(startDate, "E");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-[35px] font-medium"> {formattedDay}</p>
      <p className="text-sm flex items-center gap-x-2">
       <span> {formattedMonth}</span>
        <span>{formattedDayOfWeek}</span>
      </p>
    </div>
  );
};

export default Calendar;
