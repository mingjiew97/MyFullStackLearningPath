import React, {Component} from 'react';
import {login} from '../actions/auth.action';
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";

class Login extends Component {

  onSubmit = (user) => {
    this.props.login(user, (res) => {
      if (res.data.success) {
        this.props.history.push('/products');
      }
    });
  }

  renderField({input, label, type}) {
    return (
      <div className="form-group">
        <label>
          {label}
          <input
            type={type}
            name={input.name}
            className="form-control"
            {...input}
          />
        </label>
      </div>
    )
  }

  renderCheckbox({input, label, type}) {
    return (
        <div className="form-check">
          <label>
            <input
                type="checkbox"
                name={input.name}
                {...input}
                className="form-check-input"
            />
            {label}
          </label>
        </div>
    )
  }

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="username"
            label="Username"
            type="text"
            component={this.renderField}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            component={this.renderField}
          />
          <Field
              name="remember-me"
              label="Remember Me"
              type="checkbox"
              component={this.renderCheckbox}
          />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    initialValues: {
      username: 'admin',
      password: 'adminpass'
    }
  }
}

export default connect(mapStateToProps, {login})(
  reduxForm({
    form: 'LoginForm'
  })(Login)
);