import * as yup from 'yup';

export const initialValues = {
  ReferenceNo: '',
  firstname: '',
  middlename: '',
  lastname: '',
  contactNo: '',
  address: '',
  date: '',
  time: '',
  noOfDiners: 0,
};

export const schema = yup.object({
  firstname: yup.string().required('Required'),
  middlename: yup.string().nullable(),
  lastname: yup.string().required('Required'),
  contactNo: yup.number().required('Required'),
  address: yup.string().required('Required'),
  date: yup.string().required().label('Date'),
  time: yup.string().required('Required'),
  noOfDiners: yup.number().min(1, 'Input atleast 1-2 person').required('Input atleast 1-2 person'),
});
