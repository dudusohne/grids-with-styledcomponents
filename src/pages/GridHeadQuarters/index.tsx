import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Grid, Row, Col, GridSettings } from '../../components/Grid';

export function GridHeadQuarters() {

    return (
        <ThemeProvider theme={GridSettings}>
            <Grid style={{ margin: '0 auto', padding: '0', width: '100%', height: '100%' }}>
                <Row>

                    <Col xs={12} style={{ backgroundColor: 'pink' }}>
                        <Row start="xs">
                            <Col xs={6} style={{ backgroundColor: 'purple' }}>
                                1
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Grid>

        </ThemeProvider>
    )
}