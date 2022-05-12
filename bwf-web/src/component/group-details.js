import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { getGroup } from '../services/group-services';
import useFetchGroup from '../hooks/fetch-group';

const GroupDetails = (props) => {

    const { id } = useParams();

   const [data, loading, error] = useFetchGroup(id)
    const [ group, setGroup] = useState(null);

    useEffect(() => {
        setGroup(data)
        // console.log("data", data)
        // console.log("group", group)
        // console.log("loading", loading)
        // console.log("error from useFetchGroup", error)
    }, [data]);

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <>
            <Link to={'/'}>Back</Link>
            { group &&
                <>
                    <h1>{group.name}, {group.location}</h1>
                    <h2>{group.description}</h2>

                    <h3>Events:</h3>
                    { group.events && group.events.map( event => {
                        return <div key={event.id}>
                            <p>{event.team1} VS {event.team2}</p>
                        </div>
                    })}
                </>
            }
        </>
    )
}

export default GroupDetails;