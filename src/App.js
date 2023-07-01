import './Background.css'
import './Form.css'

function App(){
    return(
        <>
           <div className='Bio-Data' 
           style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}    
           >
            <form>
                <br/>
                <div className='inputs' 
                >
                    <input type='text' placeholder='Name' />    <br/>
                    <input type='number' placeholder='Age'/>    <br/>
                    <input type='mail' placeholder='Email'/>    <br/>
                    <input type='number' placeholder='PhoneNo'/><br/>
                </div>
                    <input className='button' type='button' placeholder='Submit'/>
                
            </form>
           </div>
        </>
    )
}
export default App;