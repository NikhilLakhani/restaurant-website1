import React from 'react';
import { Card, CardText, CardImg, CardTitle, CardBody } from 'reactstrap';

function RenderDish({ds}) {
    return (
        <div className='col-12 col-md-5 mb-5'>
            <Card>
                <CardImg src={ds.image} />
                <CardBody>
                    <CardTitle>{ds.name}</CardTitle>
                    <CardText>{ds.description}</CardText>
                </CardBody>
            </Card>
        </div>

    );
}

function RenderComments({comments}) {
    const cmts = comments.map((cmt) => {
        return (
            <li key={cmt.id}>
                <p>{cmt.comment}</p>
                <p>--{cmt.author}, {new Intl.DateTimeFormat('en-US',
                    { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmt.date)))}
                </p>
            </li>
        );
    });
    return (
        <div className='col-12 col-md-5 mb-5'>
            <h2>Comments</h2>
            <ul className='list-unstyled ml-0'>{cmts}</ul>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.d != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <RenderDish ds={props.d} />
                    <RenderComments comments={props.d.comments} />
                </div>
            </div>
        )
    }
    else {
        return (<div></div>);
    }
}
export default DishDetail;