
const IconButton = ({children,onClick}) => {
  return (
    <div className="cursor-pointer block" onClick={onClick}>
      {children}
    </div>
  )
}

export default IconButton
