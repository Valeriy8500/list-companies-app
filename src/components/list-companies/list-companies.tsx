import React from 'react';
import { Header } from '../header/header';
import { Companies } from '../companies/companies';
import { Employees } from '../employees/employees';
import './list-companies.scss';

export const ListCompanies = () => {
  return (
    <div className="list-companies">
      <Header />
      <div className='main-content'>
        <Companies />
        <Employees />
      </div>
    </div>
  );
}
