import React from 'react';
import { baseUrl } from '@/app/baseUrl/baseUrl';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, TextInput } from 'flowbite-react';

const FormReset = () => {
  const router = useRouter();
  const searchToken = useSearchParams();
  const token = searchToken.get('token');
  console.log(token);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
      try {
        const { password, confirmPassword } = values;
        console.log(values);

        const { data } = await axios.patch(
          `${baseUrl}/api/reset-password`,
          {
            password,
            confirmPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(data);

        alert('reset succes');
        router.push('/login');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          alert(errorMsg);
        }
      }
    },
  });
  return (
    <div className=" justify-center p-10 items-center">
      <form
        className="flex  flex-w-full flex-col"
        onSubmit={formik.handleSubmit}
      >
        <div className=" items-center  py-2 px-3 rounded-2xl mb-4">
          <TextInput
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
          />
        </div>
        <div className=" items-center  py-2 px-3 rounded-2xl">
          <TextInput
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Confirm Password"
          />
        </div>
        <Button
          type="submit"
          className="flex hover:transition-all  w-full bg-blue-700 hover:bg-blue-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default FormReset;
