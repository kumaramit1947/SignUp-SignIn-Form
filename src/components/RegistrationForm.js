import { useForm } from 'react-hook-form';
const RegistrationForm = ({ setOutput }) => {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();

    // Validation parameters for each input
    const validations = {
        name: {
            required: 'Name is required',
            pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: 'Invalid name format'
            }
        },
        email: {
            required: 'Email is required',
            pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Invalid email format'
            }
        },
        password: {
            required: 'Password is required',
            minLength: {
                value: 6,
                message: 'Password should be atleast of 6 characters'
            },
            maxLength: {
                value: 15,
                message: 'Password can be atmost of 15 characters'
            }
        }
    }
    const onFormSubmit = (data) => {
        // console.log(data);
        setOutput({ ...data });
    }
    const onErrors = (errors) => {
        // console.log(errors);
        setOutput(null);
    }
    return (
        <>
            <form className='form' onSubmit={handleSubmit(onFormSubmit, onErrors)}>
                <div className='input-section'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' {...register('name', validations.name)} />
                    {/* Error display */}
                    {errors.name && <div className='error-message'>{errors.name.message}</div>}
                </div>
                <div className='input-section'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' {...register('email', validations.email)} />
                    {/* Error display */}
                    {errors.email && <div className='error-message'>{errors.email.message}</div>}
                </div>
                <div className='input-section'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' {...register('password', validations.password)} />
                    {/* Error display */}
                    {errors.password && <div className='error-message'>{errors.password.message}</div>}
                </div>
                <div className='input-section'>
                <input type='submit' />
                {/* To clear the form errors -- Correction needed*/}
                {/* <button onClick={()=>clearErrors()}>Clear Form</button> */}
                </div>
            </form>
        </>
    );
}
export default RegistrationForm;