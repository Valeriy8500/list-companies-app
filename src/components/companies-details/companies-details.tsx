import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { generateId } from '../../shared/shared-function';
import { IoCloseSharp } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectorCompanies, selectorCompaniesCurrId, selectorCompaniesDetailsState } from '../../redux/selectors';
import { ICompaniesData } from '../../types/types';
import { addCompany, editCompany, saveCompanyCurrId, toogleCompanyDetailsModal } from '../../redux/companies';
import './companies-details.scss';

export const CompaniesDetails = (): ReactElement => {

  const dispatch = useAppDispatch();
  const companiesDetailsState = useAppSelector(selectorCompaniesDetailsState);
  const currId = useAppSelector(selectorCompaniesCurrId);
  const companies = useAppSelector(selectorCompanies);
  const currEl = companies.filter((i: ICompaniesData) => i.id === currId)[0];

  const [value, setValue] = useState<ICompaniesData>(() => {
    if (currEl) {
      return currEl;
    } else {
      const newId = generateId(companies);

      return {
        id: newId,
        companyName: '',
        employeesCount: '0',
        companyAddress: '',
        checked: false,
        employees: []
      };
    }
  });
  const [disabled, setDisabled] = useState<boolean>(true);

  const onCloseCompaniesDetails = (): void => {
    dispatch(saveCompanyCurrId(0));
    dispatch(toogleCompanyDetailsModal(companiesDetailsState));
  };

  const onEsc = useCallback((evt: any): void => {
    if (evt.key !== 'Escape') {
      return;
    }
    dispatch(saveCompanyCurrId(0));
    dispatch(toogleCompanyDetailsModal(companiesDetailsState));
  }, [companiesDetailsState, dispatch]);

  useEffect(() => {
    document.addEventListener('keydown', onEsc);

    return () => {
      document.removeEventListener('keydown', onEsc)
    }
  }, [onEsc]);

  useEffect(() => {
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

    const newEl = {
      ...value,
      id: currId ? currId : value.id,
      companyName: value.companyName.trim(),
      employeesCount: String(value.employeesCount).trim(),
      companyAddress: value.companyAddress.trim(),
      employees: currId ? value.employees : [],
    };

    if (currId) {
      dispatch(editCompany(newEl));
    } else {
      dispatch(addCompany(newEl));
    }

    dispatch(saveCompanyCurrId(0));
    dispatch(toogleCompanyDetailsModal(companiesDetailsState));
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
    <div className="companies-details">
      <div className='companies-details__container'>
        <div className='companies-details__header'>
          <h2 className='companies-details__title'>{currEl ? 'Редактирование компании' : 'Создание компании'}</h2>
          <button
            className='companies-details__close-button'
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
            Название компании *
            <input
              id='companyName'
              className='form__input'
              type='text'
              placeholder=' Введите название'
              onChange={(e: React.ChangeEvent) => onChangeItem('companyName', e)}
              value={value === null || value === undefined ? '' : value.companyName} />
          </label>

          <label className='form__label'>
            Кол-во сотрудников
            <input
              id='employeesCount'
              className='form__input'
              type='text'
              onChange={(e: React.ChangeEvent) => onChangeItem('employeesCount', e)}
              value={value === null || value === undefined ? '' : value.employeesCount}
              disabled
            />
          </label>

          <label className='form__label'>
            Адрес *
            <input
              id='companyAddress'
              className='form__input'
              type='text'
              placeholder=' Введите адрес'
              onChange={(e: React.ChangeEvent) => onChangeItem('companyAddress', e)}
              value={value === null || value === undefined ? '' : value.companyAddress} />
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


