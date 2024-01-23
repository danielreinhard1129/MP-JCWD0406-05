import { useAppSelector } from '@/lib/hooks';
import Transaction from './CardTransaction';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/app/baseUrl/baseUrl';
import axios from 'axios';
import { User } from '@/types/types.user';
import { Avatar } from 'flowbite-react';

const ProfileCard: React.FC = () => {
  const [dataPerson, setDataPerson] = useState<User>();
  const [showModal, setShowModal] = useState(false);
  console.log('ini data', dataPerson);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const keepLogin = async () => {
      try {
        const { data } = await axios.get(baseUrl + '/api/keeplogin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDataPerson(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    keepLogin();
  }, []);
  // const totalPoints = dataPerson?.Point.reduce(
  //   (total, point) => total + point.amount,
  //   0,
  // );
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col">
                <Avatar className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />

                <h1 className="text-xl font-bold">
                  {dataPerson?.nama_lengkap}
                </h1>
                <p className="text-gray-700">@{dataPerson?.username}</p>
                <p className="text-gray-700">{dataPerson?.email}</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Other
                </span>
                <ul>
                  <li className="mb-2">
                    My Refferal: {dataPerson?.refferal_number}
                  </li>
                  <div>
                    <button
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      My Point
                    </button>
                    {showModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                  My Point
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                              {/*body*/}
                              <div className="relative p-6 flex-auto">
                                <h3>My Point</h3>
                                {dataPerson?.Point.map((point, index) => (
                                  <div key={index}>
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                      Amount: {point.amount}
                                    </p>
                                    <p>
                                      Expired: {point.expired.toLocaleString()}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              {/*footer*/}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Other</h2>
              <Transaction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

// {
//   dataPerson?.Point.map((point, index) => (
//     <div key={index}>
//       Amount: {point.amount}, Expired: {point.expired}
//     </div>
//   ));
// }
