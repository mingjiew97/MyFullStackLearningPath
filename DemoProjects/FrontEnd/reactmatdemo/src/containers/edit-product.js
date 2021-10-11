import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { editProduct, getProducts } from "../actions/actions-products";

import { Button, Grid, TextField } from 'material-ui';

class EditProduct extends Component {

  componentDidMount() {
      const { name } = this.props.match.params;
      this.props.getProducts();
  }

  onSubmit(values) {
    // console.log(values);
    // this.props.history.push('/');
    this.props.editProduct(values, () => {
      this.props.history.push('/');
    });
  }

  renderField = (field) => {
    // onChange={field.input.onChange} and etc.
    // pristine, touched, invalid
    console.log(field);
    const {label, type, input: { name }, meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'text-danger' : ''}`;

    return (
      <div className={className}>
        <TextField
          id={name}
          label={label}
          type={type}
          {...field.input}
          fullWidth
          error={touched && (error && error !== '')}
          helperText={(touched && error) ? error: ''}
          disabled={name === 'name'}
        />
      </div>
    );
  }

  render() {
    const { handleSubmit, product }  = this.props;
    //console.log(product);

    return (
      <Grid container style={{padding: "0px 50px"}}>
        <Grid item xs={12} style={{textAlign: "center"}}>
          <h2>Edit A Product</h2>
        </Grid>
        <Grid item xs={12}>
          <form className="form-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <Button type="submit" raised color="primary" style={{marginRight: "20px"}}>Submit</Button>
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

function mapStateToProps({ products }, ownProps) {
  const product = products.find(p => p.name === ownProps.match.params.name);
  return {
    product: product,
    initialValues: product
  };
}

// export default reduxForm({
//   validate,
//   form: 'EditProductsForm',
//   enableReinitialize: true
// })(
//   connect(mapStateToProps, { editProduct })(EditProduct)
// );

EditProduct = reduxForm({
  validate,
  form: 'EditProductsForm'  // a unique identifier for this form
})(EditProduct)

// You have to connect() to any reducers that you wish to connect to yourself
EditProduct = connect(
  mapStateToProps, { editProduct, getProducts }
)(EditProduct)

export default EditProduct;