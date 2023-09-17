// Libs
import { Navigate, Route, Routes } from 'react-router-dom';
// Layout
import { Layout } from 'components/Layout/Layout';
// Helpers
import { lazyNamedModuleImport } from 'helpers/lazyModuleImport';
// Pages
const HomePage = lazyNamedModuleImport('HomePage');
const FavoritePage = lazyNamedModuleImport('FavoritePage');
const RentalPage = lazyNamedModuleImport('RentalPage');

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="rental" element={<RentalPage />} />
                <Route path="favorite" element={<FavoritePage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
