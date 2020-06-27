import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/action'
import styled from 'styled-components'
import {Col,Row,Button,Card}from 'reactstrap'

const DivText = styled.div`
    color: whitesmoke;
    text-shadow: -1px 0 purple, 0 1px purple, 1px 0 purple, 0 -1px purple;
`
const DivBack = {
    border: '5px groove teal',
    // width: '30%',
    margin: '1% auto',
    background: 'rgba(0,128,128,0.5)'
}
const textColor = {
    color: 'purple'
}

const SmurfList = props => {
    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurf();
    };

    return (
      <DivText>
        <Row>
          {props.character.map(i => (
            <Col lg="4">
              <Card style={DivBack}>
                <h1>{i.name}</h1>
                <p>{i.age}</p>
                <p>{i.height}</p>
              </Card>
            </Col>
          ))}
        </Row>

        <Button  outline color='secondary'  style={textColor} onClick={fetchSmurf}> Show Smurfs</Button>
      </DivText>
    );
}

const mapStateToProps = state => {
    return {
        character: state.character,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(
    mapStateToProps,
    { getSmurf }

)(SmurfList);