import React, { useState, useEffect } from 'react';

const AdminHome = () => {
  const [list, setList] = useState(['Inverno em Venus', 'Astro', 'Rolezinho']);

  const deleteItem = id => {};

  return (
    <div>
      <h1>Proximas Viagens</h1>
      <div>
        {list.map(item => {
          return (
            <li>
              {item}
              <button onClick={() => deleteItem(item.id)}>
                x
                <img
                  src="https://source.unsplash.com/collection/1112738/"
                  alt=""
                />
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export { AdminHome };
