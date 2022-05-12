import {useEffect, useState} from 'react';
import {getGroup} from '../services/group-services';

const useFetchGroup = (groupId) => {
    const [group, setGroup] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await getGroup(groupId)
                .catch(error => setError(error))
            setGroup(data);
            setLoading(false)
        }
        getData();
    }, [groupId]);


    return [group, loading, error]
}

export default useFetchGroup;