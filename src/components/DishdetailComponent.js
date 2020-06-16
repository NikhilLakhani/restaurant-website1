import React, {Component} from 'react';
import {Card, CardText, CardImg, CardTitle, CardBody} from 'reactstrap';

class DishDetail extends Component{
    
    componentDidMount(){
        console.log("dish mount");
    }

    componentDidUpdate(){
        console.log("dish update");
    }

    render()
    {
        console.log("dish update");

        const ds=this.props.d;
        if(ds!=null)
        {
            const cmts=ds.comments.map((cmt)=>{
                return(
                    <li key={cmt.id}>
                        <p>{cmt.comment}</p>
                        <p>--{cmt.author}, {new Intl.DateTimeFormat('en-US', 
                            {year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(cmt.date)))}
                        </p>
                    </li>
                );
            });
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5 mt-5'>
                            <Card>
                                <CardImg src={ds.image} />
                                <CardBody>
                                    <CardTitle>{ds.name}</CardTitle>
                                    <CardText>{ds.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-12 col-md-5 mt-5'>
                            <h2>Comments</h2>
                            <ul className='list-unstyled ml-0'>{cmts}</ul>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    }
}
export default DishDetail;