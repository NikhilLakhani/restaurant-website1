import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import {Switch, Route, Redirect} from 'react-router-dom';
import DishDetail from "./DishdetailComponent";

class Main extends Component {
    constructor(props) {
        console.log('Main Component constructor() is invoked');
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    componentDidMount(){
        console.log("main mount");
    }

    componentDidUpdate(){
        console.log("main update");
    }



    render() {
        console.log('Main Component render() is invoked');

        const HomePage=()=>{
            return(
                <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                    leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
                    promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
                />
            );
        }

        const DishWithId=({match})=>{
            return(
                <DishDetail 
                    d={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]} 
                    comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
                    
                />
            )
        }

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu/:dishId' component={DishWithId}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
                    <Route exact path='/contactus' component={Contact}/>
                    <Redirect to='/home' />
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail d={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/> */}
                <Footer/>
            </div>
        );
    }
}

export default Main;
