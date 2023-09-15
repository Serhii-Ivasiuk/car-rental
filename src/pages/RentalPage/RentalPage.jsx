// Libs
import { useEffect, useState } from 'react';
// Api
import { getAdverts } from 'api/advertsApi';
// Components
import { AdvertList } from 'components/AdvertList/AdvertList';
// Hooks
import { useFavorites } from 'hooks/useFavorites';
// Constants
import { LIMIT, CANCELED_ERROR, ERROR_MESSAGE } from 'constants/constants';

export const RentalPage = () => {
    const [adverts, setAdverts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [isEndOfResults, setIsEndOfResults] = useState(false);
    const [, toggleFavorites] = useFavorites();

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError('');
                const data = await getAdverts(
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
                    <AdvertList
                        data={adverts}
                        toggleFavorites={toggleFavorites}
                    />

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
