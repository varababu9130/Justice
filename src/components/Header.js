import React from 'react'

const header = () => {
  return (
    <div>
        <div className='container'>
            <div className='main-logo'>
                <h1>JUSTICE</h1>
            </div>
                <div className='nav-main'>
                    <div className='nav-top'>
                        <div className='head-email'>
                            <a href='#'>info@example.com</a>
                            <a href='#'>9112233445</a>
                        </div>
                        <div className='head-link'>
                            <a href='#'>Duties</a>
                            <a href='#'>Rights</a>
                        </div>
                    </div>
                    <div className='nav-bottom'>
                        <div className='nav-links'>
                            <a href='#'>Home</a>
                            <a href='#'>About</a>
                            <a href='#'>Practice</a>
                            <a href='#'>Attentions</a>
                            <a href='#'>Contact</a>
                        </div>
                        <div className='nav-button'>
                            <button>Get A Quote</button>
                        </div>
                    </div>
                </div>
        </div>
        <div className='container2'>
                    <h2>BEST LAW AGENCY</h2>
                    <h1>Our Fighting Is For <span> Your Justice</span></h1>
                    <button>Get An Appointment</button>
                </div>
    </div>
 )
}

export default header