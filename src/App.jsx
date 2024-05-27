import React, { useRef, useState } from "react";
import JsonData from "./MOCK_DATA.json";

const App = () => {
  const [data, setData] = useState(JsonData);
  const filterInput = (inputName) => {
    setData(
      JsonData.filter(({ first_name }) => {
        if (inputName === "") {
          return first_name;
        } else if (first_name.toLowerCase().includes(inputName.toLowerCase())) {
          return first_name;
        }
      })
    );
  };
  const inputRef = useRef();
  const handleInput = () => {
    // console.log(inputRef.current.value);
    filterInput(inputRef.current.value);
  };
  return (
    <div className="flex flex-col mx-auto mt-10 w-[300px] gap-5">
      <div className="border-2 flex justify-center items-center">
        <input
          onChange={handleInput}
          type="text"
          className="border-2 p-2 flex-grow bg-gray-200"
          placeholder="Search"
          ref={inputRef}
        />
        <button onClick={handleInput} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col border-2 p-3 gap-2">
        {data.map(({ first_name, id }) =>(
          <p key={id} className="border-b pb-3 last:border-none last:pb-1">
            {first_name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
