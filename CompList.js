
import CompList from './CompList.css'

import React from 'react';

const list = [
  {
    id: '1',
    firstname: 'Pooja ',
    lastname: 'BBB',
    job:'sr.developer',
    workFromHome:'yes'
  },
  
  {
    id: '2',
    firstname: 'John ',
    lastname: 'Warner',
    job:'Sr. Executive',
    workFromHome:'no',
  },
  {
    id: '2',
    firstname: 'Satish ',
    lastname: 'Kumar',
    job:' Maneger',
    workFromHome:'no',
  },
];

const ComplexList = () => (
  <ul className="main">
    {list.map(item => (
      <li key={item.id} className="flex">
        <div className="list">{item.id}</div>
        <div className="list">{item.firstname}</div>
        <div className="list">{item.lastname}</div>
        <div className="list">{item.job}</div>
        <div className="list">{item.workFromHome}</div>
      </li>
    ))}
  </ul>
);

export default ComplexList;