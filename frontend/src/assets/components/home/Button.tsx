import { Link } from "react-router-dom";


type Props = {
    nameButton: string
}

const button = ({nameButton}: Props) => {
  return (
    <>
        <Link to={''} className="text-xs text-end pr-3 text-pink-600">¿Olvidaste tu contraseña?</Link>
        <button className="w-60 mx-auto p-1.5 text-white bg-pink-600 shadow-xl shadow-pink-300 rounded-2xl ">{nameButton}</button>
    </>
)
}
export default button;