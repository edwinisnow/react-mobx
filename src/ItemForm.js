import * as React from 'react'
import { inject } from 'mobx-react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


@inject('store')
class ItemForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: '',
            itemPrice: 0.0
        }
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.type === 'number'
                ? Number(e.target.value)
                : e.target.value
        });
    }
    addItem = () => {
        this.props.store.addItem({
            name: this.state.itemName,
            price: this.state.itemPrice
        })
        this.setState({ itemName: '', itemPrice: 0.0 });
    }
    render() {
        return (
            <Container>
                <Form>
                    <Row xs="1" sm="2" md="2">
                        <Col><FormGroup>
                            <Label for="item-name-input">Name: </Label>
                            <Input type="text"
                                id="item-name-input"
                                name="itemName"
                                value={this.state.itemName}
                                onChange={this.onChange} />
                        </FormGroup></Col>
                        <Col>
                            <FormGroup>
                                <Label for="item-price-input">Price:</Label>
                                <Input type="number"
                                    id="item-price-input"
                                    name="itemPrice"
                                    value={this.state.itemPrice}
                                    onChange={this.onChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Button color="primary"
                                    type="button"
                                    id="add-button"
                                    onClick={this.addItem}>Add Item</Button>
                            </FormGroup>
                        </Col>

                    </Row>
                </Form>
            </Container>

        )
    }
}
export default ItemForm;