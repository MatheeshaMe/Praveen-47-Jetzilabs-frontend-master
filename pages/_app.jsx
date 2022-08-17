import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Layout from '../src/components/Layout/Layout';
import { store } from '../src/store/store';
import AvatarImg from '../src/assets/images/avatar.png';
import { useRouter } from 'next/router';

import './index.css';


export const Router = {
    NFT_BOT: "/",
    Tasks: "tasks",
    SECONDARY_WALLETS: "secondarywallets",
    ALERTS: "ALERTS",
    STAKE: "stake",
    CONFIGS: "configs"
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [route, setRoute] = useState(Router.NFT_BOT);

  const [user, setUser] = useState({
    avatarUrl: AvatarImg,
    name: 'XDIAJDNVKJALKMDVadfsdf',
    id: '1651'
  });

  useEffect(() => {
      // console.log(router.pathname.toString().slice(1), '_app');
      setRoute(router.pathname.toString().slice(1));
  },[router]);

  return (
    
      <div className='App' >
        <Provider store={ store }>
          <Layout user={user} route={route} setRoute={setRoute} >
            <Component {...pageProps} setRoute={setRoute} />
          </Layout>
        </Provider>
      </div>
  );
}

export default MyApp;