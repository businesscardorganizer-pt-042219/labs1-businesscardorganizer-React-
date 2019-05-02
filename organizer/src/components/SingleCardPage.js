import React from 'react';
import { connect } from "react-redux";
import { getCardById, deleteCard } from '../actions';

import User from "./User";
import Navigation from "./Navigation";
import SpinnerDataLoad from "./SpinnerDataLoad";
import QRCode from "../../node_modules/qrcode-react/lib/index";

import "./user.css";

class SingleCardPage extends React.Component {
    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.props.getCardById(id);
    }
    onClick = () => {
        const id = this.props.match.params.id;
        this.props.deleteCard(id);
        this.props.history.push("/");
    }
    render(props) {
        const id = this.props.match.params.id;
        const route = `https://hopeful-ride-580fdd.netlify.com/user-list/${id}` 
        return (
            <div className="single-card-wrapper">
                <Navigation />
                {
                    this.props.fetchingCards && <SpinnerDataLoad /> 
                }
                {
                    /* Check if the card is fetched */
                    this.props.cardById ? 
                    (
                        <div className="single-card">
                            <User card={this.props.cardById} onClick={this.onClick} hideControls="-hidden"/>
                            <div className="qrcode-wrapper">
                                <QRCode className='qrcode' value={route}
                                size={300}
                                fgColor='rgb(39, 39, 39)'
                                bgColor='transparent'/>
                            </div>
                        </div>
                    ) : (
                        /* display error message to user if there's no card with such id */
                        <div className="no-card-found">
                            <h2>No card found!</h2>
                        </div>
                    )}

            </div>
    
        );
    }
}
const mapStateToProps = state => ({
    cardById: state.cardById,
    fetchingCards: state.fetchingCards
  });
  
  export default connect(mapStateToProps, { getCardById, deleteCard })(SingleCardPage);