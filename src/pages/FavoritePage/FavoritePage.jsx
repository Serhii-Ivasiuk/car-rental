// Components
import {
    Section,
    PageTitle,
    CardList,
    NoResults,
    RedirectionLink,
} from 'components';
// Hooks
import { useFavorites } from 'hooks';

export const FavoritePage = () => {
    const [favorites, toggleFavorites] = useFavorites();

    return (
        <Section>
            <PageTitle hidden>Favorite</PageTitle>

            {favorites.length ? (
                <CardList data={favorites} toggleFavorites={toggleFavorites} />
            ) : (
                <NoResults>
                    <span>Your favorites list is empty. </span>
                    <RedirectionLink to="/rental">
                        Add some cars
                    </RedirectionLink>
                </NoResults>
            )}
        </Section>
    );
};
