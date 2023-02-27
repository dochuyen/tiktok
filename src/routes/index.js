//Layout
import { HeaderOnly } from 'Layout';
import Home from 'pages/Home';
import Following from 'pages/Following/Following';
import Profile from 'pages/Profile';
import UpLoad from 'pages/UpLoad/Upload';
import { Header } from 'Layout/component/Header';
import Login from 'pages/Login/Login';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
];



const privateRoutes = [];

export { publicRoutes, privateRoutes };
