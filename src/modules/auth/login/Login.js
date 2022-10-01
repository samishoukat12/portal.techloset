import React from "react";
import { LoginStyle } from "./LoginStyle";
// import loginPageLogo from '../../../assets/loginPageLogo.png';
import Logo from '../../../assets/logo.png';
import UseLogin from './UseLogin';
import CommonTooltip from '../../../commonComponents/commonTooltip/CommonTooltip';
import { ToastContainer } from 'react-toastify';
import { StageSpinner } from 'react-spinners-kit'
import { Checkbox, FormControlLabel } from "@mui/material";
import { orgCheck } from "../../../lib/reactivities/reactiveVarables";

import { colors } from "../../../constants/Color";
import { useReactiveVar } from "@apollo/client";
export default function Login() {
    const [{ values, handleChange, handleClickShowPassword, orgLogin, email, setEmail, loginHandler, ORG_LOADING, organizationLoginHandler, loading, ctaOrgHandler, emailTyping, emaiTypingRemove, passwordTyping, passwordTypingRemove, showPassword }] = UseLogin();
    const useOrgCheck = useReactiveVar(orgCheck)
    // if (error) {
    //     notify()
    // }
    return (
        <div>
            <LoginStyle.MainPage>
                <LoginStyle.Image src={Logo} />

                <LoginStyle.LoginContainer>
                    {/* Below Code for toastify   */}
                    {/* <ToastContainer/> */}
                    {/* Below Code for Header. (Login Heading and Logo) */}
                    <LoginStyle.InlineHeaderContainer>
                        <LoginStyle.LoginHeading>
                            Sign In
                        </LoginStyle.LoginHeading>
                    </LoginStyle.InlineHeaderContainer>
                    {/* Below Code for Email Input Field   */}
                    <LoginStyle.ForgotContainer>
                        <LoginStyle.InputFieldHeading>
                            Email<LoginStyle.Estaric>{'*'}</LoginStyle.Estaric>
                        </LoginStyle.InputFieldHeading>
                    </LoginStyle.ForgotContainer>

                    <LoginStyle.IconAndInputField typing={values.emailTyping} onClick={() => emailTyping()}>
                        <LoginStyle.IconContainer>
                            <LoginStyle.PersonOutlineIcon typing={values.emailTyping} />
                        </LoginStyle.IconContainer>
                        <LoginStyle.Input type='text' placeholder='Enter an email address' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => emaiTypingRemove()} />
                    </LoginStyle.IconAndInputField>
                    {/* Below Code for Password Input Field */}


                    <LoginStyle.ForgotContainer>

                        <LoginStyle.InputFieldHeading>
                            Password<LoginStyle.Estaric>{'*'}</LoginStyle.Estaric>
                        </LoginStyle.InputFieldHeading>
                        <LoginStyle.ForgotPasswordLink to={"/forgotPassword"}>
                            Forgot Password ?
                        </LoginStyle.ForgotPasswordLink>
                    </LoginStyle.ForgotContainer>

                    <LoginStyle.IconAndInputField typing={values.passwordTyping} onClick={() => passwordTyping()}>
                        <LoginStyle.IconContainer>
                            <LoginStyle.LockIcon typing={values.passwordTyping} />
                        </LoginStyle.IconContainer>
                        <LoginStyle.Input value={values.password} onChange={handleChange('password')} type={showPassword ? 'text' : 'password'} placeholder='Enter a password' onBlur={() => passwordTypingRemove()} />
                        {/* Below Code is part of Password input field used for changing Password visible Icon Color   */}
                        <LoginStyle.PasswordVisibleIconContainer>
                            <LoginStyle.VisibilityIcon showPassword={showPassword} onClick={() => handleClickShowPassword()} />
                        </LoginStyle.PasswordVisibleIconContainer>
                    </LoginStyle.IconAndInputField>
                    <LoginStyle.OrgCheckbox>
                        <FormControlLabel
                            control={<Checkbox
                                sx={{
                                    color: '#1E86FF',
                                    '&.Mui-checked': {
                                        color: '#1E86FF',
                                    },
                                }}
                                onChange={() => ctaOrgHandler()}
                            />
                            }
                            label="Organization Login?"

                        />
                    </LoginStyle.OrgCheckbox>
                    {/* Below Code for login Button   */}
                    {loading || ORG_LOADING ?
                        <LoginStyle.LoaderContainer>
                            <StageSpinner color="#0D4cb5" height={50} width={50} />
                        </LoginStyle.LoaderContainer>
                        :
                        <LoginStyle.ButtonContainer>
                            <LoginStyle.LoginButton onClick={useOrgCheck ? organizationLoginHandler : loginHandler}>Log In</LoginStyle.LoginButton>
                        </LoginStyle.ButtonContainer>
                    }
                </LoginStyle.LoginContainer>
            </LoginStyle.MainPage>
        </div>

    )
}