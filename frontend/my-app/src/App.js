import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Forms from './components/pages/Forms';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Category from './components/pages/EventoPages/Category'
import Home from './components/pages/EventoPages/Home';
import Navbar from './components/Navbar/Navbar';
import Dashbord from './components/pages/Eventodasbord/Dashbord'
import Eventshow from './components/EventShow/Eventshow';
import HomeEvents from './components/Events/HomeEvents';
import Events from './components/Events/Events';
import CloseEvents from './components/Events/CloseEvents';
import SuperAdminDashbord from './components/pages/SuperAdmin/SuperAdminDashbord';
import NoteContext from './context/NotContext';
import Users from './components/user/Users';
import Organisers from './components/user/Organisers';
import UserEdit from './components/user/UserEdit';
import Cart from './components/pages/EventoPages/Cart';
import UserDashbord from './components/pages/EventoPages/UserDashbord';
import Futter from './components/futter/Futter'
import Payment from './components/Payment/Payment';
import UserTekets  from './components/userDashbord/UserTekets';
import Teket from './components/Teket/Teket';
import BeOrganizer from './components/userDashbord/BeOrganizer';
import CreateOrgamisers from './components/user/CreateOrgamisers';
import OrganisersDocuments from './components/user/OrganisersDocuments';
import ORGInPros from './components/userDashbord/ORGInPros';
import CartConfromCard from './components/CartConfromCard/CartConfromCard';
import { display } from '@mui/system';
import TeketSucsess from './components/TeketSucsess/TeketSucsess';



function App() {
  const context = useContext(NoteContext)
  return (
    <div className="App h-100 w-100" style={{overflowY:`${context.cartADD===true?'hidden':'scroll'}`}}>
      <Routes>
        <Route path='' element={<Forms />} />
      </Routes>
      {context.showNav && <Navbar />}
      <Routes>
        <Route path='/super-admin-dashbord' element={<SuperAdminDashbord />} >
          <Route path='home/:desh1?' element={<HomeEvents />} />
          <Route path='users/:desh1?' element={<Users />} />
          <Route path='organisers/:desh1?' element={<Organisers />} />
          <Route path='curent-events/:desh1?' element={<Events />} />
          <Route path='closed-events/:desh1?' element={<CloseEvents />} />
          <Route path='user-edit/:desh1?' element={<UserEdit />} />
          <Route path='create-orgamiser/:desh1?' element={<CreateOrgamisers />} >
              <Route path='documents/:id1?' element={<OrganisersDocuments />} />
          </Route>
        </Route>
        <Route path='/admin-dashbord' element={<Dashbord />} >
          <Route path='home/:desh?/:ref?' element={<HomeEvents />} />
          <Route path='curent-events/:desh?/:ref?' element={<Events />} />
          <Route path='closed-events/:desh?/:ref?' element={<CloseEvents />} />
        </Route>
        <Route path='/evento' element={<Home />} />
        <Route path='/category/:cteg?' element={<Category />} >
          <Route path=':cteg2?' element={< Category />} />
          <Route path=':cteg1?' element={< Category />} />
        </Route>
        <Route path='/event/:eveid?' element={<Eventshow />} />
        <Route path='/User-dashbord-all' element={<UserDashbord/>}>
          <Route path='organizer' element={<BeOrganizer />}/>
          <Route path='organizer-in-process' element={<ORGInPros />}/>
          <Route path='Tekets' element={<UserTekets />}/>
          <Route path='cart' element={<Cart />} />
          <Route path='Favorite' element={<UserTekets />}/>
          <Route path='Teket/:tkt?' element={<Teket />}/>
        </Route>
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Routes>
        <Route path='Evento/tecet-success/:tktsuc?' element={<TeketSucsess />} />
      </Routes>
      {context.cartADD===true? <CartConfromCard />:console.log('lol')}
     {context.showNav && <Futter/>}
    </div>
  )
}
export default App;
