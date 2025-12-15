import { useNavigate } from "react-router-dom";
import UseAuth from "../../../context/UseAuth";

import { motion } from "framer-motion";
import Button from '../home/Button'

const Products = () => {

  const navigate = useNavigate();
  const { logout } = UseAuth();

  const handleLogout = () => {
    logout();
    navigate('/')
  }

  return (
    <>

      <motion.section
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center">

        <div className="w-20 h-20 bg-gray-600 text-red-500 flex items-center justify-center">
          Products
        </div>
      </motion.section>

      <Button
        onClick={handleLogout}
        nameButton={'Cerrar Sesión'} />
    </>
  );
};

export default Products;
