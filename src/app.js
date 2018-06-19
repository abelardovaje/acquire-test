import React from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/scss/bootstrap.scss';
import './style.scss';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cards:[
                { id:1,status:false,show:false,image:"https://shibecdn.azureedge.net/cats/8a46d765b1fa3cf9300641b45c483d0198748b51.jpg"}, 
                { id:2,status:false,show:false,image:'https://shibecdn.azureedge.net/cats/6d7614fc80f0319336b0a0f3af3a41e050182449.jpg'},
                { id:3,status:false,show:false,image:'https://shibecdn.azureedge.net/cats/46a9dff816ad8f2e990ffeb851f138a34880f3e9.jpg'},
                { id:4,status:false,show:false,image:'https://shibecdn.azureedge.net/cats/09789aa135951d28b144863a9f835244c897e214.jpg'}          
            ],
            show:true
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.showImages = this.showImages.bind(this);
    }

    componentDidMount(){

    }

    handleToggle(id){
      
        let newState = {...this.state};
        for(var x in newState.cards){
            if(newState.cards[x].status){
                if(newState.cards[x].id != id)
                    newState.cards[x].status = false;
            }

            if(newState.cards[x].id == id){       
                newState.cards[x].status = !newState.cards[x].status;       
            }
        }

        this.setState({
            cards:newState.cards
        })
        
    }

    createCards(){
        var cards = this.state.cards.map((card,index)=>{
            return (
                <div className="col col-lg-3 card-container" key={index}>
                    <div className="card">
                        <div 
                        onClick={()=>this.handleToggle(card.id)}
                        className={`card-body justify-content-center align-items-center text-center`}
                        style={{
                            background:(card.status) ? 'green':(card.show) ? `url(${card.image})`:'red'
                        }}>
                           <span>{card.id}</span>
                        </div>


                    </div>
                </div>
            )
        })
        
        return cards;
    }


    showImages(){
        var newState = {...this.state}
        for(var x in newState.cards){
            newState.cards[x].status = false;
            newState.cards[x].show = true;
        }

        this.setState({
            cards:newState.cards
        })
    }

    render(){
        return(
            <div className="main-container">
                <div className="container">
                    <div className="row justify-content-md-center">
                       {this.createCards()}
                    </div>
                </div>

                <div className="container">
                <br/>
                    <button onClick={this.showImages}
                    >show images</button>
                </div>
            </div>

        )
    }

}


render(<App/>,document.getElementById('root'));