import UserSearch from './MainPage/UserSearch';
import * as S from './AppStyles';
const App = () => {
    return (
        <S.App>  
        <S.AppHead>
            <S.AppH1>Поиск пользователей GitHub</S.AppH1>
           <UserSearch />
        </S.AppHead>
        </S.App>
    )
}

export default App;