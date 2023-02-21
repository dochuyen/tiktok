//Layout
<<<<<<< HEAD
import { HeaderOnly } from 'components/Layout';

import Home from 'pages/Home';
import Following from 'pages/Following';
import Profile from 'pages/Profile';
import UpLoad from 'pages/UpLoad';
import Search from 'pages/Search';
import Header from 'components/Layout/component/Header';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: UpLoad, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];
=======
import { HeaderOnly } from "Layout";

import Home from "pages/Home";
import Following from "pages/Following/Following";
import Profile from "pages/Profile";
import UpLoad from "pages/UpLoad";
import Search from "pages/Search";
import Header from "Layout/HeaderOnly/Header";
import Live from "pages/Live/Live";
import { SideBar } from "Layout/DefaultLayout/SideBar";
const publicRoutes=[
    {path:"/", component:Home},
    {path:"/following", component:Following},
    {path:'/profile/:id', component:Profile},
    {path:"/live", component:Live},
    {path:"/upload", component:UpLoad, layout:HeaderOnly},
    {path:"/search", component:Search, layout:null}
]
>>>>>>> 9c254c3f7aab0c342b295310ec6b5344cae49f62

const privateRoutes = [];

export { publicRoutes, privateRoutes };
