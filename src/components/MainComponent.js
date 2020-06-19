import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        console.log('Main Component constructor() is invoked');
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
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
                <Home/>
            );
        }
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
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
