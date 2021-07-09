import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Button } from '@material-ui/core';
import * as yup from 'yup';
import styled from 'styled-components';

const CustomTextField = (atr: any) => (
  <TextField variant="outlined" label={atr} className="form" />
);

const initialValues = {
  address_sen: '',
  street_sen: '',
  first_name_sen: '',
  last_name_sen: '',
  no_sen: '',
  email_sen: '',
  postcode_sen: '',
  phone_sen: '',
  company_name_sen: '',
  country_sen: '',
  reference_sen: '',
  address_rec: '',
  street_rec: '',
  first_name_rec: '',
  last_name_rec: '',
  no_rec: '',
  email_rec: '',
  postcode_rec: '',
  phone_rec: '',
  company_name_rec: '',
  country_rec: '',
  reference_rec: '',
};

const validationSchema = yup.object({
  street_sen: yup.string().required('required'),
  email: yup.string().email().required('required'),
  page: yup.string().required('required'),
});

const ShippingForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(false);
          console.log(`onSubmit`, data);
          setSubmitting(true);
        }}
        // validationSchema={validationSchema}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <StyleWrapper>
              <section className="sender-form">
                <h1>Sender Info</h1>
                <div className="address_btn">
                  <Field
                    placeholder="address"
                    name="address_sen"
                    type="input"
                    as={() => CustomTextField('address')}
                    className="form"
                  />
                  <Button>Search Address</Button>
                </div>
                <Field
                  placeholder="street"
                  name="street_sen"
                  type="input"
                  as={() => CustomTextField('street')}
                />
                {/* <ErrorMessage name="street_sen" /> */}
                <div className="postcode_no">
                  <Field
                    placeholder="No."
                    name="no_sen"
                    type="input"
                    as={() => CustomTextField('No.')}
                  />
                  <Field
                    placeholder="Suburb/Postcode"
                    name="postcode_sen"
                    type="input"
                    as={() => CustomTextField('Suburb/Postcode')}
                  />
                  <Field
                    placeholder="Country"
                    name="country_sen"
                    type="input"
                    as={() => CustomTextField('Country')}
                  />
                </div>

                <div className="phone_company">
                  <Field
                    placeholder="Phone"
                    name="phone_sen"
                    type="input"
                    as={() => CustomTextField('Phone')}
                  />
                  <Field
                    placeholder="Company(Optional)"
                    name="company_sen"
                    type="input"
                    as={() => CustomTextField('Company(Optional')}
                  />
                </div>
                <div className="first_last_name">
                  <Field
                    placeholder="First Name"
                    name="first_name_sen"
                    type="input"
                    as={() => CustomTextField('First Name')}
                  />
                  <Field
                    placeholder="Last Name"
                    name="last_name_sen"
                    type="input"
                    as={() => CustomTextField('Last Name')}
                  />
                </div>
                <Field
                  placeholder="Email"
                  name="email_sen"
                  type="input"
                  as={() => CustomTextField('Email')}
                />
                <Field
                  placeholder="Reference(Optional)"
                  name="reference_sen"
                  type="input"
                  as={() => CustomTextField('Reference(Optional')}
                />
              </section>
              {/* Receiver Form */}
              <section className="receiver-form">
                <h1>Receiver Info</h1>

                <div className="address_btn">
                  <Field
                    placeholder="address"
                    name="address_rec"
                    type="input"
                    as={() => CustomTextField('address')}
                  />
                  <Button>Search Address</Button>
                </div>
                <Field
                  placeholder="street"
                  name="street_rec"
                  type="input"
                  as={() => CustomTextField('street')}
                />
                <div className="postcode_no">
                  <Field
                    placeholder="No."
                    name="no_rec"
                    type="input"
                    as={() => CustomTextField('No.')}
                  />
                  <Field
                    placeholder="Suburb/Postcode"
                    name="postcode_rec"
                    type="input"
                    as={() => CustomTextField('Suburb/Postcode')}
                  />
                  <Field
                    placeholder="Country"
                    name="country_rec"
                    type="input"
                    as={() => CustomTextField('Country')}
                  />
                </div>

                <div className="phone_company">
                  <Field
                    placeholder="Phone"
                    name="phone_rec"
                    type="input"
                    as={() => CustomTextField('Phone')}
                  />
                  <Field
                    placeholder="Company(Optional)"
                    name="company_rec"
                    type="input"
                    as={() => CustomTextField('Company(Optional)')}
                  />
                </div>
                <div className="first_last_name">
                  <Field
                    placeholder="First Name"
                    name="first_name_rec"
                    type="input"
                    as={() => CustomTextField('First Name')}
                  />
                  <Field
                    placeholder="Last Name"
                    name="last_name_rec"
                    type="input"
                    as={() => CustomTextField('Last Name')}
                  />
                </div>
                <Field
                  placeholder="Email"
                  name="email_rec"
                  type="input"
                  as={() => CustomTextField('Email')}
                />
                <Field
                  placeholder="Reference(Optional)"
                  name="reference_rec"
                  type="input"
                  as={() => CustomTextField('Reference(Optional)')}
                />
              </section>
            </StyleWrapper>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const StyleWrapper = styled.section`
  height: 80vh;

  display: flex;
  justify-content: space-evenly;
  .address_btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0.3rem 0 0.3rem 0;
  }
  .form {
    width: 100%;
  }
  .postcode_no {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0 0.5rem 0;
  }
  .phone_company {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
  }
  .first_last_name {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
  }
  .sender-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  .receiver-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
`;

export default ShippingForm;
