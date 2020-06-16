import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dishes";
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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail d={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/>
            </div>
        );
    }
}

export default Main;
