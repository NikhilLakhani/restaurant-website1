import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    console.log('Menu Component render() is invoked');
    const menu = props.dishes.map((dish) => {
        // console.log(dish);
        return (
            <div key={dish.id} className="col-12 col-md-5 mb-5">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        </div>
    );
}

export default Menu;