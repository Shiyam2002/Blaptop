import './table.css'
export function Teacherdetails(){
    return(
        <>
        <div >
        <table cellPadding="10px" border='3' >
            <thead id='head'>
                <tr>
                    <th>S.no</th>
                    <th>Name Of The Teacher</th>
                    <th>Subject Handling</th>
                    <th>Teacher ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>Shubha</td>
                    <td>English</td>
                    <td>745843</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>Thameem</td>
                    <td>Maths</td>
                    <td>347954</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>Naga</td>
                    <td>Social</td>
                    <td>623584</td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td>Megu</td>
                    <td>Science</td>
                    <td>824785</td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}