import GroupList from './group-list';
import {Switch, Route, Routes} from 'react-router-dom';
import GroupDetails from './group-details';

const Main = (props) => {

    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<GroupList />} />
                <Route exact path="/details/:id" element={<GroupDetails />} />
            </Routes>

        </div>
    )
}

export default Main;