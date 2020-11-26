import React from "react";
import './App.css';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class CardItem extends React.Component{
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/card").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    render(){
        return(
            <div>
                <h3 className="header">Most Popular</h3>
               <hr />
             {
             this.state.list ?
                <div className="cards">
                {
              this.state.list.map((item,i) =>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img_url} /> 
                <table><tbody>
                <tr><td>{item.name}</td>
                <td><del>{item.original_price}</del>&nbsp;&nbsp;$&nbsp;{item.final_price}</td>
                </tr></tbody></table>
                <small>{item.description}</small>
                <button  style={{ border:'2px solid #007bff' }}> <Link to="/summary">Add to card</Link></button>
                </Card>  
                )
             }
           </div>
           :<p>please wait........</p>
        }
            </div>
        );
    }
}
export default CardItem;
