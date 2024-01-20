'use client';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { baseUrl } from '@/app/baseUrl/baseUrl';
import { useRouter } from 'next/navigation';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email cannot be empty')
    .matches(/@/, 'Invalid Email, must contain "@"'),
});
const Form = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    // validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(baseUrl + '/api/forgot-password', {
          email: values.email,
        });
        alert('Check your email');
        router.push('/');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data.message || error.message;
          alert(errorMsg);
        }
      }
    },
    validationSchema,
  });
  return (
    <form
      className="flex flex-col gap-4 justify-center "
      onSubmit={formik.handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          name="email"
          type="email"
          placeholder="john@gmail.com"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
        )}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
