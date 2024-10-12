import './RegisterModal.scss'

const RegisterModal = (props) => {
  const {setModalOpen} = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={() => setModalOpen(false)}></span>
        <form>
          <h3>Вход в систему</h3>
          <label htmlFor='E-mail'>E-mail</label>
          <input type="text" id='E-mail' placeholder="example@email.com" required />
          <label htmlFor='password'>Пароль</label>
          <input type="password" id='password' placeholder="••••••••••••••••••" required />
          <div className="remember-container">
            <label htmlFor="remember" className="remember-label">
              <input type="checkbox" id="remember" name="remember"/>
              <span className="custom-checkbox"></span>
              Запомни меня
            </label>
          </div>
          <button className="modal-content-btn" type="submit">Войти</button>
          <div>
            <p>Или войдите с помощью</p>
            <div className='enter-social'>
              <a href="##">  Google</a>
              <a href="##">  Apple ID</a>
            </div>
          </div>
          <p>Впервые в системе?   
            <a href="##" className='registration'>  Регистрация</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;