function Spinner({size = 24, className = ""}) {
    return (
        <div className={`inline-block rounded-full border-2 animate-spin border-current border-t-transparent ${className}`} style={{width: size , height: size}}>
            
        </div>
    )
}

export default Spinner
