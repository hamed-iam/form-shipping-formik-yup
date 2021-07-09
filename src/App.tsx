import React from 'react';
import './App.css';
import { Formik, Field, Form } from 'formik';
import { Button, TextField, Radio, Checkbox } from '@material-ui/core';
import ShippingForm from './components/ShippingForm';
import Layout from './components/Layout';
function App() {
  return (
    <Layout>
      {/* <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          isTall: false,
          cookies: [],
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async calls
          console.log(`submit`, data);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <Field
              placeholder="First Name"
              name="firstName"
              type="input"
              as={TextField}
            />
            <div>
              <Field
                placeholder="Last Name"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field name="isTall" type="checkbox" as={Checkbox} />
              <div>Cookies : </div>
              <Field
                name="cookies"
                value="chocolate"
                type="checkbox"
                as={Checkbox}
              />
              <Field
                name="cookies"
                value="ice cream"
                type="checkbox"
                as={Checkbox}
              />
              <Field
                name="cookies"
                value="sneakers"
                type="checkbox"
                as={Checkbox}
              />
            </div>

            <div>
              <Button
                disabled={isSubmitting}
                color="primary"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik> */}

      <ShippingForm />
    </Layout>
  );
}

export default App;
