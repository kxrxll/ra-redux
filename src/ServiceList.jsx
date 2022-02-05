import React from 'react';
import {nanoid} from 'nanoid';
import ServiceItem from './ServiceItem';

function ServiceList({items, toEditMode, sendEditItem}) {
  return (
    <>
       <ul className="list-group">
      {items.map(item => <ServiceItem item={item} toEditMode={toEditMode} sendEditItem={sendEditItem} key={nanoid()}/>)}
      </ul>
    </>
  )
}

export default ServiceList;

