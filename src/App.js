import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Following from 'pages/Following/Following';
import Profile from 'pages/Profile';
import UpLoad from 'pages/UpLoad';
import Search from 'pages/Search';
import { publicRoutes } from 'routes';
import { DefaultLayout } from './Layout';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
