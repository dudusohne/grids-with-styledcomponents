import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Grid, Row, Col, GridSettings } from '../../components/Grid';

export function GridHeadQuarters() {

    return (
        <ThemeProvider theme={GridSettings}>
            <Grid style={{ margin: '0 auto', padding: '0', width: '100%', height: '100%' }}>
                <Row style={{ backgroundColor: 'blue' }}>

                    <Col sm={2} style={{ backgroundColor: 'green' }}>1</Col>
                    <Col sm={5} style={{ backgroundColor: 'purple', height: '5rem' }}>
                        <Row style={{ backgroundColor: 'pink', height: '3rem' }} end="xs">
                            <Col sm={4} style={{ backgroundColor: 'orange' }}>1</Col>
                        </Row>
                    </Col>

                </Row>
                <Row style={{ marginTop: '1rem', marginBottom: '1rem' }}>

                    <Col xs style={{ backgroundColor: 'red', height: '5rem' }}>1</Col>
                    <Col xs style={{ backgroundColor: 'gray' }}>2</Col>
                    <Col xs style={{ backgroundColor: 'black' }}>3</Col>
                </Row>
                <Row style={{ marginTop: '1rem', marginBottom: '1rem' }}>

                    <Col xs style={{ backgroundColor: 'green', height: '5rem' }}>1</Col>
                    <Col xs style={{ backgroundColor: 'orange' }}>2</Col>
                    <Col xs style={{ backgroundColor: 'yellow' }}>3</Col>
                </Row>
            </Grid>

        </ThemeProvider>
    )
}