const Row = ({children,largeGap}) => {
  let styles="flex flex-wrap "
  let gapStyles=largeGap?'gap-16':'gap-4';
  return (
    <div className={styles+" "+gapStyles}>
      {children}
    </div>
  )
}

export default Row
