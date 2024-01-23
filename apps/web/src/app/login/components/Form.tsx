'use client';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { baseUrl } from '@/app/baseUrl/baseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { loginAction } from '@/lib/feature/userSlice';
import Link from 'next/link';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email cannot be empty')
    .matches(/@/, 'Invalid Email, must contain "@"'),
  password: yup.string().required('Password cannot be empty'),
});
const Form = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(baseUrl + '/api/login', {
          email: values.email,
          password: values.password,
        });

        dispatch(loginAction(data.data));
        localStorage.setItem('token', data.token);
        router.replace('/');
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

      <div>
        <div className="relative items-center">
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput
            name="password"
            type={show ? 'text' : 'password'}
            placeholder="Password"
            required
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />

          <button onClick={handleClick} type="button">
            <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
          </button>
          {formik.errors.password && formik.touched.password && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.password}
            </p>
          )}
        </div>
        <Link
          href="/forgot-password"
          className="text-blue-600 font-semibold mb-2"
        >
          Forgot Password ?
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
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
