import Chatroom from './components/Chatroom';
import './App.css';
import Login from './components/Login';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider'
import AddRoomModal from './components/Modal/AddRoomModal';
import InviteMember from './components/Modal/InviteMember';

function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} exact path='/login' />

            <Route component={Chatroom} exact path='/' />
          </Switch>
          <AddRoomModal />
          <InviteMember />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>





  );
}

export default App;
