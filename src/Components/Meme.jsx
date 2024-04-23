import React from 'react'
import Swal from 'sweetalert2'

function Meme() {
    const sound = new Audio('src/assets/soundmeme.mp3')
    
    const checkAge = () => {
        let age = parseInt(document.getElementById('checkage').value)
        if (age >= 18){
            sound.play()
        } else {
            Swal.fire({
                title: 'Access Denied!',
                text: 'You are too young',
                icon: 'error'
            })
        }
    }

    return (
        <>
        <div className='container flex justify-center'> 
            <input className='p-2 border-2 rounded' type="number" name="" id="checkage" />
            <button className='p-2 border-2 rounded' onClick={checkAge}>Check Age</button>
            
            </div>
        </>
    )
}

export default Meme
