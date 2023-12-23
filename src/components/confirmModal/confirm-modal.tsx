import { ReactElement, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectorCompaniesCurrId, selectorConfirmEmployeesModalState, selectorEmployeesCurrId, selectorcConfirmCompaniesModalState } from '../../redux/selectors';
import { IoCloseSharp } from "react-icons/io5";
import './confirm-modal.scss';
import { deleteCompany, deleteEmployee, saveCompanyCurrId, saveEmployeeCurrId, toogleCompanyConfirmModal, toogleEmployeeConfirmModal } from '../../redux/companies';

export const ConfirmModal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const confirmCompaniesModalState = useAppSelector(selectorcConfirmCompaniesModalState);
  const confirmEmployeesModalState = useAppSelector(selectorConfirmEmployeesModalState);
  const companiesCurrId = useAppSelector(selectorCompaniesCurrId);
  const employeesCurrId = useAppSelector(selectorEmployeesCurrId);

  const onConfirmDelete = useCallback((): void => {
    if (confirmCompaniesModalState) {
      dispatch(deleteCompany(companiesCurrId));
      dispatch(toogleCompanyConfirmModal(confirmCompaniesModalState));
      dispatch(saveCompanyCurrId(0));
    }

    if (confirmEmployeesModalState) {
      dispatch(deleteEmployee(employeesCurrId));
      dispatch(toogleEmployeeConfirmModal(confirmEmployeesModalState));
      dispatch(saveEmployeeCurrId(0));
    }
  }, [
    companiesCurrId,
    dispatch,
    confirmCompaniesModalState,
    confirmEmployeesModalState,
    employeesCurrId
  ]);

  const onCloseConfirmModal = () => {
    if (confirmCompaniesModalState) {
      dispatch(saveCompanyCurrId(0));
      dispatch(toogleCompanyConfirmModal(confirmCompaniesModalState));
    }

    if (confirmEmployeesModalState) {
      dispatch(saveEmployeeCurrId(0));
      dispatch(toogleEmployeeConfirmModal(confirmEmployeesModalState));
    }
  };

  const onEsc = useCallback((e: any) => {
    if (e.key !== 'Escape') {
      return;
    }

    if (confirmCompaniesModalState) {
      dispatch(saveCompanyCurrId(0));
      dispatch(toogleCompanyConfirmModal(confirmCompaniesModalState));
    }

    if (confirmEmployeesModalState) {
      dispatch(saveEmployeeCurrId(0));
      dispatch(toogleEmployeeConfirmModal(confirmEmployeesModalState));
    }
  }, [dispatch, confirmCompaniesModalState, confirmEmployeesModalState]);

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
          Вы точно хотите удалить элемент?
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
