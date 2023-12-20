import React from 'react';
import { Header } from '../header/header';
import { CompaniesTable } from '../companies-table/companies-table';
import { EmployeesTable } from '../employees/employees-table';
import './list-companies.scss';

export const ListCompanies = () => {
  return (
    <div className="list-companies">
      <Header />
      <div className='main-content'>
        <CompaniesTable />
        <EmployeesTable />
      </div>
    </div>
  );
}
