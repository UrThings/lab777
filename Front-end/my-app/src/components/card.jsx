export default function Card({zurg, name, job}){
    return (
      
            <div className="card-container">
                <div className="card">

                    <img className="zurg" src={zurg} width={200} height={200} alt="zurag" />
                    <div className="name">{name}</div>
                    <div className="job">{job}</div>

                </div>
            </div>
            
    
     
        
    )
    
}