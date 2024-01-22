import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const FormRefferal = () => {
  const [inputRefferal, setInputRefferal] = useState('');

  const handleButton = async () => {
    try {
      await axios.post('http://localhost:8000/api/verify-refferal', {
        refferal_number: inputRefferal,
      });

      alert('Refferal exist');
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data.message || error.message;
        alert(errorMsg);
      }
    }
  };
  return (
    <div className="my-4 p-4 shadow-md justify-center">
      <div className="flex items-center space-x-8">
        <div className="bg-gray-200 p-2 rounded-full">
          {/* Avatar akan disematkan di sini */}
        </div>
        <input
          type="text"
          onChange={(e) => setInputRefferal(e.target.value)}
          placeholder="Check Code Refferal"
          maxLength={150}
          value={inputRefferal}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-end mt-2">
        <button
          onClick={handleButton}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Check Refferal
        </button>
      </div>
    </div>
  );
};

export default FormRefferal;
