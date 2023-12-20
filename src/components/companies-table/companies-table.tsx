import React from 'react';
import './companies-table.scss';
import { companiesData } from '../../constans/constans';

export const CompaniesTable = () => {

  const companiesRowTable = React.useMemo(() => {
    return companiesData.map((item) => {
      return (
        <li className='companies-container__item' key={item.id}>
          <span className='companies-container__item-el'>Чекбокс</span>
          <span className='companies-container__item-el'>{item.companyName}</span>
          <span className='companies-container__item-el'>{item.employeesCount}</span>
          <span className='companies-container__item-el' title={item.companyAddress}>{item.companyAddress}</span>
          <div className='companies-container__buttons-block'>
            <button
              id={String(item.id)}
              className='companies-container__show-btn far fa-edit'
              type='button'
              title='Редактировать'
              onClick={() => console.log('Редактировать')}
            />
            <button
              id={String(item.id)}
              className='companies-container__del-btn far fa-trash-alt'
              type='button'
              title='Удалить'
              onClick={() => console.log('Удалить')}
            />
          </div>
        </li>
      )
    });
  }, []);

  return (
    <div className="companies-container">
      <ul className='companies-container__list'>
        <li className='companies-container__item'>
          <span className='companies-container__item-el'>Выделить всё</span>
          <span className='companies-container__item-el'>Название компании</span>
          <span className='companies-container__item-el'>Кол-во сотрудников</span>
          <span className='companies-container__item-el'>Адрес</span>
        </li>
        {companiesRowTable}
      </ul>
    </div>
  );
}