import { navLinks } from '../../utils/navLinks'
import { Link } from 'react-router-dom'

type Props = {
    onClick?: () => void;
    className?: string;
}

const NavLinks = ({onClick, className = ''}: Props) => {
  return (
              <ul className={className}>
            {navLinks.map((item) => {
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    onClick={onClick}
                    className='text-sm text-white'
                >
                    {item.label}
                  </Link>
                </li>
              )
            })
            }
          </ul>
  )
}
export default NavLinks