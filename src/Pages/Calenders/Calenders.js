import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const Calenders = () => {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div className="container ml-auto mr-auto p-16">
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
            <img src="https://images.unsplash.com/photo-1618688935038-e3e6050f9849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbGVuZGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </div>
      </article>
    </div>
  );
};

export default Calenders;
