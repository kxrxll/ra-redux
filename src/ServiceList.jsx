import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import ServiceItem from './ServiceItem';

function ServiceList({items, toEditMode, sendEditItem}) {

  const [filter, setFilter] = useState('');

  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
  }

  return (
    <>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Фильтр</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
        onChange={handleFilterChange}/>
      </div>
       <ul className="list-group">
      {filter === '' ? 
        items.map(item => <ServiceItem item={item} toEditMode={toEditMode} sendEditItem={sendEditItem} key={nanoid()}/>) 
        : 
        items.filter((item) => item.name.startsWith(filter)).map(item => <ServiceItem item={item} toEditMode={toEditMode} sendEditItem={sendEditItem} key={nanoid()}/>)
      }
      </ul>
    </>
  )
}

export default ServiceList;

