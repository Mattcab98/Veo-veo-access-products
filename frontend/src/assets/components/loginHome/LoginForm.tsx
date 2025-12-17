import { useState } from 'react';

import LoginInput from './LoginInput'
import ForgotPasswordLink from './ForgotPasswordLink';


import Button from './Button'

import { MdEmail, MdLock } from "react-icons/md";

import { useNavigate } from 'react-router-dom';
import UseAuth from '../../../context/UseAuth';
/*------------------------------------------------------------------- */

type LoginData = {
    email: string;
    password: string;
}

const LoginForm = () => {
    
    const navigate = useNavigate();
    const { login } = UseAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState <string | null> (null) ;

    const loginService = async (data: LoginData) => {

        return new Promise<void>((resolve, reject) => {

            setTimeout(() => {
                if (data.email === "test@test.com" && data.password === "1234") {
                    resolve();
                } else {
                    reject(new Error('Credenciales Invalidas'));
                }
            }, 1000);
        });
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!email || !password) {
            setError('Completá todos los campos');
            return;
        };

        try {
            setLoading(true);
            await loginService({email, password});

            login();
            navigate('/home');

        } catch {
            setError ('Credenciales invalidas')
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <LoginInput
                    nameLabel="Correo electrónico"
                    inputId="email"
                    type="email"
                    icon={<MdEmail />}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <LoginInput
                    nameLabel="Contraseña"
                    inputId="password"
                    type={showPassword ? 'text' : 'password'}
                    icon={<MdLock />}
                    toggleShowPassword={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                
                {error && (
                    <span className='text-gray-400 text-[.7rem] text-center'>
                        {error}
                    </span>
                )}

                <ForgotPasswordLink/>

                <Button 
                    nameButton={loading ? "Enviando..." : "Enviar"}
                    disabled={loading}
                >

                </Button>
            </form>
        </>
    )}

export default LoginForm;