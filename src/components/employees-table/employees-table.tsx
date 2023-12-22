import { useCallback, useMemo } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ICompaniesData, IEmployeesData } from '../../types/types';
import { ConfirmModal } from '../confirmModal/confirm-modal';
import { EmployeesDetails } from '../employees-details/employees-details';
import './employees-table.scss';
import {
  saveEmployeeCurrId,
  toogleEmployeeCheckBox,
  toogleEmployeeConfirmModal,
  toogleEmployeeDetailsModal
} from '../../redux/companies';
import {
  selectorCompanies,
  selectorCompaniesCurrId,
  selectorConfirmEmployeesModalState,
  selectorEmployeesDetailsState
} from '../../redux/selectors';

export const EmployeesTable = () => {
  const dispatch = useAppDispatch();
  const companiesData = useAppSelector(selectorCompanies);
  const confirmModalState = useAppSelector(selectorConfirmEmployeesModalState);
  const employeesDetailsState = useAppSelector(selectorEmployeesDetailsState);
  const currId = useAppSelector(selectorCompaniesCurrId);

  const onDeleteBtn = useCallback((id: number): void => {
    dispatch(toogleEmployeeConfirmModal(confirmModalState));
    dispatch(saveEmployeeCurrId(id));
  }, [confirmModalState, dispatch]);

  const onEditBtn = useCallback((id: number): void => {
    dispatch(toogleEmployeeDetailsModal(employeesDetailsState));
    dispatch(saveEmployeeCurrId(id));
  }, [employeesDetailsState, dispatch]);

  const onChangeCheckbox = useCallback((id: number) => {
    dispatch(toogleEmployeeCheckBox(id));
    dispatch(saveEmployeeCurrId(id));
  }, [dispatch]);

  const employeesRowTable = useMemo(() => {
    const currEl = companiesData.filter((item: ICompaniesData) => item.id === currId)[0];

    if (!currEl) {
      return null;
    } else {
      return currEl.employees.map((item: IEmployeesData) => {
        return (
          <li
            className={
              item.checked ?
                'employees-container__item employees-container__item-checked' : 'employees-container__item'
            }
            key={item.id}
          >
            <span className='employees-container__item-el'>
              <input
                type='checkbox'
                className='employees-container__checkbox'
                onChange={() => onChangeCheckbox(item.id)}
                checked={item.checked}
              />
            </span>
            <span className='employees-container__item-el'>{item.surname}</span>
            <span className='employees-container__item-el'>{item.name}</span>
            <span className='employees-container__item-el'>{item.position}</span>
            <div className='employees-container__buttons-block'>
              <button
                id={String(item.id)}
                className={
                  item.checked ?
                    'employees-container__show-btn far fa-edit employees-container__del-btn-checked'
                    : 'employees-container__show-btn far fa-edit'
                }
                type='button'
                title='Редактировать'
                onClick={() => onEditBtn(item.id)}
              />
              <button
                id={String(item.id)}
                className={
                  item.checked ?
                    'employees-container__del-btn far fa-trash-alt employees-container__show-btn-checked'
                    : 'employees-container__del-btn far fa-trash-alt'
                }
                type='button'
                title='Удалить'
                onClick={() => onDeleteBtn(item.id)}
              />
            </div>
          </li>
        )
      });
    }
  }, [companiesData, onDeleteBtn, onEditBtn, currId, onChangeCheckbox]);

  return (
    <>
      <div className="employees-container">
        <header className="employees-container__header">
          <h2 className="employees-container__title">Сотрудники компании</h2>
          <button
            className='employees-container__add-button'
            onClick={() => dispatch(toogleEmployeeDetailsModal(employeesDetailsState))}>
            <FiPlusCircle className='employees-container__icon-plus' />
            Добавить
          </button>
        </header>


        <ul className='employees-container__list'>
          <li className='employees-container__item'>
            <span className='employees-container__item-el'>
              <input type='checkbox' className='employees-container__checkbox' />
            </span>
            <span className='employees-container__item-el'>Фамилия</span>
            <span className='employees-container__item-el'>Имя</span>
            <span className='employees-container__item-el'>Должность</span>
          </li>
          {employeesRowTable}
        </ul>
      </div>

      {employeesDetailsState && <EmployeesDetails />}
      {confirmModalState && <ConfirmModal />}
    </>
  );
}