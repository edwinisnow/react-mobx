import * as React from 'react';
import { observer, inject } from 'mobx-react'
import { Table } from 'reactstrap';
@inject('store')
@observer
class CartItem extends React.Component {
    render() {
        return (<Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.store.items.map(item => <tr key={item.id}>
                        <td>{item.name} </td>
                        <td>{item.price}</td>
                    </tr>)
                }
            </tbody>
            <tfoot>
                <tr>
                    <td>Total:</td>
                    <td>{this.props.store.totalPrice}</td>
                </tr>
            </tfoot>
        </Table>)
    }
}
export default CartItem;


