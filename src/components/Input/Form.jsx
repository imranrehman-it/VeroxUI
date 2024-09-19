import React from 'react'
import PropTypes from 'prop-types'
import FormInput from './FormInput'
import Button from '../Button/Button'

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [ConfirmEmail, setConfirmEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
   <form className="flex flex-col items-center w-[20rem]" autocomplete="off">
    <div className='flex flex-row w-full h-fit gap-4'>
        <FormInput
            variant={"outlined"}
            id="FirstName"
            label="First Name"
            value={name}
            type={"text"}
            onChange={(value) => setName(value)}
            required
          />
        <FormInput
          id="LastName"
          variant={"outlined"}
          label="Last Name"
          placeholder="example@email.com"
          type={"text"}
          value={email}
          onChange={(value) => setEmail(value)}
          required
        />
    </div>
        <FormInput
          id="Email"
          variant={"outlined"}
          label="Email"
          placeholder="example@email.com"
          type="email"
          value={email}
          onChange={(value) => setEmail(value)}
          required
        />
         <FormInput
          id="ConfirmEmail2"
          variant={"outlined"}
          label="Confirm Email"
          placeholder="example@email.com"
          type="email"
          value={ConfirmEmail}
          onChange={(value) => setConfirmEmail(value)}
          required
        />
        <FormInput
          id="password3"
          variant={"outlined"}
          label="Password"
          type="password"
          value={password}
          onChange={(value) => setPassword(value)}
          required
        />
        <Button
          onClick={() => console.log("Submitted")}
          className="w-full"
          text="Submit"
          size={"lg"}
        >
        </Button>

      </form>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

Form.defaultProps = {
  children: null,
  style: {}
}
export default Form
