import { Switch, Route } from 'react-router-dom';



import routes from '../../common/routes';

class App extends React.Component {
    constructor() {
        super();
        // this.initWeb3 = web3Init();

    };

    render() {
        // const Web3Context = React.createContext({
        //     web3: this.initWeb3.web3,
        //     initContract: (address) => this.initWeb3.initContract(address)
        // });

        return (

                <Switch>
                    {routes.map((route, i) => <Route key={i} {...route}/>)}
                </Switch>
        
        );
    }
}

export default App;

