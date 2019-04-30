import React from 'react';
import { connect } from "react-redux";
import { getCardById } from '../actions';

import User from "./User";

class SaveCardPage extends React.Component {
    // state = {
    //     card: null
    // }
    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.props.getCardById(id);
        // console.log(id);
        // this.setState({card: this.props.cardById})
    }
    render() {
        console.log(this.props.cardById);
        return (
            <div className="save-card-wrapper">
                <User card={this.props.cardById} />
            </div>
    
        );
    }
    
}
const mapStateToProps = state => ({
    cardById: state.cardById,
    fetchingCards: state.fetchingCards
  });
  
  export default connect(mapStateToProps, { getCardById })(SaveCardPage);