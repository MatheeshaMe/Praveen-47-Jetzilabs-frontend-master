import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import NftBot from './pages/NftBot/NftBot';

// redux

// import images
import AvatarImg from './assets/images/avatar.png';
import { getUser, initUser } from './features/userSlice';


function App() {

  const dispatch = useDispatch();

  // states
  const [user, setUser] = useState({
    avatarUrl: AvatarImg,
    name: 'XDIAJDNVKJALKMDV',
    id: '1651'
  });

  dispatch(getUser(user));

  return (
    <div className="App">
      test 123
        {/* <Routes>
          <Route path="/bot" element={<NftBot />} />
        </Routes> */}
    </div>
  );
}

export default App;
