import { useState } from "react";

export function UseChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    console.log(currentPassword, newPassword, confirmPassword);
    return [currentPassword, newPassword, confirmPassword, setCurrentPassword, setNewPassword, setConfirmPassword]
}
