import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error('Could not fetch due to server error');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setIsPending(false);
            })
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;