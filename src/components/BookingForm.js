import "../styles/booking.css"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup';

const BookingForm = ({times}) => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone:'',
          guests:2,
          occasion:'',
          date:'',
          time:'18:00'
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string().required('Required.'),
            lastName: Yup.string().required("Required"),
            email: Yup.string().email("Email not valid").required('Required'),
            date:Yup.date("Enter a valid date").required("Required")
          })
        }
      >
        {
          formik => (
            <Form noValidate onSubmit={formik.handleSubmit}>
              <label htmlFor="firstName" >First Name</label>
              <Field type="text" name="firstName" aria-label="First Name"/>
              <ErrorMessage name="firstName" component="span"/>
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" aria-label="Last Name" />
              <ErrorMessage name="lastName" component="span"/>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email"  aria-label="Email"/>
              <ErrorMessage name="email" component="span"/>
              <label htmlFor="phone">Phone</label>
              <Field type="text" name="phone"  aria-label="Phone"/>
              <ErrorMessage name="phone" component="span"/>
              <label htmlFor="guests">Guests</label>
              <Field type="number" name="guests"  aria-label="Guests"/>
              <ErrorMessage name="guests" component="span"/>
              <label htmlFor="occasion">Occasion (optional)</label>
              <Field as="select" name="occasion" aria-label="Occasion (optional)">
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="occasion" component="span"/>
              <label htmlFor="date">Date</label>
              <Field type="date" name="date" aria-label="Date"/>
              <ErrorMessage name="date" component="span"/>
              <label htmlFor="time">Time</label>
              <Field as="select" name="time" aria-label="Time">
                {
                  times.map(t=>{
                    return <option key={t} value={t}>{t}</option>
                  })
                }
              </Field>
              <ErrorMessage name="time" component="span"/>
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>

    </>
  )
}

export default BookingForm