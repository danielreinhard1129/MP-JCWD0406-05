import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { baseUrl } from '@/app/baseUrl/baseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import { useState } from 'react';

const validationSchema = yup.object().shape({
  nama_lengkap: yup
    .string()
    .required('Full name cannot be empty')
    .matches(/^[A-Za-z\s]+$/, 'Full name must contain only letters and spaces')
    .min(4, 'Full name must be at least 4 characters')
    .max(50, 'Full name must be at most 50 characters'),
  username: yup
    .string()
    .required('Username cannot be empty')
    .matches(/^[a-z]+$/, 'Username must contain only lowercase letters')
    .matches(/^\S*$/, 'Username cannot contain spaces'),
  email: yup
    .string()
    .required('Email cannot be empty')
    .matches(/@/, 'Invalid Email, must contain "@"'),
  password: yup.string().required('Password cannot be empty'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Password must match')
    .required('Password cannot be empty'),
});
const Form = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [refferalCode, setRefferalCode] = useState('');
  const handleClick = () => setShow(!show);
  const checkRefferal = async () => {
    try {
      await axios.post('http://localhost:8000/api/verify-refferal', {
        refferal_number: refferalCode,
      });

      alert('Refferal exist');
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data.message || error.message;
        alert(errorMsg);
      }
    }
  };
  const formik = useFormik({
    initialValues: {
      nama_lengkap: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      refferal_number: '',
    },
    // validationSchema,
    onSubmit: async (values) => {
      try {
        let roleId;
        if (values.role == 'customer') {
          roleId = 1;
        } else {
          roleId = 2;
        }
        await axios.post(baseUrl + '/api/register', {
          nama_lengkap: values.nama_lengkap,
          username: values.username,
          email: values.email,
          password: values.password,
          roleId,
          refferal_number: refferalCode,
        }),
          alert('Register success'),
          router.push('/login');
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
          <Label htmlFor="fullname" value="Full name" />
        </div>
        <TextInput
          name="nama_lengkap"
          type="text"
          placeholder="John Doe"
          required
          onChange={formik.handleChange}
          value={formik.values.nama_lengkap}
          onBlur={formik.handleBlur}
        />
        {formik.errors.nama_lengkap && formik.touched.nama_lengkap && (
          <p className="mt-1 text-sm text-red-500">
            {formik.errors.nama_lengkap}
          </p>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          name="username"
          type="text"
          placeholder="johndoe"
          required
          onChange={formik.handleChange}
          value={formik.values.username}
          onBlur={formik.handleBlur}
        />
        {formik.errors.username && formik.touched.username && (
          <p className="mt-1 text-sm text-red-500">{formik.errors.username}</p>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="email" />
        </div>
        <TextInput
          name="email"
          type="text"
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

      <div className="flex flex-row justify-center gap-3">
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Repeat" />
          </div>
          <TextInput
            name="confirmPassword"
            type={showConfirm ? 'text' : 'password'}
            placeholder="Repeat Password"
            required
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
          />

          <button onClick={() => setShowConfirm(!showConfirm)} type="button">
            <FontAwesomeIcon icon={showConfirm ? faEye : faEyeSlash} />
          </button>

          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="role" value="Role" />
        </div>
        <select
          name="role"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.role}
        >
          <option value="customer">Customer</option>
          <option value="organizer">Organizer</option>
        </select>
      </div>
      {/*  */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullname" value="Refferal Number" />
        </div>
        <TextInput
          name="refferal_number"
          type="text"
          placeholder="Check Refferal"
          onChange={(e) => setRefferalCode(e.target.value)}
          value={refferalCode}
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={checkRefferal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Check Refferal
          </button>
        </div>
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
