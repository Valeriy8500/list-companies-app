import { ReactElement, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { IoCloseSharp } from "react-icons/io5";
import {
  selectorCompanies,
  selectorCompaniesCurrId,
  selectorConfirmEmployeesModalState,
  selectorEmployeesCurrId,
  selectorcConfirmCompaniesModalState
} from '../../redux/selectors';
import {
  deleteCompany,
  deleteEmployee,
  deleteSelectCompanies,
  deleteSelectEmployees,
  saveCompanyCurrId,
  saveEmployeeCurrId,
  toogleCompanyConfirmModal,
  toogleEmployeeConfirmModal
} from '../../redux/companies';
import './confirm-modal.scss';
import { ICompaniesData, IEmployeesData } from '../../types/types';

export const ConfirmModal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const confirmCompaniesModalState = useAppSelector(selectorcConfirmCompaniesModalState);
  const confirmEmployeesModalState = useAppSelector(selectorConfirmEmployeesModalState);
  const companiesCurrId = useAppSelector(selectorCompaniesCurrId);
  const employeesCurrId = useAppSelector(selectorEmployeesCurrId);
  const companies = useAppSelector(selectorCompanies);
  const countCheckedCompanies = companies.filter((item: ICompaniesData) => item.checked).length;

  const onConfirmDelete = useCallback((): void => {
    if (confirmCompaniesModalState) {
      if (countCheckedCompanies > 1) {
        dispatch(deleteSelectCompanies());
        dispatch(toogleCompanyConfirmModal(confirmCompaniesModalState));
        dispatch(saveCompanyCurrId(0));
      } else {
        dispatch(deleteCompany(companiesCurrId));
        dispatch(toogleCompanyConfirmModal(confirmCompaniesModalState));
        dispatch(saveCompanyCurrId(0));
      }
    }

    if (confirmEmployeesModalState) {
      const countCheckedEmployees = companies.filter((i: ICompaniesData) => i.id === companiesCurrId)[0].employees
        ?.filter((i: IEmployeesData) => i.checked).length;

      if (countCheckedEmployees > 1) {
        dispatch(deleteSelectEmployees());
        dispatch(toogleEmployeeConfirmModal(confirmEmployeesModalState));
        dispatch(saveEmployeeCurrId(0));
      } else {
        dispatch(deleteEmployee(employeesCurrId));
        dispatch(toogleEmployeeConfirmModal(confirmEmployeesModalState));
        dispatch(saveEmployeeCurrId(0));
      }
    }
  }, [
    companiesCurrId,
    dispatch,
    confirmCompaniesModalState,
    confirmEmployeesModalState,
    employeesCurrId,
    countCheckedCompanies,
    companies
  ]);

  const onCloseConfirmModal = useCallback((): void => {
    if (confirmCompaniesModalState) {
      dispatch(saveCompanyCurrId(0));
      dispatch(toogleCompanyConfirmModal(confirmCompaniesModalState));
    }

    if (confirmEmployeesModalState) {
      dispatch(saveEmployeeCurrId(0));
      dispatch(toogleEmployeeConfirmModal(confirmEmployeesModalState));
    }
  }, [
    confirmCompaniesModalState,
    confirmEmployeesModalState,
    dispatch
  ]);

  const onEsc = useCallback((e: any): void => {
    if (e.key !== 'Escape') {
      return;
    }

    onCloseConfirmModal();
  }, [onCloseConfirmModal]);

  useEffect(() => {
    document.addEventListener('keydown', onEsc);

    return () => {
      document.removeEventListener('keydown', onEsc)
    }
  }, [onEsc]);

  return (
    <div className="confirm-modal">
      <div className='confirm-modal__container'>
        <div className='confirm-modal__header'>
          <h2 className='confirm-modal__title'>
            Подтверждение удаления
          </h2>
          <button
            className='confirm-modal__close-button'
            onClick={() => onCloseConfirmModal()}
          >
            <IoCloseSharp className='confirm-modal__close-icon' />
          </button>
        </div>
        <div className='confirm-modal-content'>
          Вы точно хотите удалить элемент(ы)?
        </div>
        <div className='confirm-modal__footer'>
          <button
            className='confirm-modal__button'
            type='submit'
            onClick={() => onConfirmDelete()}>
            Удалить
          </button>
          <button
            className='confirm-modal__button'
            type='button'
            onClick={() => onCloseConfirmModal()}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
};
