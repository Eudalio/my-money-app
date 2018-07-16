import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} 
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} 
                        label='Mês' cols='12 4' placeholder='Informe o mês' type='number' />
                    <Field name='year' component={labelAndInput} 
                        label='Ano' cols='12 4' placeholder='Informe o ano' type='number' />
                </div>
                <div className="box-footer">
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)