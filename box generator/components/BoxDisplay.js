
    
const BoxDisplay= (props) => {
// using the getter that were passed from parent (App.js) component
  const { boxLst } = props;
    return (
        <div>
        {
          boxLst.map((color, index) => (
            <div key={index} style={{ 
                display: "inline-block",
                margin: "10px",
                height: "150px", 
                width: "150px", 
                backgroundColor: color
                }}>
            </div>
          ))
        }
      </div>
    );
};
    
export default BoxDisplay;

