import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Following from 'pages/Following/Following';
import Profile from 'pages/Profile';
import UpLoad from 'pages/UpLoad/Upload';
import Login from 'pages/Login/Login';

import {HeaderOnly} from './Layout';
import { publicRoutes } from 'routes';
import { DefaultLayout } from './Layout';
import Layoutfake from 'Layout/Layoutfake/Layoutfake';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const PageFake=route.component

            let Layout = DefaultLayout;
            let LayoutFake=Layoutfake
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              LayoutFake = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <>
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
        
                  </>
                }
              />
            );
          })}
          <Route path='/login' element={<Login/>}/>
          <Route path='/upload' element={
            <HeaderOnly>
              <UpLoad/>
            </HeaderOnly>
          }></Route>
          <Route path='/profile/:id' element={
            <Layoutfake>
              <Profile/>
            </Layoutfake>
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
