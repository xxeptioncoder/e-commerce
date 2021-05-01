import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dwf0f6ce7f/content/seasonal-content/homepage/2021/02/endorphinshift-onHOVER-d.jpg'},
//     { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg'}
// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing="4">
                {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
                ))}
            </Grid>
    </main>
    )
}

export default Products;
