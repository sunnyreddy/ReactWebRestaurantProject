import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments: state.comments
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
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
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}  />}/>
          <Route exact path="/menu" 
                  component={ () => <Menu dishes={this.props.dishes} onDishclick={(dishId) => this.onDishSelect(dishId)} /> }  />
          <Route path="/menu/:dishId" component={({match}) => <DishDetail 
              dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} /> } />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={this.state.dishes} onDishclick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));