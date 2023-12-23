import React, { ReactElement, useState } from 'react';
import { generateId } from '../../shared/shared-function';
import { IoCloseSharp } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectorCompanies, selectorCompaniesCurrId, selectorEmployeesCurrId, selectorEmployeesDetailsState } from '../../redux/selectors';
import { ICompaniesData, IEmployeesData } from '../../types/types';
import './employees-details.scss';
import { addEmployee, editEmployee, saveEmployeeCurrId, toogleEmployeeDetailsModal } from '../../redux/companies';

export const EmployeesDetails = (): ReactElement => {

  const dispatch = useAppDispatch();
  const employeesDetailsState = useAppSelector(selectorEmployeesDetailsState);
  const currCompaniesId = useAppSelector(selectorCompaniesCurrId);
  const currEmployeeId = useAppSelector(selectorEmployeesCurrId);
  const companies = useAppSelector(selectorCompanies);
  const currEmployeeEl = companies.filter((i: ICompaniesData) => i.id === currCompaniesId)[0].employees
    .filter((i: IEmployeesData) => i.id === currEmployeeId)[0];

  const [value, setValue] = useState(() => {
    const currEmployeesArr = companies.filter((i: ICompaniesData) => i.id === currCompaniesId)[0].employees;
    const newId = generateId(currEmployeesArr);

    if (currEmployeeEl) {
      return currEmployeeEl;
    } else {
      return {
        id: newId,
        surname: '',
        name: '',
        position: '',
        checked: false
      };
    }
  });
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const onCloseCompaniesDetails = () => {
    dispatch(saveEmployeeCurrId(0));
    dispatch(toogleEmployeeDetailsModal(employeesDetailsState));
  };

  const onEsc = React.useCallback((evt: any) => {
    if (evt.key !== 'Escape') {
      return;
    }
    dispatch(saveEmployeeCurrId(0));
    dispatch(toogleEmployeeDetailsModal(employeesDetailsState));
  }, [employeesDetailsState, dispatch]);

  React.useEffect(() => {
    document.addEventListener('keydown', onEsc);

    return () => {
      document.removeEventListener('keydown', onEsc)
    }
  }, [onEsc]);

  React.useEffect(() => {
    if (
      value.surname !== '' &&
      value.name !== '' &&
      value.position !== ''
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);


  const onBtnOkHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    const newEl = {
      ...value,
      id: currEmployeeId ? currEmployeeId : value.id,
      surname: value.surname.trim(),
      name: value.name.trim(),
      position: value.position.trim()
    };

    if (currEmployeeId) {
      dispatch(editEmployee(newEl));
    } else {
      dispatch(addEmployee(newEl));
    }

    dispatch(toogleEmployeeDetailsModal(employeesDetailsState));
    dispatch(saveEmployeeCurrId(0));
  };

  const onChangeItem = (id: string, e: React.ChangeEvent): void => {
    const element = e.target as HTMLInputElement;
    const { value } = element;

    if (value.trim() === '') {
      setValue((prev: IEmployeesData) => ({ ...prev, [id]: '' }));
    } else {
      setValue((prev: IEmployeesData) => ({ ...prev, [id]: value }));
    }
  };

  return (
    <div className="employees-details">
      <div className='employees-details__container'>
        <div className='employees-details__header'>
          <h2 className='employees-details__title'>{currEmployeeEl ? 'Редактирование сотрудника' : 'Создание сотрудника'}</h2>
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

