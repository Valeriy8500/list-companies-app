import { Header } from '../header/header';
import { CompaniesTable } from '../companies-table/companies-table';
import { EmployeesTable } from '../employees-table/employees-table';
import { selectorCompanies } from '../../redux/selectors';
import { useAppSelector } from '../../redux/hooks';
import { ReactElement } from 'react';
import { ICompaniesData } from '../../types/types';
import './list-companies.scss';

export const ListCompanies = (): ReactElement => {
  const companies = useAppSelector(selectorCompanies);
  const showEmployeesTable = companies.filter((item: ICompaniesData) => item.checked ? item : false).length;

  return (
    <div className="list-companies">
      <Header />
      <div className='main-content'>
        <CompaniesTable />
        {showEmployeesTable === 0 || showEmployeesTable > 1 ? null : <EmployeesTable />}
      </div>
    </div>
  );
}
