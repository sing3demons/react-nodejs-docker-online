import { Button, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  username: string
  password: string
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            label='Username'
            type='text'
            variant='outlined'
            {...register('username', { required: true, minLength: 5 })}
            error={errors.username ? true : false}
            helperText={errors.username ? 'Username is required' : ''}
          />
        </div>
        <div>
          <TextField
            {...register('password', { required: true, minLength: 5 })}
            label='Password'
            type='password'
            variant='outlined'
            error={errors.password ? true : false}
            helperText={errors.password ? 'Password is required' : ''}
          />
        </div>
        <div>
          <Button variant='contained' color='primary' type='submit'>
            Login
          </Button>
        </div>
      </form>
    </>
  )
}

export default Login
