import UploadStats from './UploadStats/UploadStats';
import statsData from '../data/data.json';

import ProfileCard from './ProfileCard/ProfileCard';
import profileData from '../data/user.json';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <ProfileCard profile={profileData} />
      <UploadStats title={'Upload stats'} stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
