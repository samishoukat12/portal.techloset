import React from "react"
import { ForgotStyle } from "./ForgotPasswordStyle"
import Logo from "../../../assets/logo.png"
import UseForgotPassword from "./UseForgotPassword"
import { Checkbox, FormControlLabel } from "@mui/material"
import { StageSpinner } from "react-spinners-kit"

export default function ForgotPassword() {
  const [
    {
      email,
      setEmail,
      orgCheck,
      setOrgCheck,
      emailTyping,
      handleTyping,
      handleRemoveTyping,
      userForgot,
      orgForgot,
      handleSubmit,
    },
  ] = UseForgotPassword()
  return (
    <ForgotStyle.MainPage>
      <ForgotStyle.Image src={Logo} />
      <ForgotStyle.ForgotContainer>
        <ForgotStyle.InlineHeaderContainer>
          <ForgotStyle.LoginHeading>
            Recover Your Acccount
          </ForgotStyle.LoginHeading>
        </ForgotStyle.InlineHeaderContainer>
        <ForgotStyle.InnerContainer>
          <ForgotStyle.Instruction>
            We'll send you an email with the login code
          </ForgotStyle.Instruction>
          <ForgotStyle.InputFieldHeading>
            Email<ForgotStyle.Estaric>*</ForgotStyle.Estaric>
          </ForgotStyle.InputFieldHeading>
          <ForgotStyle.IconAndInputField
            typing={emailTyping}
            onClick={() => handleTyping()}
          >
            <ForgotStyle.IconContainer>
              <ForgotStyle.MailIcon typing={emailTyping} />
            </ForgotStyle.IconContainer>
            <ForgotStyle.Input
              type="text"
              placeholder="Enter an email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleRemoveTyping()}
            />
          </ForgotStyle.IconAndInputField>
          <ForgotStyle.CheckBoxContainer>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#1E86FF",
                    "&.Mui-checked": {
                      color: "#1E86FF",
                    },
                  }}
                  onChange={() => setOrgCheck((prev) => !prev)}
                />
              }
              label="Organization?"
            />
          </ForgotStyle.CheckBoxContainer>
          {userForgot || orgForgot ? (
            <ForgotStyle.LoaderContainer>
              <StageSpinner color="#0D4cb5" height={50} width={50} />
            </ForgotStyle.LoaderContainer>
          ) : (
            <ForgotStyle.ButtonContainer>
              <ForgotStyle.RecoverButton onClick={handleSubmit}>
                Recover
              </ForgotStyle.RecoverButton>
            </ForgotStyle.ButtonContainer>
          )}
        </ForgotStyle.InnerContainer>
        <ForgotStyle.InlineHeaderContainer>
          <ForgotStyle.ReturnToLoginLink to={"/login"}>
            Return to login
          </ForgotStyle.ReturnToLoginLink>
        </ForgotStyle.InlineHeaderContainer>
      </ForgotStyle.ForgotContainer>
    </ForgotStyle.MainPage>
  )
}
