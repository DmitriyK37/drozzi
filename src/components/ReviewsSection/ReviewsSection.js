import React, { useState, useEffect } from "react";
import "./ReviewsSection.scss";

const reviewsData = [
  {
    id: 1,
    name: "Федот Сергеев",
    position: "Дизайнер",
    photo: "avatar1.png",
    review:
      "Я использовал этот софт для фрилансера и был впечатлен его функциональностью и простотой использования. Программа помогла мне организовать свою работу и улучшить эффективность выполнения задач. Особенно мне нравится, что софт предоставляет возможность создавать и отправлять запросы на выполнение работ, а также следить за своим временем и расходованием ресурсов.",
    fullReview:
      "Я использовал этот софт для фрилансера и был впечатлен его функциональностью и простотой использования. Программа помогла мне организовать свою работу и улучшить эффективность выполнения задач. Особенно мне нравится, что софт предоставляет возможность создавать и отправлять запросы на выполнение работ, а также следить за своим временем и расходованием ресурсов. Я использовал этот софт для фрилансера и был впечатлен его функциональностью и простотой использования. Программа помогла мне организовать свою работу и улучшить эффективность выполнения задач. Особенно мне нравится, что софт предоставляет возможность создавать и отправлять запросы на выполнение работ, а также следить за своим временем и расходованием ресурсов.",
  },
  {
    id: 2,
    name: "Болексей Арисов",
    position: "Разработчик",
    photo: "avatar2.png",
    review:
      "В целом, я считаю, что этот софт для фрилансера - это хороший выбор для тех, кто стремится улучшить свою рабочую эффективность и успешно координировать свои проекты. Он упрощает процессы и облегчает работу, что делает его очень полезным инструментом для фрилансеров.",
    fullReview:
      "В целом, я считаю, что этот софт для фрилансера - это хороший выбор для тех, кто стремится улучшить свою рабочую эффективность и успешно координировать свои проекты. Он упрощает процессы и облегчает работу, что делает его очень полезным инструментом для фрилансеров. В целом, я считаю, что этот софт для фрилансера - это хороший выбор для тех, кто стремится улучшить свою рабочую эффективность и успешно координировать свои проекты. Он упрощает процессы и облегчает работу, что делает его очень полезным инструментом для фрилансеров.",
  },
  {
    id: 3,
    name: "Маман Рамаев",
    position: "Техлид в РЖД",
    photo: "avatar3.png",
    review:
      "Благодаря этому софту я смог значительно улучшить свою эффективность и организацию, что, в свою очередь, позволило мне зарабатывать больше денег и удовлетворять потребности моих клиентов. Хорошие функции, такие как автоматизация платежей и напоминания о задачах, делают его незаменимым инструментом для фрилансеров.",
    fullReview:
      "Благодаря этому софту я смог значительно улучшить свою эффективность и организацию, что, в свою очередь, позволило мне зарабатывать больше денег и удовлетворять потребности моих клиентов. Хорошие функции, такие как автоматизация платежей и напоминания о задачах, делают его незаменимым инструментом для фрилансеров. Благодаря этому софту я смог значительно улучшить свою эффективность и организацию, что, в свою очередь, позволило мне зарабатывать больше денег и удовлетворять потребности моих клиентов. Хорошие функции, такие как автоматизация платежей и напоминания о задачах, делают его незаменимым инструментом для фрилансеров.",
  },
  {
    id: 2,
    name: "Болексей Арисов",
    position: "Разработчик",
    photo: "avatar2.png",
    review:
      "В целом, я считаю, что этот софт для фрилансера - это хороший выбор для тех, кто стремится улучшить свою рабочую эффективность и успешно координировать свои проекты. Он упрощает процессы и облегчает работу, что делает его очень полезным инструментом для фрилансеров.",
    fullReview:
      "В целом, я считаю, что этот софт для фрилансера - это хороший выбор для тех, кто стремится улучшить свою рабочую эффективность и успешно координировать свои проекты. Он упрощает процессы и облегчает работу, что делает его очень полезным инструментом для фрилансеров. В целом, я считаю, что этот софт для фрилансера - это хороший выбор для тех, кто стремится улучшить свою рабочую эффективность и успешно координировать свои проекты. Он упрощает процессы и облегчает работу, что делает его очень полезным инструментом для фрилансеров.",
  }
];

const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalReview, setModalReview] = useState(false);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);

  const handleShowMore = (review) => {
    setModalReview(review);
  };

  const handleCloseModal = () => {
    setModalReview(false);
  };
  
    // Обновляем количество отзывов на странице в зависимости от ширины экрана
    useEffect(() => {
      const updateReviewsPerPage = () => {
        if (window.innerWidth < 768) {
          setReviewsPerPage(1);
        } else {
          setReviewsPerPage(3);
        }
      };
      updateReviewsPerPage();
      window.addEventListener('resize', updateReviewsPerPage);
      return () => window.removeEventListener('resize', updateReviewsPerPage);
    }, []);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);

    // Обработчики для перехода между страницами
    const nextPage = () => {
      if (currentPage < Math.ceil(reviewsData.length / reviewsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

  const ReviewsItem = currentReviews.map(({id, photo, name, position, review, fullReview}) => {
		return (
      <div key={id} className="review-card">
        <img src={process.env.PUBLIC_URL + `/img/${photo}`} alt={name} className="review-photo" />
        <div className="review-content">
          <h3>{name}</h3>
          <p className="position">{position}</p>
          <p className="review-text">{review}</p>
        </div>
        <a href="##"
            className="show-more-btn"
            onClick={() => handleShowMore({id, photo, name, position, fullReview})}
          >
            Показать еще
          </a>
      </div>
		)
	})

  return (
    <div id="reviews" className="reviews-section">
      <h2>Отзывы</h2>
      <div className="reviews-container">
        {ReviewsItem}
      </div>
      <div className="pagination">
        <button className="arrow-btn" onClick={prevPage} disabled={currentPage === 1}>
        </button>
        <span className="page-info">
          {currentPage} / {Math.ceil(reviewsData.length / reviewsPerPage)}
        </span>
        <button
          className="arrow-btn arrow-btn-right"
          onClick={nextPage}
          disabled={currentPage === Math.ceil(reviewsData.length / reviewsPerPage)}
        >
        </button>
      </div>

      {/* Модальное окно для отображения полного отзыва */}
      {modalReview && (
        <div className="reviews-modal" onClick={handleCloseModal}>
          <div className="reviews-content">
            <img src={process.env.PUBLIC_URL + `/img/${modalReview.photo}`} alt={modalReview.name} className="modal-photo" />
            <h3>{modalReview.name}</h3>
            <p className="position">{modalReview.position}</p>
            <p className="review-text">{modalReview.fullReview}</p>
            <button className="reviews-modal-btn" onClick={handleCloseModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
