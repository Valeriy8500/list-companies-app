import { ReactElement, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectorCompaniesCurrId, selectorcConfirmCompaniesModalState } from '../../redux/selectors';
import { IoCloseSharp } from "react-icons/io5";
import './confirm-modal.scss';
import { deleteCompany, saveCompanyCurrId, toogleCompanyConfirmModal } from '../../redux/companies';

export const ConfirmModal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const confirmModalState = useAppSelector(selectorcConfirmCompaniesModalState);
  const currId = useAppSelector(selectorCompaniesCurrId);

  const onConfirmDelete = useCallback((): void => {
    dispatch(deleteCompany(currId));
    dispatch(toogleCompanyConfirmModal(confirmModalState));
    dispatch(saveCompanyCurrId(0));
  }, [currId, dispatch, confirmModalState]);

  const onCloseConfirmModal = () => {
    dispatch(saveCompanyCurrId(0));
    dispatch(toogleCompanyConfirmModal(confirmModalState));
  };

  const onEsc = useCallback((e: any) => {
    if (e.key !== 'Escape') {
      return;
    }
    dispatch(saveCompanyCurrId(0));
    dispatch(toogleCompanyConfirmModal(confirmModalState));
  }, [dispatch, confirmModalState]);

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
