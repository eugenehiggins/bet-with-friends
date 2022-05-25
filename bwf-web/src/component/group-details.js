import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import useFetchGroup from '../hooks/fetch-group';
import {DateTime} from 'luxon';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import {styled} from '@mui/material/styles';
import {makeStyles} from '@mui/material/styles';

const classes = {
    fontSize: '18px',
    marginRight: '3px',
    marginTop: '10px',
}

const DateTimeBlock = styled('div') (({ theme }) => ({

}))
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
                        const format = "yyyy-MM-dd'T'HH:mm:ss'Z'"
                        const eventTime = DateTime.fromFormat(event.time, format)
                        return <div key={event.id}>
                            <p>{event.team1} VS {event.team2}</p>
                            <p>
                                {/*<CalendarIconStyle><CalendarMonthIcon /></CalendarIconStyle>*/}
                                <CalendarMonthIcon
                                    sx={{
                                        fontSize: '18px',
                                        marginRight: '3px',
                                        marginTop: '10px',
                                    }}
                                />
                                {eventTime.toSQLDate()} <AvTimerIcon/> {eventTime.toFormat('HH:mm')}</p>
                        </div>
                    })}
                </>
            }
        </>
    )
}

export default GroupDetails;