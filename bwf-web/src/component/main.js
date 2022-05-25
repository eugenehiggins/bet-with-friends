import GroupList from './group-list';
import {Switch, Route, Routes} from 'react-router-dom';
import GroupDetails from './group-details';
import {useAuth} from '../hooks/use-auth';

const Main = (props) => {

  const {authData } = useAuth()

    return (
        <div className="main">
          { authData && <h3>{authData.user.username}</h3>}
            <Routes>
                <Route exact path="/" element={<GroupList />} />
                <Route exact path="/details/:id" element={<GroupDetails />} />
            </Routes>

        </div>
    )
}

export default Main;