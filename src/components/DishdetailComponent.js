import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// class CommentForm extends Component{

//     toggleModal(){
        
//     }

//     render(){
//         return(
//             <Button outline onClick={() => this.toggleModal()}>
//                 <span className="fa fa-sign-in fa-lg"></span>
//              Submit Feedback
//             </Button>
//         );
//     }
// }

function RenderDish({dish}) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

function RenderComments({comments}) {
    if(comments != null)
        return(
            <ListGroup>
                { 
                  comments.map((comment) => {
                    return (
                        <ListGroupItem key={comment.id}>{comment.comment}</ListGroupItem>
                    );
                  })
                }
            </ListGroup>
        );
    else
        return(
            <div></div>
        );
}

const DishDetail = (props) => {
    // if(props.dish != null)
    //     return(
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-6">
    //                     <RenderDish dish={props.dish} />
    //                 </div>
    //                 <div className="col-6">
    //                     <RenderComments comments={props.dish.comments} />
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // else
    //     return(<div></div>);
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
}

export default DishDetail;