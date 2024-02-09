import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { InputTextarea } from "primereact/inputtextarea";
import './Query.css';

export default function Query() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted' });
    };


    const defaultValues = { description: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        if (data.description) {
            show(); // Show the toast only if description is provided
        } else {
            // Handle the case where description is empty
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Description is required.' });
        }

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card">
            <form onSubmit={form.handleSubmit(onSubmit)} className="form-container">
                <Toast ref={toast} />
                <Controller
                    name="description"
                    control={form.control}
                    rules={{ required: 'Description is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className="input-label">Description</label>
                            <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error }, "textarea")} />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" className="submit-button" />
            </form>
        </div>
    )
}
