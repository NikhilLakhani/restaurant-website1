import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    console.log('Menu Component render() is invoked');
    const menu = props.dishes.map((dish) => {
        // console.log(dish);
        return (
            <div key={dish.id} className="col-12 col-md-5 mb-5">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
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

export default Menu;