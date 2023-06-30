import './Background.css'

function App(){
    return(
        <>
           <div className='Bio-Data'>
            <form>
                <br/>
                <div className='inputs'>
                    <input type='text' placeholder='Name' />    <br/>
                    <input type='number' placeholder='Age'/>    <br/>
                    <input type='mail' placeholder='Email'/>    <br/>
                    <input type='number' placeholder='PhoneNo'/><br/>
                </div>
                    <input type='button' placeholder='Submit' className='button'/>
                
            </form>
           </div>
        </>
    )
}
export default App;