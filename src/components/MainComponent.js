import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from './AboutComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import DishDetail from "./DishdetailComponent";
import {connect} from 'react-redux';
import {addComment, fetchDishes, fetchComments, fetchPromos} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps=(state)=>{
    return{
        dishes:state.dishes,
        comments:state.comments,
        leaders:state.leaders,
        promotions:state.promotions
    }
}

const mapDispatchToProsps=(dispatch)=>({
    addComment: (dishId, rating, author, comment)=>dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes:()=>{dispatch(fetchDishes())},
    fetchComments:()=>{dispatch(fetchComments())},
    fetchPromos:()=>{dispatch(fetchPromos())},
    resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))}
})

class Main extends Component {
    constructor(props) {
        console.log('Main Component constructor() is invoked');
        super(props);
    }

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    componentDidUpdate(){
        console.log("main update");
    }



    render() {
        console.log('Main Component render() is invoked');

        const HomePage=()=>{
            return(
                <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesFailed={this.props.dishes.errMess}

                    leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
                    
                    promotion={this.props.promotions.promotions.filter((promotion)=>promotion.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosFailed={this.props.promotions.errMess}
                />
            );
        }

        const DishWithId=({match})=>{
            return(
                <DishDetail 
                    d={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    
                    comments={this.props.comments.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMess={this.props.comments.errMess}
                    addComment={this.props.addComment}
                />
            )
        }

        return (
            <div>
                <Header/>
                <div className='mt-4 mb-4'>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu/:dishId' component={DishWithId}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>} />
                    <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                    <Route exact path='/about' component={()=> <About leaders={this.props.leaders}/>} />
                    <Redirect to='/home' />
                </Switch>
                </div>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail d={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/> */}
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProsps)(Main));
