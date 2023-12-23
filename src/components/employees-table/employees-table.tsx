import { useCallback, useMemo } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ICompaniesData, IEmployeesData } from '../../types/types';
import { ConfirmModal } from '../confirmModal/confirm-modal';
import { EmployeesDetails } from '../employees-details/employees-details';
import { MdDeleteForever } from 'react-icons/md';
import {
  saveEmployeeCurrId,
  selectAllEmployees,
  toogleEmployeeCheckBox,
  toogleEmployeeConfirmModal,
  toogleEmployeeDetailsModal
} from '../../redux/companies';
import {
  selectorCompanies,
  selectorCompaniesCurrId,
  selectorConfirmEmployeesModalState,
  selectorEmployeesDetailsState,
  selectorEmployeesSelectAllState
} from '../../redux/selectors';
import './employees-table.scss';

export const EmployeesTable = () => {
  const dispatch = useAppDispatch();
  const companiesData = useAppSelector(selectorCompanies);
  const confirmModalState = useAppSelector(selectorConfirmEmployeesModalState);
  const employeesDetailsState = useAppSelector(selectorEmployeesDetailsState);
  const employeesSelectAllState = useAppSelector(selectorEmployeesSelectAllState);
  const currCompaniesId = useAppSelector(selectorCompaniesCurrId);
  const showDeleteBtn = companiesData.filter((i: ICompaniesData) => i.id === currCompaniesId)[0].employees
    .filter((i: IEmployeesData) => i.checked).length;

  const onDeleteBtn = useCallback((id: number): void => {
    dispatch(toogleEmployeeConfirmModal(confirmModalState));
    dispatch(saveEmployeeCurrId(id));
  }, [confirmModalState, dispatch]);

  const onDeleteSelectEmployees = () => {
    dispatch(toogleEmployeeConfirmModal(confirmModalState));
  };

  const onEditBtn = useCallback((id: number): void => {
    dispatch(toogleEmployeeDetailsModal(employeesDetailsState));
    dispatch(saveEmployeeCurrId(id));
  }, [employeesDetailsState, dispatch]);

  const onChangeCheckbox = useCallback((id: number) => {
    dispatch(toogleEmployeeCheckBox(id));
    dispatch(saveEmployeeCurrId(id));
  }, [dispatch]);

  const onSelectAll = () => {
    dispatch(selectAllEmployees());
  };

  const employeesRowTable = useMemo(() => {
    const currEmployeesArray = companiesData.filter((item: ICompaniesData) => item.checked)[0];

    if (!currEmployeesArray) {
      return null;
    } else {
      return currEmployeesArray.employees.map((item: IEmployeesData) => {
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
                style={showDeleteBtn > 1 ? { opacity: '0.5' } : undefined}
                type='button'
                title='Удалить'
                disabled={showDeleteBtn > 1 && true}
                onClick={() => onDeleteBtn(item.id)}
              />
            </div>
          </li>
        )
      });
    }
  }, [companiesData, onDeleteBtn, onEditBtn, onChangeCheckbox, showDeleteBtn]);

  return (
    <>
      <div className="employees-container">
        <header className="employees-container__header">
          <h2 className="employees-container__title">Сотрудники компании</h2>
          {showDeleteBtn > 1 &&
            <button
              className='employees-container__del-all-btn'
              onClick={() => onDeleteSelectEmployees()}>
              <MdDeleteForever className='companies-container__dell-icon-btn' />
              Удалить
            </button>
          }
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
              <input
                type='checkbox'
                className='employees-container__checkbox'
                checked={employeesSelectAllState}
                onChange={() => onSelectAll()}
              />
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