export interface ICompaniesData {
  id: number;
  companyName: string;
  employeesCount: number;
  companyAddress: string;
}

export interface IConfirmModalProps {
  setShowConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirmDelete: () => void;
}