// Libs
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { BeatLoader, ClipLoader } from 'react-spinners';
// Components
import { NavBar } from 'components/NavBar/NavBar';
// Styled components
import { Page, Header, Container, Footer } from './Layout.styled';
import { Overlay } from 'components/Shared/Modal/Modal.styled';
// Theme
import { theme } from 'styles';

export const Layout = () => {
    return (
        <>
            <Page>
                <Header>
                    <Container>
                        <NavBar />
                    </Container>
                </Header>
                <main>
                    <Container>
                        <Suspense
                            fallback={
                                <Overlay>
                                    <BeatLoader
                                        color={theme.colors.bgAccent}
                                        size={20}
                                    />
                                </Overlay>
                            }
                        >
                            <Outlet />
                        </Suspense>
                    </Container>
                </main>
                <Footer>
                    <Container>
                        ©2023 Click and drive. All rights reserved.
                    </Container>
                </Footer>
            </Page>

            <ToastContainer autoClose={3000} position="bottom-right" />
        </>
    );
};
