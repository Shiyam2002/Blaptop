import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let Detail=()=>{
    return(
        <>
        <div id='Bio-Data'>
            <form >
                <h3 className='title'>Detail</h3>
                <div id='inputs' >
                
                <input type='text' placeholder='Name' className="form-control"/ ><i class="bi bi-person"/>   <br></br>
                    <input type='number' placeholder='Age' className="form-control"/>    <br></br>
                    <input type='mail' placeholder='Email' className="form-control"/>    <br/>
                    <input type='number' placeholder='PhoneNo' className="form-control"/><br/>
                </div>
                    <button className='button' >Submit</button>
                
            </form>
           </div>
        </>
    )
}