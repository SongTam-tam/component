import React from 'react';
import GlobalStyle from './styled/GlobalStyld';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './common/LayOut';
import { Hara, Login, Main, NotFile, Shop, ShopDetail } from './page';
const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="hara" element={<Hara />} />
                        <Route path="login" element={<Login />} />
                        <Route path="shop">
                            <Route index element={<Shop />} />
                            <Route path=":shopDetailID" element={<ShopDetail />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
