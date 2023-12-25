import { ReactElement, useCallback, useMemo, useRef } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ICompaniesData } from '../../types/types';
import { ConfirmModal } from '../confirmModal/confirm-modal';
import { CompaniesDetails } from '../companies-details/companies-details';
import { MdDeleteForever } from "react-icons/md";
import {
  selectorCompanies,
  selectorCompaniesDetailsState,
  selectorCompaniesSelectAllState,
  selectorcConfirmCompaniesModalState
} from '../../redux/selectors';
import {
  addCompanies,
  saveCompanyCurrId,
  selectAllCompanies,
  toogleCompanyCheckBox,
  toogleCompanyConfirmModal,
  toogleCompanyDetailsModal
} from '../../redux/companies';
import './companies-table.scss';

type IntersectionObserverType = IntersectionObserver | null;

export const CompaniesTable = (): ReactElement => {
  const observer = useRef<IntersectionObserverType>();

  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectorCompanies);
  const confirmModalState = useAppSelector(selectorcConfirmCompaniesModalState);
  const companiesDetailsState = useAppSelector(selectorCompaniesDetailsState);
  const companiesSelectAllState = useAppSelector(selectorCompaniesSelectAllState);
  const showDeleteBtn = companies.filter((item: ICompaniesData) => item.checked).length;

  const onDeleteBtn = useCallback((id: number): void => {
    dispatch(toogleCompanyConfirmModal(confirmModalState));
    dispatch(saveCompanyCurrId(id));
  }, [confirmModalState, dispatch]);

  const onDeleteSelectCompanies = (): void => {
    dispatch(toogleCompanyConfirmModal(confirmModalState));
  };

  const onEditBtn = useCallback((id: number): void => {
    dispatch(toogleCompanyDetailsModal(companiesDetailsState));
    dispatch(saveCompanyCurrId(id));
  }, [companiesDetailsState, dispatch]);

  const onChangeCheckbox = useCallback((id: number): void => {
    dispatch(toogleCompanyCheckBox(id));
  }, [dispatch]);

  const onSelectAll = (): void => {
    dispatch(selectAllCompanies());
  };

  const onAddCompany = (): void => {
    dispatch(saveCompanyCurrId(0));
    dispatch(toogleCompanyDetailsModal(companiesDetailsState));
  };

  const lastNodeRef = useCallback((node: HTMLElement | null) => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      // проверяем, виден ли последний элемент на экране
      if (entries[0].isIntersecting) {
        dispatch(addCompanies());
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  }, [dispatch]);

  const companiesRowTable = useMemo(() => {
    return companies.map((item: ICompaniesData) => {
      return (
        <li
          className={
            item.checked ?
              'companies-container__item companies-container__item-checked' : 'companies-container__item'
          }
          key={item.id}
          ref={lastNodeRef}
        >
          <span className='companies-container__item-el'>
            <input
              type='checkbox'
              className='companies-container__checkbox'
              onChange={() => onChangeCheckbox(item.id)}
              checked={item.checked}
            />
          </span>
          <span className='companies-container__item-el'>{item.companyName}</span>
          <span className='companies-container__item-el'>{item.employees.length}</span>
          <span className='companies-container__item-el' title={item.companyAddress}>
            {item.companyAddress}
          </span>
          <div className='companies-container__buttons-block'>
            <button
              id={String(item.id)}
              className={
                item.checked ?
                  'companies-container__show-btn far fa-edit companies-container__show-btn-checked'
                  : 'companies-container__show-btn far fa-edit'
              }
              type='button'
              title='Редактировать'
              disabled={!item.checked}
              onClick={() => onEditBtn(item.id)}
            />
            <button
              id={String(item.id)}
              className={
                item.checked ?
                  'companies-container__del-btn far fa-trash-alt companies-container__del-btn-checked'
                  : 'companies-container__del-btn far fa-trash-alt'
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
  }, [
    companies,
    onDeleteBtn,
    onEditBtn,
    onChangeCheckbox,
    showDeleteBtn,
    lastNodeRef
  ]);

  return (
    <>
      <div className="companies-container">
        <div className='companies-container__btn-container'>
          <button
            className='companies-container__add-button'
            onClick={() => onAddCompany()}>
            <FiPlusCircle className='companies-container__icon-plus' />
            Добавить
          </button>

          {showDeleteBtn > 1 &&
            <button
              className='companies-container__del-all-btn'
              onClick={() => onDeleteSelectCompanies()}>
              <MdDeleteForever className='companies-container__dell-icon-btn' />
              Удалить
            </button>
          }
        </div>

        <ul className='companies-container__list'>
          <li className='companies-container__item'>
            <span className='companies-container__item-el'>
              <input
                type='checkbox'
                className='companies-container__checkbox'
                checked={companiesSelectAllState}
                onChange={() => onSelectAll()}
              />
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