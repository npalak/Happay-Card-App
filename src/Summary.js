import React from "react";
import './App.css';
import { Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class Summary extends React.Component {
    constructor() {
        super();
        this.state = {
            list: null,
            name: null,
            final_price: null,
            id: null,
            showHideDemo1: false,
            img_url: "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png",
            qty: 0,
        };
    }

    componentDidMount() {
        this.getCall();
    }

    getCall() {
        fetch("http://localhost:3000/card").then((response) => {
            response.json().then((result) => {
                this.setState({
                    list: result,
                    id: result.id
                })
            })
        })
    }
    create() {
        fetch('http://localhost:3000/card', {
            method: "Post",
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("restaurant has been added");
                this.getCall();
                this.setState({ showHideDemo1: !this.state.showHideDemo1 });
            })
        })

    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHideDemo1":
                this.setState({ showHideDemo1: !this.state.showHideDemo1 });
                break;
            default:
                this.setState({ showHideDemo1: !this.state.showHideDemo1 });
                break;

        }
    }

    render() {
        const { item, showHideDemo1} = this.state;


        return (
            <div>

                <p> <Link to="/card">&lt;-Back to home</Link></p>
                
                <div className="cardBlocks">
                    {this.state.list ?
                        <div className="cards">

                            <Card >
                                <card-Text style={{ marginLeft: "17px" }}>Order Summary(3 items) </card-Text>
                                <Card.Body>
                                    <Table striped bordered hover>
                                   
                                        <thead>
                                            <tr>
                                                
                                                <th>S.NO</th>
                                                <th>ITEMS</th>
                                                <th>Price</th>
                                                <th>QTY</th>
                                            </tr>
                                        </thead>
                                        {
                                            this.state.list.map((item, i) =>

                                                <tbody>
                                                    <tr><td>{item.id} </td>
                                                        <td>{item.name}</td>
                                                        <td>{item.final_price} </td>
                                                        <td style={{width:"40%",fontSize:'25px'}}>
                                                             <span className="counter" >
                                                                <button style={{color:'white',backgroundColor:'grey',borderRadius:'4px'}}
                                                                 onClick={(event)=>{this.setState({qty: this.state.qty + 1 })}}>+</button>
                                                               &nbsp;&nbsp; {item.qty}&nbsp;&nbsp;
                                                                <button  style={{color:'white',backgroundColor:'grey',borderRadius:'4px'}}
                                                                onClick={(event)=>{this.setState({ qty: this.state.qty - 1 })}}>-</button>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )}
                                        {showHideDemo1 &&
                                            <tbody>
                                                <tr
                                                    key={item} >
                                                    <td> <input onChange={(event) => { this.setState({ description: event.target.value }) }}
                                                        placeholder="description" />
                                                    </td>
                                                    <td> <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                                                        placeholder="name" /></td>
                                                    <td> <input onChange={(event) => { this.setState({ final_price: event.target.value }) }}
                                                        placeholder="final_price" />
                                                    </td>

                                                    <td><button onClick={() => { this.create() }}>save</button></td>
                                                </tr>
                                            </tbody>
                                        }

                                        <h6 style={{ color: 'blue' }}
                                            onClick={() => this.hideComponent("showHideDemo1")} >+Add more items</h6>
                                    </Table>




                                </Card.Body>
                            </Card>

                        </div>
                        : <p>please wait........</p>
                    }

                    <Card>
                        <Card.Body>
                            <p>Price Details</p><hr />
                            <table>
                                <thead>
                                    <tr></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2X21</td>
                                        <td>$ 48</td>
                                    </tr>
                                    <tr>
                                        <td>2X21</td>
                                        <td>$ 48</td>
                                    </tr>
                                    <tr>
                                        <td>2X21</td>
                                        <td>$ 48</td>
                                    </tr>
                                </tbody>
                            </table><hr />
                            <Card.Text>
                                <p>Total savings &nbsp;&nbsp;&nbsp;&nbsp; -$ &nbsp;18.00</p>
                                <p>Delivery Fee  &nbsp;&nbsp;&nbsp;&nbsp; $ &nbsp;5.00</p>
                                <p>Taxes and Charges  &nbsp;&nbsp;&nbsp;&nbsp; $ &nbsp;8.00</p>
                            </Card.Text><hr />
                            <Card.Text>
                                <p>To Pay  &nbsp;&nbsp;&nbsp;&nbsp; $ &nbsp;91.00</p>
                            </Card.Text><hr />
                            <Button variant="primary">PLACE ORDER</Button>
                        </Card.Body>
                    </Card>
                </div>
                

            </div>
        );
    }
}
export default Summary;
