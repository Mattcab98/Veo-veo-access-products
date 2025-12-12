import LoginForm from './LoginForm';

export const Login = () => {
    return (
        <>

            <div className="min-h-screen flex justify-center items-center">

                <div className="w-65 h-100
                                mx-auto
                                bg-gray-50
                                rounded-3xl
                                grid place-content-center"
                >
                
                    <div className="text-center flex flex-col items-center">
                        <img src="/logoVeo.png" alt="" className="w-30"/>
                        <span className="text-pink-400">¡Bienvenido!</span>
                    </div>

                    <LoginForm />

                </div>

            </div>
        </>
    )
};
