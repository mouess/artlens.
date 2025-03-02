import react from "react";
import { data } from "react-router-dom";
import "./partner.css"

const Partner = ({data}) =>{
    const bgImage = data?.images?.find((img) => img.name === "background3")?.src ; 

    return(
        <>
        <h1>partners & clients</h1><br/><br/>
        <div style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed", 
                width: "100%",
                alignItems: "center",
                textAlign: "center",
            }}>
            <div className="logos">
                {data?.images.filter(img => img.category === "partners" && img.name !== "partner9" && img.name !== "partner10" && img.name !== "partner11").map(img => (
                    <img key={img.name} src={img.src} alt={img.name} width="150px" style={{ padding: '20px' }} />
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Partner