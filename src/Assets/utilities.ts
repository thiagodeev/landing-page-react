//Function that aims to facilitate breakpoint declarations at TailwindCSS
export function breakpoint(breakpointName: string, styles: string){
  let stylesArray = styles.split(' ');
  return stylesArray.map((el) => {return breakpointName+ ':' + el}).join(' ')
}