import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, 
         BreadcrumbItem, ListGroup, ListGroupItem, Button, Modal, Label, Col,
         ModalBody, ModalFooter,  ModalHeader, Row, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, Errors, LocalForm} from 'react-redux-form';

// validators
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

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
            <div>
            <h4>Comments</h4>
            <ListGroup>
                { 
                  comments.map((comment) => {
                    return (
                        <div>
                            <ListGroupItem key={comment.id}>{comment.comment}</ListGroupItem>
                            <div>{"--" + comment.author + "  " + comment.date}</div>
                        </div>
                    );
                  })
                }
            </ListGroup>
            <CommentForm></CommentForm>
            </div>
        );
    else
        return(
            <div></div>
        );
}

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
    }

    toggleModal() {
        // console.log("tm",this.state.isModalOpen)
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleCommentSubmit(values) {
        console.log("comment" + JSON.stringify(values));
        alert(JSON.stringify(values));
    }

    render() {
        return (
            <div>
            <br></br>
            <Button onClick={() => {this.toggleModal()}}>Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={() => this.toggleModal()}>Comment Form</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>
                        <Row className='form-group'>
                            <Label htmlFor="name" md={2}>Rating</Label>
                            <Col md={10}>
                                <Control.select model=".rating" id="rating" name="rating"className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="name" md={2}>Name</Label>
                            <Col md={10}>
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="comment" md={2}>Comment</Label>
                            <Col md={10}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control"
                                    validators={{required}}
                                >
                                </Control.textarea>
                                <Errors
                                 className="text-danger"
                                 model=".comment"
                                 show="touched"
                                 messages={{
                                    required: 'Required',
                                 }}
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        )
    }
}

const DishDetail = (props) => {
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