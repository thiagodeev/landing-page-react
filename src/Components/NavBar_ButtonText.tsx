interface NavBar_ButtonTextProps{
  theHref: string;
  content: string;
}

export function NavBar_ButtonText(props:NavBar_ButtonTextProps){
  return(
    <a 
      href={props.theHref}
    >
      {props.content}
    </a>
  )
}