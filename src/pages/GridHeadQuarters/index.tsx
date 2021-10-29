import React from 'react';
import { Grid, Row, Col } from '../../components/Grid';
import { Header } from '../../components/Header';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ChangingProgressProvider from "./ChangingProgressProvider";

export function GridHeadQuarters() {

    return (
        <Grid style={{ margin: '0 auto', padding: '0', width: '100%', height: '40vh' }}>
            <Header />
            <Row end="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col xs={6} style={{ backgroundColor: 'purple', display: 'flex', justifyContent: 'center' }}>

                    <div style={{ transform: 'rotate(45deg)' }}>
                        <ChangingProgressProvider values={[0, 20, 80]}>
                            {(value: any) => (
                                <CircularProgressbar
                                    value={value}
                                    text={`${value}%`}
                                    circleRatio={0.50}
                                    styles={buildStyles({
                                        rotation: 1 / 2 + 1 / 8,
                                        strokeLinecap: "butt",
                                        trailColor: "#eee"
                                    })}
                                />
                            )}
                        </ChangingProgressProvider>
                    </div>

                </Col>
            </Row>
        </Grid>
    )
}