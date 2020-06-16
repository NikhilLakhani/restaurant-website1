import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";

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

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        });
    }

    render() {
        console.log('Main Component render() is invoked');

        return (
            <div>
                <Header/>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail d={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/>
                <Footer/>
            </div>
        );
    }
}

export default Main;
