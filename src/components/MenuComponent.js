import React,{Component} from 'react';
import {Card, CardBody, CardFooter, CardImg, CardText, CardTitle, CardHeader} from 'reactstrap';

class Menu extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            selectedDish:null
        };
    }

    onDishSelect(dish)
    {
        this.setState({
            selectedDish:dish
        });
    }

    renderDish(dish)
    {
        if(dish!=null)
        {
            return(
                <Card>
                    <CardHeader>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardHeader>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

    render()
    {
        const menu=this.props.dishes.map((dish)=>{
            return(
            <div key={dish.id} className="col-12 col-md-3 mt-5">
                <Card onClick={()=> this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardFooter>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardFooter>
                </Card>
            </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row col-12 col-md-6 mt-5">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;