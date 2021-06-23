import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from 'yup'
import ACTextInput from '../utilities/customFormControls/ACTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 0 }

    const schema = Yup.object({
        productName: Yup.string().required("Boş Geçilemez"),
        unitPrice: Yup.number().required("Boş Geçilemez").positive().min(1,"Birden Büyük Olmalı")
    })


    return (
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit = {(values)=>{
                    console.log(values)
                }}
            >
                <Form className="ui form"> 
                    <ACTextInput name="productName" placeholder="Ürün Adı" />
                    <ACTextInput name="unitPrice" placeholder="Birim Fiyatı" />
                    {/* <FormField>
                        <Field name="productName" placeholder="Ürün Adı" ></Field>
                        <ErrorMessage name="productName" render = {error=>
                            <Label pointing basic color="red" content = {error}/>
                        }></ErrorMessage>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="unitPrice" type = "number" placeholder="Birim Fiyatı"></Field>
                        <ErrorMessage name="unitPrice" render = {error=>
                            <Label pointing basic color="red" content = {error}/>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button fluid basic color="teal" type = "submit"> Ekle </Button>
                </Form>
            </Formik>
    )
}
