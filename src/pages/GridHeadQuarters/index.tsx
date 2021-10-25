import React from 'react';
import { Grid, Row, Col } from '../../components/Grid';
import { Header } from '../../components/Header';
import { Circle, Rotate } from './grid.styles';

export function GridHeadQuarters() {

    return (
        <Grid style={{ margin: '0 auto', padding: '0', width: '100%', height: '40vh' }}>
            <Header />
            <Row end="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col xs={6} style={{ backgroundColor: 'purple', display: 'flex', justifyContent: 'center' }}>
                    <Circle />
                    <Rotate><Circle /></Rotate>
                    <Circle />
                </Col>
            </Row>
        </Grid>
    )
}