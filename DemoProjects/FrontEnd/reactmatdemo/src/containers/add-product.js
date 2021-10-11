import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addProduct } from "../actions/actions-products"

import { Button, Grid, TextField } from 'material-ui';


class AddProduct extends Component {

  onSubmit(values) {
    // console.log(values);
    // this.props.history.push('/');
    this.props.addProduct(values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    // onChange={field.input.onChange} and etc.
    // pristine, touched, invalid
    const {label, type, name, meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'text-danger' : ''}`;

    return (
      <div className={className}>
        <TextField
          id={name}
          label={label}
          type={type}
          className="form-control"
          {...field.input}
          fullWidth
          error={touched && (error && error !== '')}
          helperText={(touched && error) ? error: ''}
        />
      </div>
    );
  }

  render() {
    const { handleSubmit }  = this.props;
    return (
      <Grid container style={{padding: "0px 50px"}}>
        <Grid item xs={12} style={{textAlign: "center"}}>
          <h2>Add A Product</h2>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Grid container spacing={8} justify="center">
              <Grid item sm={8} xs={12}>
              <Field
                label="Name"
                type="text"
                name="name"
                component={this.renderField}
              />
              </Grid>
              <Grid item sm={8} xs={12}>
              <Field
                label="Brand"
                type="text"
                name="brand"
                component={this.renderField}
              />
              </Grid>
              <Grid item sm={8} xs={12}>
              <Field
                label="Price"
                type="number"
                name="price"
                component={this.renderField}
              />
              </Grid>
              <Grid item sm={8} xs={12}>
              <Field
                label="Stock"
                type="number"
                name="stock"
                component={this.renderField}
              />
              </Grid>
              <Grid item sm={8} xs={12}>
              <Field
                label="Image"
                type="text"
                name="image"
                component={this.renderField}
              />
              </Grid>
              <Grid item sm={8} xs={12}>
                <Button type="submit" raised color='primary' style={{marginRight: "20px"}}>Submit</Button>
                <Button raised color="accent" component={Link} to="/">
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }

}

function validate(values) {
  const errors = {};

  if(!values.name){
    errors.name = "Enter product name!";
  }

  if(!values.brand){
    errors.brand = "Enter product brand!";
  }

  if(!values.price){
    errors.price = "Enter product price!";
  }

  if(!values.stock){
    errors.stock = "Enter product stock!";
  }

  if(!values.image){
    errors.image = "Enter product image url!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'AddProductsForm'
})(
  connect(null, { addProduct })(AddProduct)
);