import { useEffect, useRef, useState } from 'react';
import './FlightBook.css';

function isValidDate(dateString) {
  const [day, month, year] = dateString.split('.');
  const date = new Date(`${year}-${month}-${day}`);

  return date instanceof Date && !isNaN(date);
}

function formatDate(date) {
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(
    date
  );
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

  return `${day}.${month}.${year}`;
}

function FlightBook() {
  const [flightType, setFlightType] = useState('');
  console.log(flightType);

  const [dateOne, setDateOne] = useState(formatDate(new Date()));
  const [dateTwo, setDateTwo] = useState(formatDate(new Date()));
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChangeDate = (event) => {
    const dateString = event.target.value;
    const name = event.target.getAttribute('name');
    if (name === 'dateOne') setDateOne(event.target.value);
    else setDateTwo(event.target.value);
    if (!isValidDate(dateString)) {
      setIsValid(false);
      return;
    } else setIsValid(true);
  };

  const handleChange = (event) => {
    setFlightType(event.target.value);
  };

  return (
    <div className="container-flight">
      <div className="flightbook">
        <label htmlFor="bookflight-select">Choose a Flight: </label>
        <select
          id="bookflight-select"
          value={flightType}
          onChange={handleChange}
        >
          <option value="">--Please choose an option--</option>
          <option value="one-way-flight">one-way flight </option>
          <option value="return-flight">return flight</option>
        </select>
        <input
          name="dateOne"
          type="text"
          value={dateOne}
          onInput={handleChangeDate}
          ref={inputRef}
        />
        <input
          name="dateTwo"
          type="text"
          value={dateTwo}
          onInput={handleChangeDate}
        />
        <button disabled={!isValid} className="buttonbook">
          Book Flight
        </button>
      </div>
    </div>
  );
}

export default FlightBook;
