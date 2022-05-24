import Modal from "../modal"
import React from "react"
import Button from "../button"
import { SignOutProps } from "./types"
import InputBar from "../inputBar"
import { signOutHandler } from "./utils"
import { UserContext } from "../../contexts/UserContext"

const SignOut: React.FC<SignOutProps> = () => {
  const {dispatch} = React.useContext(UserContext)
  return (
    <Button variant="primary" className="header-button" onClick={() => signOutHandler({dispatch})}>Sign Out</Button>
  )
}

SignOut.defaultProps = {
  
}

export default SignOut