

import './main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastWinner: 0,
            numberOfBets: 0,
            minimumBet: 0,
            totalBet: 0,
            maxAmountOfBets: 0,
            ContractInstance: props.initContract('0xe8a6692b1beb8bed0735514a797ed84c61bd9a87')
        };
    };

    voteNumber (number) {
        this.state.ContractInstance.bet(7, {
            gas: 300000,
            from: web3.eth.accounts[0],
            value: web3.toWei(0.1, 'ether')
        }, (err, result) => {
            // Result is the transaction address of that function
            console.log(err, result)
        })
    };

    render(){
        return (
            <div className="main-container">
                <h1>Bet for your best number and win huge amounts of Ether</h1>
                <div className="block">
                    <h4>Timer:</h4> &nbsp;
                    <span ref="timer"> {this.state.timer}</span>
                </div>
                <div className="block">
                    <h4>Last winner:</h4> &nbsp;
                    <span ref={node => this.lastWinner}>{this.state.lastWinner}</span>
                </div>
                <hr/>
                <h2>Vote for the next number</h2>
                <ul>
                    <li onClick={() => {this.voteNumber(1)}}>1</li>
                    <li onClick={() => {this.voteNumber(2)}}>2</li>
                    <li onClick={() => {this.voteNumber(3)}}>3</li>
                    <li onClick={() => {this.voteNumber(4)}}>4</li>
                    <li onClick={() => {this.voteNumber(5)}}>5</li>
                    <li onClick={() => {this.voteNumber(6)}}>6</li>
                    <li onClick={() => {this.voteNumber(7)}}>7</li>
                    <li onClick={() => {this.voteNumber(8)}}>8</li>
                    <li onClick={() => {this.voteNumber(9)}}>9</li>
                    <li onClick={() => {this.voteNumber(10)}}>10</li>
                </ul>
            </div>
        )
    }
};