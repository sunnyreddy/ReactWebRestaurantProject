import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        comments: COMMENTS,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={() => <HomePage 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}  />}/>
          <Route exact path="/menu" 
                  component={ () => <Menu dishes={this.state.dishes} onDishclick={(dishId) => this.onDishSelect(dishId)} /> }  />
          <Route path="/menu/:dishId" component={({match}) => <DishDetail 
              dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} /> } />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={this.state.dishes} onDishclick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer/>
      </div>
    );
  }
}

export default Main;