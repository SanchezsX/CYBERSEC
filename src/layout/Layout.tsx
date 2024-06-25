import { Link, Outlet } from 'react-router-dom'
import Container from '../components/Container'

const Layout = () => {
  return (
    <Container width="880px">
      <div className="flex flex-col items-center">
        <Link  to="/CYBERSEC/">
          <img
            className="mt-[50px]"
            src="./icons/Logo.svg"
            alt="Search"
          />
        </Link>
      </div>
      <Outlet />
    </Container>
  )
}

export default Layout
