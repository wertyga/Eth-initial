import Main from '../components/Main/Main';
import NotFound from '../components/404/404';

import Web3Context from './web3Config';

export default [
    {
        path: '/',
        exact: true,
        render: () => {
            return  <Web3Context.Provider>
                        <Main/>
                    </Web3Context.Provider>
        }
    },
    {
        path: '/*',
        component: NotFound
    }
]