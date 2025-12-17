import { Squash as Hamburger } from 'hamburger-react'

type Props = {
    isOpen: boolean;
    toggle: () => void;
}

const HamburgerNav = ({ isOpen, toggle }: Props) => {
    return (
        <>
                <Hamburger
                    toggled={isOpen}
                    toggle={toggle}
                    size={40}
                    color="#ffffff"
                    duration={0.65}
                >
                </Hamburger>
        </>
    )
}
export default HamburgerNav