import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { signUp } from '../redux/services/user.service'
import { AppDispatch, RootState } from '../store'
import { registerSchema } from '../helpers/validationSchema'
import { userValues, RegisterValidationSchema } from '../types'

const Register = () => {
  const { user, token } = useSelector((state: RootState) => state.users)

  const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterValidationSchema>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit: SubmitHandler<RegisterValidationSchema> = async (data: userValues) => {
    console.log(data)
    const user = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      image: data.image
    }
    await dispatch(signUp(user))
    if (token) {
      console.log('It is worked , here is the user token', token)
    }
  }

  return (
    <div className="w-100 h-full flex flex-col items-center justify-center">
      <h1 className="text-8xl text-center mb-4 ">Register</h1>
      <div className="p-5 items-center">
        <div className="flex flex-col w-25">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Your Name"
                {...register('first_name')}
              />
              {errors.first_name && (
                <p className="text-xs italic text-red-500 mt-2">{errors.first_name?.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Your Last Name"
                {...register('last_name')}
              />
              {errors.last_name && (
                <p className="text-xs italic text-red-500 mt-2">{errors.last_name?.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" {...register('email')} />
              {errors.email && (
                <p className="text-xs italic text-red-500 mt-2">{errors.email?.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Your Password "
                {...register('password')}
              />
              {errors.password && (
                <p className="text-xs italic text-red-500 mt-2">{errors.password?.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">Password Again</label>

              <input
                type="password"
                id="confirmPassword"
                placeholder="Password Again"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <p className="text-xs italic text-red-500 mt-2">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="image">Image</label>
              <input type="file" id="image" accept="image/png, image/jpeg" {...register('image')} />
            </div>

            <div>
              <button type="submit" className="mybtn2 mt-2 ">
                Register
              </button>
            </div>

            {user && <div className="user">{user.first_name} created!</div>}
          </form>

          <ToastContainer position="bottom-right" theme="light" />
        </div>
      </div>
    </div>
  )
}

export default Register
