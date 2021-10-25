import { Col, Grid, Row } from '../Grid'
import { ContainerHeader } from './styles'

export function Header() {


    return (
        <ContainerHeader>
            <Grid style={{ margin: '0 auto', padding: '0', width: '100%', height: '100%' }}>
                <Row style={{ padding: '1rem 1rem 1rem 1rem' }}>
                    <Col xs={2} style={{ backgroundColor: 'red', height: '7vh' }}>1</Col>
                    <Col xs={2} style={{ backgroundColor: 'blue' }}>1</Col>
                    <Col xs={3} style={{ backgroundColor: 'green' }}>1</Col>
                    <Col xs={2} style={{ backgroundColor: 'yellow' }}>1</Col>
                    <Col xs={1} style={{ backgroundColor: 'gray' }}>1</Col>
                    <Col xs={1} style={{ backgroundColor: 'purple' }}>1</Col>
                    <Col xs={1} style={{ backgroundColor: 'brown' }}>1</Col>
                </Row>
            </Grid>
        </ContainerHeader>
    )
}