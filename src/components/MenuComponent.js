import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

class Menu extends Component {

    componentDidMount(){
        console.log("menu mount");
    }

    componentDidUpdate(){
        console.log("menu update");
    }

    render() {

        console.log('Menu Component render() is invoked');
        const menu = this.props.dishes.map((dish) => {
            // console.log(dish);
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;