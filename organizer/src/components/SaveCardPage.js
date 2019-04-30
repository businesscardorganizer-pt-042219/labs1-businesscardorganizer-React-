import React from 'react';
import { connect } from "react-redux";
import { getCards } from '../actions';

import User from "./User";

class SaveCardPage extends React.Component {
    state = {
        card: null
    }
    componentDidMount() {
        if(this.props.cards === undefined) {
            this.props.getCards();
        }
        const id = props.match.params.id;
        const myCard = this.props.cards.find(card => `${card.id}` === id);
        this.setState({card: myCard})
        // or we can just get card by id like this:
        //const id = props.match.params.id;
        //this.props.getCardById(id); (we need to create this endpoint in actions/reducer)
        // set payload to "oneCard" key in reducer's state
        // add "oneCard" in mapStateToProps
        //this.setState({card: this.props.oneCard})
    }
    render() {
        return (
            <div className="save-card-wrapper">
                <User card={this.state.card}/>
    
            </div>
    
        );
    }
    
}
const mapStateToProps = state => ({
    cards: state.cards,
    fetchingCards: state.fetchingCards,
  });
  
  export default connect(mapStateToProps, { getCards })(SaveCardPage);