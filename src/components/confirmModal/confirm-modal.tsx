import { ReactElement, useCallback, useEffect } from 'react';
import './confirm-modal.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectorConfirmModalState, selectorCurrId } from '../../redux/selectors';
import { deleteElement, saveCurrId, toogleConfirmModalState } from '../../redux/companies';
import { IoCloseSharp } from "react-icons/io5";

export const ConfirmModal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const confirmModalState = useAppSelector(selectorConfirmModalState);
  const currId = useAppSelector(selectorCurrId);

  const onConfirmDelete = useCallback((): void => {
    dispatch(deleteElement(currId));
    dispatch(toogleConfirmModalState(confirmModalState));
    dispatch(saveCurrId(0));
  }, [currId, dispatch, confirmModalState]);

  const onCloseConfirmModal = () => {
    dispatch(saveCurrId(0));
    dispatch(toogleConfirmModalState(confirmModalState));
  };

  const onEsc = useCallback((e: any) => {
    if (e.key !== 'Escape') {
      return;
    }
    dispatch(saveCurrId(0));
    dispatch(toogleConfirmModalState(confirmModalState));
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
          Вы точно хотите удалить запись?
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
