
var style1 = {
    display:"flex",
    justifyContent: "space-between",
    alignItems:"center",
    width: "86%",
    margin: "auto"
}

const DateLogo = ({date,img})=>{
    return(
        <div style={style1}>
            <h3>{date}</h3>
            <img style={{width:"20%"}} src={img}/>
        </div>
    )
}

export default DateLogo