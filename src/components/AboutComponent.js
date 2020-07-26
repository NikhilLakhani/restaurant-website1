import React from 'react';
import { Card, CardBody, CardHeader, Breadcrumb, BreadcrumbItem, Media} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {Fade, Stagger} from 'react-animation-components';

function RenderLeader({ leader }){
    return (
        <div className='m-5'>
            <Fade in>
            <Media>
                <div className='col-12 col-md-2'>
                    <Media object src={baseUrl+leader.image} alt={leader.name} width='100%' />
                    <Media className='d-md-none' style={{textAlign:"center"}} heading>{leader.name}</Media>
                </div>
                <div className='d-none d-md-block col col-md'>
                    <Media body>
                        <h3>{leader.name}</h3>
                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>
                    </Media>
                </div>
            </Media>
            </Fade>
        </div>
    );
}

function RenderLeaders({ leaders, isLoading, errMess }) {
    
    if(isLoading)
    {
        console.log(isLoading);
        return(
            <Loading/>
        )
    }
    else if(errMess)
    {
        return(
            <h4>{errMess}</h4>
        )
    }
    else
    {
        const cleaders = leaders.map((leader) => {
            return (
                <div className='col-12' key={leader.id}>
                    <Stagger in>
                    <RenderLeader leader={leader} />
                    </Stagger>
                </div>
            )
        })
        return (
        <div className='row'>
            {cleaders}
        </div>
        )
    }
}

function About(props) {
    
    return (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className='row row-content'>
                <div className='col-12 col-md-6'>
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className='col-12 col-md-5'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>Facts at a glance</CardHeader>
                        <CardBody>
                            <dl className='row p-1'>
                                <dt className='col-6'>Starting</dt>
                                <dd className='col-6'>3 Feb, 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12'>
                    <Card>
                        <CardBody className='bg-faded'>
                            <blockquote className='blockquote'>
                                <p className='mb-0'>You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className='blockquote-footer'>Yogi Berra,
                                        <cite title='Source Title'>
                                        The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014
                                        </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 mt-5'>
                    <h3>Corporate Leadership</h3>
                </div>
            </div>
            <RenderLeaders leaders={props.leaders.leaders} isLoading={props.leaders.isLoading} errMess={props.leaders.errMess} />
        </div>
    );
}
export default About;