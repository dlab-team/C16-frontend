import React from 'react'
import "./StylesRegistro.css";

const RegistroComponent = () => {
  return (
    <div>
      <div className="ola">
      </div>
   
    <button className='button__back'> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.8479 15.0576C4.59794 15.3076 4.45752 15.6467 4.45752 16.0002C4.45752 16.3538 4.59794 16.6929 4.8479 16.9429L12.3906 24.4856C12.642 24.7285 12.9788 24.8628 13.3284 24.8598C13.678 24.8568 14.0125 24.7165 14.2597 24.4693C14.5069 24.2221 14.6471 23.8877 14.6501 23.5381C14.6532 23.1885 14.5188 22.8517 14.2759 22.6002L9.00924 17.3336L26.6666 17.3336C27.0202 17.3336 27.3593 17.1931 27.6094 16.943C27.8594 16.693 27.9999 16.3539 27.9999 16.0002C27.9999 15.6466 27.8594 15.3075 27.6094 15.0574C27.3593 14.8074 27.0202 14.6669 26.6666 14.6669L9.00924 14.6669L14.2759 9.40024C14.5188 9.14877 14.6532 8.81197 14.6501 8.46237C14.6471 8.11277 14.5069 7.77836 14.2597 7.53115C14.0124 7.28394 13.678 7.14371 13.3284 7.14067C12.9788 7.13764 12.642 7.27203 12.3906 7.51491L4.8479 15.0576Z" fill="#D6006E"/>
</svg>
</button>
    <div className = "register">
       <h2>Registrate</h2>
       <div className="register__inputgroup">
          <div className="register__input">
             <p>Nombre</p>
             <input type="text" placeholder='Pedro' />
          </div>
          <div className="register__input">
             <p>Apellido</p>
             <input type="text" placeholder='Perez' />
          </div>
          <div className="register__input">
             <p>Correo</p>
             <input type="text" placeholder='correo@electronico.com' />
          </div>

          <div  className="register__input">
             <p>Contraseña</p>
             <div className="register__input__pasword">
             <input type="Pasword " placeholder='*******'/>
             <div className="register__input__pasword__img">   
             <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.73 2.073C10.1516 2.0241 10.5756 1.99973 11 2C15.664 2 19.4 4.903 21 9C20.6127 9.99659 20.0894 10.9348 19.445 11.788M5.52 3.519C3.48 4.764 1.9 6.693 1 9C2.6 13.097 6.336 16 11 16C12.9321 16.0102 14.8292 15.484 16.48 14.48M8.88 6.88C8.6014 7.1586 8.3804 7.48935 8.22963 7.85335C8.07885 8.21736 8.00125 8.6075 8.00125 9.0015C8.00125 9.3955 8.07885 9.78564 8.22963 10.1496C8.3804 10.5137 8.6014 10.8444 8.88 11.123C9.1586 11.4016 9.48934 11.6226 9.85335 11.7734C10.2174 11.9242 10.6075 12.0018 11.0015 12.0018C11.3955 12.0018 11.7856 11.9242 12.1496 11.7734C12.5137 11.6226 12.8444 11.4016 13.123 11.123" stroke="#D6006E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 1L19 17" stroke="#D6006E" stroke-width="1.5" stroke-linecap="round"/>
</svg>


                 </div>
         
             </div>
          </div>
          <div  className="register__input">
             <p>Repetir contraseña</p>
             <div className="register__input__pasword">
             <input type="Pasword"  placeholder='*******' />

             <div className="register__input__pasword__img">   
            
             <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.73 2.073C10.1516 2.0241 10.5756 1.99973 11 2C15.664 2 19.4 4.903 21 9C20.6127 9.99659 20.0894 10.9348 19.445 11.788M5.52 3.519C3.48 4.764 1.9 6.693 1 9C2.6 13.097 6.336 16 11 16C12.9321 16.0102 14.8292 15.484 16.48 14.48M8.88 6.88C8.6014 7.1586 8.3804 7.48935 8.22963 7.85335C8.07885 8.21736 8.00125 8.6075 8.00125 9.0015C8.00125 9.3955 8.07885 9.78564 8.22963 10.1496C8.3804 10.5137 8.6014 10.8444 8.88 11.123C9.1586 11.4016 9.48934 11.6226 9.85335 11.7734C10.2174 11.9242 10.6075 12.0018 11.0015 12.0018C11.3955 12.0018 11.7856 11.9242 12.1496 11.7734C12.5137 11.6226 12.8444 11.4016 13.123 11.123" stroke="#D6006E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 1L19 17" stroke="#D6006E" stroke-width="1.5" stroke-linecap="round"/>
</svg>

                 </div>
             </div>
            
          </div>
          <div className="register__remember" >
             <input  type="radio"/>
             <small>Recodar</small>
          </div>
          <div className="register__button">
             <button className='register__buttons__pink'>Crear cuenta</button>
             <button className='register__buttons__outline'> Ingresar con Google
             <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6035 11.3145L23.4932 10.8462H13.3154V15.1538H19.3965C18.7651 18.1519 15.8354 19.73 13.4424 19.73C11.7012 19.73 9.86572 18.9976 8.65088 17.8203C8.00993 17.1893 7.49973 16.438 7.14951 15.6095C6.79928 14.781 6.6159 13.8916 6.60986 12.9922C6.60986 11.1777 7.42529 9.36279 8.61182 8.16895C9.79834 6.9751 11.5903 6.30713 13.3721 6.30713C15.4126 6.30713 16.875 7.39063 17.4219 7.88477L20.4829 4.83984C19.585 4.05078 17.1182 2.0625 13.2734 2.0625C10.3071 2.0625 7.46289 3.19873 5.38379 5.271C3.33203 7.31152 2.27002 10.2622 2.27002 13C2.27002 15.7378 3.2749 18.541 5.26318 20.5977C7.3877 22.791 10.3965 23.9375 13.4946 23.9375C16.3135 23.9375 18.9854 22.833 20.8896 20.8291C22.7617 18.8564 23.73 16.127 23.73 13.2656C23.73 12.061 23.6089 11.3457 23.6035 11.3145Z" fill="#D6006E"/>
</svg>

             </button>
          </div>
       </div>
   
       <div className='register__footer' >
       <div className='register__background__footer' ></div>
          <div className='register__footer__text'>
             <p>¿Ya tiene una cuenta?</p>
          </div>
          <div className='register__refer'>
            <a href="">Inicia sesión</a> 
          </div>
       </div>
    </div>
 </div>
  )
}

export default RegistroComponent
