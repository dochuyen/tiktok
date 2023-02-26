//Layout


import { HeaderOnly } from 'Layout';
import Home from 'pages/Home';
import Following from 'pages/Following/Following';
import Profile from 'pages/Profile';
import UpLoad from 'pages/UpLoad/Upload';
import Search from 'pages/Search';
import { Header } from 'Layout/component/Header';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: `/profile/:id`, component: Profile },
  { path: '/upload', component: UpLoad, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];



const privateRoutes = [];

export { publicRoutes, privateRoutes };
