import { useState } from 'react';
import LoginInput from './LoginInput'
import Button from './Button'

import { MdEmail, MdLock } from "react-icons/md";



const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <form className='flex flex-col gap-4'>
                <LoginInput
                    nameLabel="Correo electrónico"
                    inputId="email"
                    type="email"
                    icon={<MdEmail />}
                />
                <LoginInput
                    nameLabel="Contraseña"
                    inputId="password"
                    type={"password"}
                    icon={<MdLock />}
                    toggleShowPassword={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                />

                <Button nameButton={'Enviar'}></Button>
            </form>
        </>
    )
}
export default LoginForm