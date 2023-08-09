import { useState } from 'react';
import crossSvg from '../../img/cross.svg';
import * as S from '../AppStyles';

const CheckedUsers = ({ data, error, isLoading, searched }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const EmptyList = !isLoading && (!data || !data.items.length) && searched;
  
  const handleUserClick = async (user) => {
    setSelectedUser(user);
  }

  const handleCloseUserCard = () => {
    setSelectedUser(null); 
  }

  return(<S.UsersList>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.data.message}</div>}
      {EmptyList && <div>No users found. </div>}
      {data && (
        <div>
          {data.items.map((user) => (
            <S.ListItems key={user.id} onClick={() => handleUserClick(user)}>{user.login}</S.ListItems>
          ))}
          {selectedUser && (
          <S.UserInfo>
            <div>
              <S.SkipButton src = {crossSvg} alt = 'cross' onClick={handleCloseUserCard} />
            </div>
            <div>
              <S.UserAvatar src={selectedUser.avatar_url} alt = 'avatar' />
            </div>
            <div>
              <S.UserLogin>
                {selectedUser.login}
              </S.UserLogin>
            </div>
            <div>
              <S.UserId>Users id: {selectedUser.id}</S.UserId>
            </div>
          </S.UserInfo>
        )}
        </div>
      )}
    </S.UsersList>
  );
}
    
export default CheckedUsers;