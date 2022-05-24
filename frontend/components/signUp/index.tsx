import Modal from "../modal"
import React from "react"
import Button from "../button"
import { SignUpProps } from "./types"
import InputBar from "../inputBar"
import { signUpHandler } from "./utils"
import { UserContext } from "../../contexts/UserContext"
import Alert from "../Alert"

const SignUp: React.FC<SignUpProps> = () => {
  const [modalOpen, setModalOpen] = React.useState<any>(false)
  const [firstName, setFirstName] = React.useState<string>("")
  const [lastName, setLastName] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")

  const {state, dispatch} = React.useContext(UserContext)

  return (
    <>
    <Button className="header-button" variant="secondary" onClick={() => setModalOpen(true)}>Sign Up</Button>
    <Modal
      id="SignUpModal"
      isOpen={modalOpen}
      setIsOpen={setModalOpen}
      header="Sign Up"
      body={
        <div>
          {state.error && <Alert message={state.error} />}
          <InputBar
            placeholder="First Name" 
            type={"text"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBar
            placeholder="Last Name" 
            type={"text"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBar
            placeholder="Email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBar
            placeholder="Password"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      }
      footer={
        <Button 
          variant="primary" 
          className="w-full"
          onClick={() => signUpHandler({firstName, lastName, email, password, dispatch})}
        >
          Sign Up
        </Button>
      }
    />
    </>
  )
}

SignUp.defaultProps = {
  
}

export default SignUp