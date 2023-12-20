import { useCallback, useMemo } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { saveCurrId, toogleCompaniesDetailsState, toogleConfirmModalState } from '../../redux/companies';
import { selectorCompanies, selectorCompaniesDetailsState, selectorConfirmModalState } from '../../redux/selectors';
import { ICompaniesData } from '../../types/types';
import { ConfirmModal } from '../confirmModal/confirm-modal';
import './companies-table.scss';
import { CompaniesDetails } from '../companies-details/companies-details';

export const CompaniesTable = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectorCompanies);
  const confirmModalState = useAppSelector(selectorConfirmModalState);
  const companiesDetailsState = useAppSelector(selectorCompaniesDetailsState);

  const onDeleteBtn = useCallback((id: number): void => {
    dispatch(toogleConfirmModalState(confirmModalState));
    dispatch(saveCurrId(id));
  }, [confirmModalState, dispatch]);

  const onEditBtn = useCallback((id: number): void => {
    dispatch(toogleCompaniesDetailsState(companiesDetailsState));
    dispatch(saveCurrId(id));
  }, [companiesDetailsState, dispatch]);

  const companiesRowTable = useMemo(() => {
    return companies.map((item: ICompaniesData) => {
      return (
        <li className='companies-container__item' key={item.id}>
          <span className='companies-container__item-el'>
            <input type='checkbox' className='companies-container__checkbox' />
          </span>
          <span className='companies-container__item-el'>{item.companyName}</span>
          <span className='companies-container__item-el'>{item.employeesCount}</span>
          <span className='companies-container__item-el' title={item.companyAddress}>{item.companyAddress}</span>
          <div className='companies-container__buttons-block'>
            <button
              id={String(item.id)}
              className='companies-container__show-btn far fa-edit'
              type='button'
              title='Редактировать'
              onClick={() => onEditBtn(item.id)}
            />
            <button
              id={String(item.id)}
              className='companies-container__del-btn far fa-trash-alt'
              type='button'
              title='Удалить'
              onClick={() => onDeleteBtn(item.id)}
            />
          </div>
        </li>
      )
    });
  }, [companies, onDeleteBtn, onEditBtn]);

  return (
    <>
      <div className="companies-container">
        <button
          className='companies-container__add-button'
          onClick={() => dispatch(toogleCompaniesDetailsState(companiesDetailsState))}>
          <FiPlusCircle className='companies-container__icon-plus' />
          Добавить
        </button>

        <ul className='companies-container__list'>
          <li className='companies-container__item'>
            <span className='companies-container__item-el'>
              <input type='checkbox' className='companies-container__checkbox' />
              Выделить всё
            </span>
            <span className='companies-container__item-el'>Название компании</span>
            <span className='companies-container__item-el'>Кол-во сотрудников</span>
            <span className='companies-container__item-el'>Адрес</span>
          </li>
          {companiesRowTable}
        </ul>
      </div>

      {companiesDetailsState && <CompaniesDetails />}
      {confirmModalState && <ConfirmModal />}
    </>
  );
}