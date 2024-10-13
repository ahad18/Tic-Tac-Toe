import React from 'react';
import Swal from 'sweetalert2';
import soundMeme from '../assets/soundmeme.mp3'; // Properly import the sound file

function Meme() {
    const sound = new Audio(soundMeme); // Use the imported sound file

    const checkAge = () => {
        let age = parseInt(document.getElementById('checkage').value);
        if (age >= 18){
            sound.play(); // Play sound on valid condition
        } else {
            Swal.fire({
                title: 'Access Denied!',
                text: 'You are too young',
                icon: 'error'
            });
        }
    }

    return (
        <>
        <div className='container flex justify-center'> 
            <input className='p-2 border-2 rounded' type="number" id="checkage" />
            <button className='p-2 border-2 rounded' onClick={checkAge}>Check Age</button>
        </div>
        </>
    );
}

export default Meme;