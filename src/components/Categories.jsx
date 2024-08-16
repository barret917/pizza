import { useState } from 'react';
function Categories() {
  const [indexState, setIndexState] = useState(0);

  const list = ['Все', 'Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setIndexState(index);
              }}
              className={indexState === index ? 'active' : ''}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Categories;
