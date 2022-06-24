import React, { useState } from 'react';

const ListTrips = () => {
  const [list, setList] = useState(['Inverno em Venus', 'Astro', 'Rolezinho']);
  return (
    <div>
      <h1>Proximas Viagens</h1>
      <div>
        {list.map(item => {
          return (
            <li>
              {item}

              <img
                src="https://source.unsplash.com/collection/1112738/"
                alt=""
              />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export { ListTrips };
