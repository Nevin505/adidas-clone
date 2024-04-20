const Button = ({children,varaiantType="outlined"}) => {
  let styles=''
  if(varaiantType==='contained'){
    styles= ' uppercase px-2 py-1  border-2 border-black bg-white text-black flex items-center gap-1 font-semibold'
  }
  else{
    styles= ' uppercase px-2 py-1 border-2 border-black text-black flex items-center gap-1 font-semibold'
  }
  return (
    // <div className=>
       <button className={styles}>{children}</button>
    // </div>
  )
}

export default Button
