import * as yup from 'yup';

export const enrollmentValidationSchema = yup.object().shape({
  student_id: yup.string().nullable(),
  course_id: yup.string().nullable(),
});
