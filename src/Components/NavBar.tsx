import Logo from '../Assets/logos/logo-jussi.svg';

export function NavBar(){
  return (
    <nav className="flex justify-center p-3 bg-white">
      <img src={Logo}/>
    </nav>
  )
}