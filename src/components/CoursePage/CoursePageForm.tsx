import React from "react";

const CoursePageForm: React.FC = () => {
    return (
        <div className="course-page-form">
            <h3 className="course-page-form__title">
                Оставьте заявку на обученеие
            </h3>

            <div className="course-page-form-input">
                <input
                    type="text"
                    name="name"
                    className="input course-page-form-input__input"
                    placeholder="Ваше имя"
                />
            </div>

            <div className="course-page-form-input">
                <input
                    type="text"
                    name="email"
                    className="input course-page-form-input__input"
                    placeholder="Ваша почта"
                />
            </div>

            <div className="course-page-form-input">
                <input
                    type="text"
                    name="phone"
                    className="input course-page-form-input__input"
                    placeholder="Ваш телефон"
                />
            </div>

            <button className="btn course-page-form__btn">
                Оставить заявку
            </button>
        </div>
    );
};

export default CoursePageForm;
