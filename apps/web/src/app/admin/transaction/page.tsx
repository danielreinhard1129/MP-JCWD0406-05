'use client';

import SidebarPromoter from '../components/SideBar';
import TransactionsData from '../components/TransactionCard';

const VouchersPage = () => {
  return (
    <div className="h-screen flex collapse md:visible">
      <SidebarPromoter activeLink={'dashboard'} />
      <div className=" w-screen   text-black">
        <div>
          <h1 className="text-black text-7xl uppercase m-5 font-extrabold">
            Transaction
          </h1>
        </div>
        <div>
          <TransactionsData />
        </div>
      </div>
    </div>
  );
};

export default VouchersPage;
