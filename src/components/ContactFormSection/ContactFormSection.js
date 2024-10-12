import React, { useState } from "react";
import "./ContactFormSection.scss";
import Dashboard from '../services/img/Dashboard.png'

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [formErrors, setFormErrors] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (/^[\d\s-]+$/.test(formData.phone)) {
      errors.phone = "Phone number must contain only digits";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
      setIsModalOpen(true);
      setFormData({ name: "", phone: "", email: "", comment: "" });

      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
    }
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="request">
        <h2>Оставьте заявку на бетатест</h2>
        <p>Мы уделяем особое внимание эргономике и стараемся соответствовать месту работы</p>
        <img className="request-img" src={Dashboard} alt="Dashboard"/>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Иван"
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Номер телефона</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+7 000 000-00-00"
            />
            {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="comment">Комментарий к заявке</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Здравствуйте, хотелось бы..."
            />
          </div>
          <p>Нажимая «Отправить» вы соглашаетесь с <u>политикой конфиденциальности</u></p>
          <button type="submit" onSubmit={setFormData} className="submit-btn">Отправить</button>
        </form>
      </div>
      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-form">
          <div className="form-content">
            <p>Ваши данные отправлены</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactFormSection;
