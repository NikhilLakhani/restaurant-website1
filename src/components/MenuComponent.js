import React,{Component} from 'react';
import {Card, CardBody, CardFooter, CardImg, CardText, CardTitle, CardHeader, CardImgOverlay} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            selectedDish:null
        };
        console.log('Menu Component constructor() is invoked');
    }

    componentDidMount()
    {
        console.log('Menu Component componentDidMount() is invoked');
    }

    onDishSelect(dish)
    {
        this.setState({
            selectedDish:dish
        });
    }

    // renderDish(dish)
    // {
    //     if(dish!=null)
    //     {
    //         return(
    //             <Card>
    //                 <CardHeader>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                 </CardHeader>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name}/>
    //                 <CardBody>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     else
    //     {
    //         return(
    //             <div></div>
    //         );
    //     }
    // }

    render()
    {
        console.log('Menu Component render() is invoked');
        const menu=this.props.dishes.map((dish)=>{
            return(
            <div key={dish.id} className="col-12 col-md-5 mt-5">
                <Card onClick={()=> this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
            );
        });
        return(
            <div>
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
                <DishDetail d={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;