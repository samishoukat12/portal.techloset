import React from 'react'
import { ForgotStyle } from './ForgotPasswordStyle';
import Logo from '../../../assets/logo.png';
import UseForgotPassword from './UseForgotPassword';

export default function ForgotPassword() {
    const [{ email, setEmail, emailTyping, handleTyping, handleRemoveTyping }] = UseForgotPassword()
    return (
        <ForgotStyle.MainPage>
            <ForgotStyle.Image src={Logo} />
            <ForgotStyle.ForgotContainer>
                <ForgotStyle.InlineHeaderContainer>
                    <ForgotStyle.LoginHeading>Recover Your Acccount</ForgotStyle.LoginHeading>
                </ForgotStyle.InlineHeaderContainer>
                <ForgotStyle.InnerContainer>
                    <ForgotStyle.Instruction>We'll email you instructions to reset the password.</ForgotStyle.Instruction>
                    <ForgotStyle.InputFieldHeading>
                        Email<ForgotStyle.Estaric>*</ForgotStyle.Estaric>
                    </ForgotStyle.InputFieldHeading>
                    <ForgotStyle.IconAndInputField typing={emailTyping} onClick={() => handleTyping()}>
                        <ForgotStyle.IconContainer>
                            <ForgotStyle.MailIcon typing={emailTyping} />
                        </ForgotStyle.IconContainer>
                        <ForgotStyle.Input type="text" placeholder='Enter an email address' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => handleRemoveTyping()} />
                    </ForgotStyle.IconAndInputField>
                    <ForgotStyle.RecoverButton>Recover</ForgotStyle.RecoverButton>
                </ForgotStyle.InnerContainer>
                <ForgotStyle.InlineHeaderContainer>
                    <ForgotStyle.ReturnToLoginLink to={"/login"}>Return to login</ForgotStyle.ReturnToLoginLink>
                </ForgotStyle.InlineHeaderContainer>

            </ForgotStyle.ForgotContainer>

        </ForgotStyle.MainPage>
    )
}
