import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/css/CheckInput.css';

const CheckInput = ({ selectedDate, setSelectedDate, placeholderText, icon, selectsStart, startDate, endDate }) => {
  return (
    <div className="check-input">
      <img src={icon} alt="icon" className="icon" />
      <DatePicker
        selected={selectedDate}
        onChange={setSelectedDate}
        placeholderText={placeholderText}
        className="date-picker-input"
        dayClassName={(date) =>
          date.getDay() === 0 || date.getDay() === 6 ? 'highlight-red' : undefined
        }
        locale="en-GB"
        calendarClassName="custom-calendar"
        renderDayContents={(day, date) => (
          <span className={date.getDay() === 0 || date.getDay() === 6 ? 'highlight-red' : ''}>
            {day}
          </span>
        )}
        formatWeekDay={(nameOfDay, date) => {
          const day = nameOfDay.substring(0, 1);
          return (
            <span className={day === 'S' ? 'weekend' : 'weekday'}>{day}</span>
          );
        }}
        minDate={new Date()}
        monthsShown={2} // แสดงผลสองเดือน
        showPopperArrow={false} // ซ่อนลูกศรของปฏิทิน
        dateFormat="MM/dd/yyyy" // รูปแบบวันที่
        selectsStart={selectsStart}
        selectsEnd={!selectsStart}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default CheckInput;
