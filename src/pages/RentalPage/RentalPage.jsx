// Libs
import { useEffect, useState } from 'react';
// Api
import * as API from 'api/advertsApi';
// Components
import { AdvertList } from 'components/AdvertList/AdvertList';

export const RentalPage = () => {
    const [adverts, setAdverts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [isEndOfResults, setIsEndOfResults] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await API.getAdverts(page);
                setError('');
                if (page === 1) {
                    setAdverts(data);
                } else {
                    setAdverts(prevState => [...prevState, ...data]);
                }
                if (data.length < API.limit) {
                    setIsEndOfResults(true);
                }
            } catch (error) {
                setError(error.response.data);
            } finally {
                setIsLoading(false);
            }
        })();
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
