import React, { ReactElement, useState } from 'react';
import { generateId } from '../../shared/shared-function';
import { IoCloseSharp } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectorCompanies, selectorCompaniesDetailsState, selectorEmployeesCurrId } from '../../redux/selectors';
import { ICompaniesData } from '../../types/types';
import './employees-details.scss';
import { addEmployee, editEmployee, saveEmployeeCurrId, toogleEmployeeDetailsModal } from '../../redux/companies';

export const EmployeesDetails = (): ReactElement => {

  const dispatch = useAppDispatch();
  const companiesDetailsState = useAppSelector(selectorCompaniesDetailsState);
  const currId = useAppSelector(selectorEmployeesCurrId);
  const companies = useAppSelector(selectorCompanies);
  const currEl = companies.filter((i: ICompaniesData) => i.id === currId)[0];

  const [value, setValue] = useState(() => {
    const newId = generateId(companies);

    if (currEl) {
      return currEl;
    } else {
      return {
        id: newId,
        companyName: '',
        employeesCount: '0',
        companyAddress: ''
      };
    }
  });
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const onCloseCompaniesDetails = () => {
    dispatch(saveEmployeeCurrId(0));
    dispatch(toogleEmployeeDetailsModal(companiesDetailsState));
  };

  const onEsc = React.useCallback((evt: any) => {
    if (evt.key !== 'Escape') {
      return;
    }
    dispatch(saveEmployeeCurrId(0));
    dispatch(toogleEmployeeDetailsModal(companiesDetailsState));
  }, [companiesDetailsState, dispatch]);

  React.useEffect(() => {
    document.addEventListener('keydown', onEsc);

    return () => {
      document.removeEventListener('keydown', onEsc)
    }
  }, [onEsc]);

  React.useEffect(() => {
    if (
      value.companyName !== '' &&
      value.employeesCount !== '' &&
      value.companyAddress !== ''
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);


  const onBtnOkHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    const newId = generateId(companies);
    console.log('newId: ', newId);

    const newEl = {
      id: currId ? currId : newId,
      companyName: value.companyName.trim(),
      employeesCount: String(value.employeesCount).trim(),
      companyAddress: value.companyAddress.trim()
    };

    if (currId) {
      dispatch(editEmployee(newEl));
    } else {
      dispatch(addEmployee(newEl));
    }

    dispatch(toogleEmployeeDetailsModal(companiesDetailsState));
    dispatch(saveEmployeeCurrId(0));
  };

  const onChangeItem = (id: string, e: React.ChangeEvent): void => {
    const element = e.target as HTMLInputElement;
    const { value } = element;

    if (value.trim() === '') {
      setValue((prev: ICompaniesData) => ({ ...prev, [id]: '' }));
    } else {
      setValue((prev: ICompaniesData) => ({ ...prev, [id]: value }));
    }
  };

  return (
    <div className="employees-details">
      <div className='employees-details__container'>
        <div className='employees-details__header'>
          <h2 className='employees-details__title'>{currEl ? 'Редактирование сотрудника' : 'Создание сотрудника'}</h2>
          <button
            className='employees-details__close-button'
            onClick={() => onCloseCompaniesDetails()}
          >
            <IoCloseSharp className='confirm-modal__close-icon' />
          </button>
        </div>
        <form
          className='form'
          id='form'
          onSubmit={(e: React.FormEvent) => onBtnOkHandler(e)}>

          <label className='form__label'>
            Фамилия *
            <input
              id='surname'
              className='form__input'
              type='text'
              placeholder=' Введите фамилию'
              onChange={(e: React.ChangeEvent) => onChangeItem('surname', e)}
              value={value === null || value === undefined ? '' : value.surname} />
          </label>

          <label className='form__label'>
            Имя *
            <input
              id='name'
              className='form__input'
              type='text'
              placeholder=' Введите имя'
              onChange={(e: React.ChangeEvent) => onChangeItem('name', e)}
              value={value === null || value === undefined ? '' : value.name}
            />
          </label>

          <label className='form__label'>
            Должность *
            <input
              id='position'
              className='form__input'
              type='text'
              placeholder=' Введите должность'
              onChange={(e: React.ChangeEvent) => onChangeItem('position', e)}
              value={value === null || value === undefined ? '' : value.position} />
          </label>

          <p className='form_paragraph'>
            Поля, помеченные * обязательны для заполнения
          </p>
        </form>

        <div className='form__button-block'>
          <button
            className={disabled ? 'form__button form__button-dsbl' : 'form__button'}
            disabled={disabled}
            form='form'
          >
            Готово
          </button>
          <button
            className='form__button'
            form='form'
            onClick={() => onCloseCompaniesDetails()}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
};


