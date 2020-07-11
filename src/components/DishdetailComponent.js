import React, { Component } from 'react';
import {
    Card, CardText, CardImg, CardTitle, CardBody, BreadcrumbItem, Breadcrumb,
    Modal, ModalBody, ModalHeader, Label, Button, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Errors, Control } from 'react-redux-form';

const required=(val)=>val && val.length;

const minLength=(len)=>(val)=>((val) && (val.length>=len)) || !(val);
const maxLength=(len)=>(val)=>!(val) || (val.length<=len);

function RenderDish({ ds }) {
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

function RenderComments(props) {
    const cmts = props.comments.map((cmt) => {
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
            <Button outline onClick={() => props.onclick()}>
                <span className='fa fa-pencil fa-lg'></span>{' '}Submit Comment
            </Button>
        </div>
    );
}

function CommentForm({ isModalOpen, onclick }) {

    const handelSubmit=(values)=>{
        onclick();
        alert("Current state is: "+JSON.stringify(values));
    }

    return (
        <Modal isOpen={isModalOpen} toggle={onclick}>
            <ModalHeader toggle={onclick}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values)=>handelSubmit(values)}>
                    <Row className='form-group'>
                        <Label md={12} htmlFor='rating'>Rating</Label>
                        <Col md={12}>
                            <Control.select model='.rating' className='form-control' id='rating' >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Label htmlFor="username" md={12}>Your Name</Label>
                        <Col md={12}>
                            <Control.text model='.username' name='username' id='username' className='form-control'
                            placeholder='Your Name'
                            validators={{
                                required, minLength:minLength(3), maxLength:maxLength(15)
                            }}
                            />
                            <Errors
                                className='text-danger'
                                model='.username'
                                show='touched'
                                messages={{
                                    required:"Required!",
                                    minLength:"Minimum 3 characters are required!",
                                    maxLength:"Maximum 15 characters are allowed"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Label htmlFor='comment' md={12}>Comment</Label>
                        <Col md={12}>
                            <Control.textarea model='.comment' className='form-control' rows='6' name='comment'
                            placeholder='Enter a comment' />
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                            <Button type='submit' color='primary'>Submit Comment</Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
    );
}

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        if (this.props.d != null) {
            return (
                <div className='container'>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.d.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.d.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <RenderDish ds={this.props.d} />
                        <RenderComments comments={this.props.comments} onclick={() => this.toggleModal()} />
                        <CommentForm isModalOpen={this.state.isModalOpen} onclick={() => this.toggleModal()} />
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }
}
export default DishDetail;