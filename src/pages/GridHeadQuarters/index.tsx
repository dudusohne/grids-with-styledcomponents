import React from 'react';
import { Grid, Row, Col } from '../../components/Grid';

export function GridHeadQuarters() {

    return (
        <Grid>
            <Row style={{ backgroundColor: 'blue' }}>

                <Col xs={2} style={{ backgroundColor: 'green' }}>1</Col>
                <Col xs={10} style={{ backgroundColor: 'purple' }}>
                    <Row style={{ backgroundColor: 'pink' }} end="xs">
                        <Col xs={5}>1</Col>
                    </Row>
                </Col>

            </Row>
            <Row style={{ backgroundColor: 'yellow' }}>

                <Col xs style={{ backgroundColor: 'red' }}>1</Col>
                <Col xs style={{ backgroundColor: 'gray' }}>2</Col>
                <Col xs style={{ backgroundColor: 'black' }}>3</Col>
            </Row>
        </Grid>
    )
}