// Libs
import { useEffect, useState } from 'react';
// Api
import * as API from 'api/advertsApi';
// Components
import { AdvertList } from 'components/AdvertList/AdvertList';

const LIMIT = 10;
const CANCELED_ERROR = 'CanceledError';
const ERROR_MESSAGE = 'Something went wrong... Please try again later.';

export const RentalPage = () => {
    const [adverts, setAdverts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [isEndOfResults, setIsEndOfResults] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError('');
                const data = await API.getAdverts(
                    page,
                    LIMIT,
                    abortController.signal
                );
                setAdverts(prevState => [...prevState, ...data]);
                if (data.length < LIMIT) setIsEndOfResults(true);
            } catch (error) {
                if (error.name === CANCELED_ERROR) {
                    setError('');
                } else {
                    setError(ERROR_MESSAGE);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [page]);

    const handleLoadMore = async () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <>
            {isLoading && <div>Loading...</div>}

            {error && <div>{error}</div>}

            {!isLoading && !error && adverts.length > 0 && (
                <>
                    <AdvertList data={adverts} />

                    {!isEndOfResults ? (
                        <button type="button" onClick={handleLoadMore}>
                            Load more
                        </button>
                    ) : (
                        <p>
                            Sorry, but that's all the cars we have for you at
                            the moment.
                        </p>
                    )}
                </>
            )}
        </>
    );
};
