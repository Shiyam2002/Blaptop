import './Form.css'

export let Detail=()=>{
    return(
        <>
        <div >
            <form className='Bio-Data'>
                <br/>
                <div className='inputs' >
                    <input type='text' placeholder='Name' />    <br></br>
                    <input type='number' placeholder='Age'/>    <br></br>
                    <input type='mail' placeholder='Email'/>    <br/>
                    <input type='number' placeholder='PhoneNo'/><br/>
                </div>
                    <button className='button' >Submit</button>
                
            </form>
           </div>
        </>
    )
}