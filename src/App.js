import {Fragment} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Following from 'pages/Following'  
import { publicRoutes } from 'routes'
import {DefaultLayout} from 'components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {publicRoutes.map((route, index)=>{
            const Page= route.component

            let Layout= DefaultLayout
            if(route.layout){
              Layout = route.layout
            }else if(route.layout===null ){
              Layout=Fragment
            }
            return <Route key={index} path={route.path} element={
            <Layout>
              <Page/>
              </Layout>} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
