import React, {useState, useEffect} from 'react';
import './bootstrap.css';
import {nanoid} from 'nanoid';

function Service() {
  return (
    <div class="card" style={{margin:'40px',padding:'20px',width:'60%'}}>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Услуга</label>
        <input type="email" className="form-control" placeholder="Название услуги" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Цена</label>
        <input type="email" className="form-control" placeholder="Стоимость услуги" />
      </div>
      <button class="btn btn-primary" style={{marginBottom:'10px'}}>Сохранить</button>
      <button class="btn btn-secondary" style={{marginBottom:'10px'}}>Отмена</button>
      <ul class="list-group">
        <li class="list-group-item" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          Стекло 2000₽
          <div>
            <button class="btn btn-success">Редактировать</button>
            <button class="btn btn-danger" style={{marginLeft:'10px'}}>Удалить</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Service;
