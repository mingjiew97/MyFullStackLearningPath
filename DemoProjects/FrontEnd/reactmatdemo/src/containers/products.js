import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getProducts } from '../actions/actions-products';
import { Link } from 'react-router-dom';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { Button, Grid, TextField } from 'material-ui';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterStr: "",
      dummyProducts: props.dummyProducts
    }
  }

  componentDidMount() {
    this.props.getProducts();
  }

  renderDummyProducts() {
    return this.state.dummyProducts
      .filter(product => {
        const keys = [false, ...Object.keys(product)];
        return keys.reduce((k1, k2) => {
          return k1 || (""+product[k2]).includes(this.state.filterStr)
        })
      })
      .map(product => {
      return (
        <TableRow key={product.name}>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.brand}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.stock}</TableCell>
          <TableCell><img src={product.image} alt="" style={{width: "100px", height: "100px"}} /></TableCell>
        </TableRow>
      );
    });
  }

  renderProducts() {
    return this.props.products
      .filter(product => {
        const keys = [false, ...Object.keys(product)];
        return keys.reduce((k1, k2) => {
          return k1 || (""+product[k2]).includes(this.state.filterStr)
        })
      })
      .map(product => {
        return (
          <TableRow key={product.name}>
            <TableCell>
              <Link to={`/products/${product.name}`}>
                {product.name}
              </Link>
            </TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell><img src={product.image} alt="" style={{width: "100px", height: "100px"}} /></TableCell>
          </TableRow>
        );
      });
  }

  handleSearch = (e) => {
    this.setState({
      filterStr: e.target.value
    });
  }

  render() {
    return (
      <div style={{padding: "0px 20px"}}>
        <h2>All Products</h2>
        <div>
          <TextField
            id="search"
            label="Search"
            value={this.state.filterStr}
            onChange={this.handleSearch}
            margin="normal"
          />
          <Button raised color="primary" component={Link} to="/addproduct" style={{marginLeft: "20px"}}>
            Add New Product
          </Button>
        </div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*{ this.renderDummyProducts() }*/}
              { this.renderProducts() }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts: getProducts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
// export default connect(mapStateToProps, {getProducts})(Products);