
const IconButton = ({children,onClick}) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {children}
    </div>
  )
}

export default IconButton
