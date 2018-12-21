import React from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Shabbir Ahmed',
                address: {
                    street: 'Subid Bazar',
                    zipCode: '3100',
                    country: 'Bangladesh'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render(){
        let form = (
            <form>
                <input 
                    className={classes.Input} 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" />
                <input 
                    className={classes.Input} 
                    type="email" 
                    name="name" 
                    placeholder="Your Email" />
                <input 
                    className={classes.Input} 
                    type="text" 
                    name="street" 
                    placeholder="Your Street" />
                <input 
                    className={classes.Input} 
                    type="text" 
                    name="postal" 
                    placeholder="Your Postal" />
                <Button 
                    btnType="Success"
                    clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading){
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;