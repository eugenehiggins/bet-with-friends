import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getGroups} from '../services/group-services';

const GroupList = (props) => {

    const [groups, setGroups] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        // return () => {
        const getData = async () => {
            await getGroups()
                .then(data => {
                    setGroups(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error)
                    setError(true);
                    setLoading(false);
                })
        }
        getData();
        // };
    }, []);

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div >
                <div>
                    { groups && groups.map((group) => {
                        return (
                            <Link key={group.id} to={`/details/${group.id}/`}>
                                <p >{group.name}: {group.location}</p>
                            </Link>
                        )
                    })}
                </div>
        </div>
    );
}

export default GroupList;