import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();
    return ( 
      <div className='container p-3 mb-5'>
        <div className='row text-center'>
              <h1 className='mb-4 fs-3'>Open a Sevendha account</h1>  
              <p className='mb-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
              <div>
                <button 
                  className='p-2 btn btn-primary fs-5 px-4' 
                  style={{minWidth: "180px"}}
                  onClick={() => navigate('/signup')}
                >
                  Sign up for free
                </button>
              </div>
        </div>  
      </div>
     );
}

export default OpenAccount;