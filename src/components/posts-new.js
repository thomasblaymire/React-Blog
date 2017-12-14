import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
            {touched ? error : ''}
        </div>
       </div>
    );
  }

  onSubmit(values) {
      console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;


    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
    // console.log(values) -> {title: 'sfsd', categories: 'dfsfsa', content: 'Cool post dude'}
    const errors ={};

    //Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if(!values.categories) {
        errors.categories = 'Enter some categories';
    }

    if(!values.content) {
        errors.content = 'Enter some content please';
    }

    //If errors is empty form ok to submit
    //If errors has any properties, redux for assumes form is invalid
    return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
