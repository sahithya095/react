import React , {useState} from 'react';
function Handleevent(){
  const[isHovered,setIsHovered]=useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
    //set is true when the mouse enter
  }
  const handleMouseLeave=()=>{
    setIsHovered(false);
    //set as false when the mouse leave
  };
  return(
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100'}}>
      <button 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHovered ? 'lightblue' : 'white',
          fontSize: '20px',
          padding: '10px',
          border:'none',
          
        }}
      >
        {isHovered ? 'Hovered!' : 'Hover me'}
      </button>
    </div>
  );
}
export default Handleevent;