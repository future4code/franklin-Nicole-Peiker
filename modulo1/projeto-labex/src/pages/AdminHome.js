import React, { useState, useEffect } from 'react';
import { Btn } from './Btn';

const AdminHome = () => {
  const [list, setList] = useState(['Inverno em Venus', 'Astro', 'Rolezinho']);

  return (
    <div>
      <div>
      <button onClick={}></button>
      <button onClick={}></button>
      <button onClick={}></button>
      </div>
      <div>
        {list.map(item => {
          return (
            <li>
              {item}
              <button>
                x
                <img src="" alt="" />
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export { AdminHome };
