import Modal from "../modal"
import React from "react"
import Button from "../button"
import { SignInProps } from "./types"
import InputBar from "../inputBar"
import { signInHandler } from "./utils"
import { UserContext } from "../../contexts/UserContext"
import Alert from "../Alert"

const SignIn: React.FC<SignInProps> = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [modalOpen, setModalOpen] = React.useState<any>(false)
  const {state, dispatch} = React.useContext(UserContext)
  return (
    <>
    <Button variant="primary" className="header-button" onClick={() => setModalOpen(true)}>Sign In</Button>
    <Modal
      id="SignInModal"
      isOpen={modalOpen}
      setIsOpen={setModalOpen}
      header="Sign In"
      body={
        <div>
          {state.error && <Alert message={state.error} />}
          <InputBar 
            value={email} 
            name="Email" 
            placeholder="Email"
            type={'email'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBar 
            value={password}
            name="Password"
            placeholder="Password"
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      }
      footer={
        <Button variant="primary" className="w-full" onClick={() => signInHandler({email, password, dispatch})}>Sign In</Button>
      }
    />
    </>
  )
}

SignIn.defaultProps = {
  
}

export default SignIn