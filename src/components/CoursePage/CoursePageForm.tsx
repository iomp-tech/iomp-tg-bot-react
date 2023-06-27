import React from "react";

import {useTelegram} from "../../hooks/useTelegram";

import {Thank} from "../";

const CoursePageForm: React.FC = () => {
    const [isSend, setIsSend] = React.useState<boolean>(false);

    const {tg} = useTelegram();

    const onSubmit = (e: any) => {
        console.log(e);

        e.preventDefault();

        const data = {
            country: "123",
        };
        tg.sendData(JSON.stringify(data));

        setIsSend(true);
    };

    return (
        <>
            {isSend ? (
                <Thank />
            ) : (
                <form className="course-page-form" onSubmit={onSubmit}>
                    <h3 className="course-page-form__title">
                        Оставьте заявку на обученеие
                    </h3>

                    <div className="course-page-form-input">
                        <input
                            type="text"
                            name="name"
                            className="input course-page-form-input__input"
                            placeholder="Ваше имя"
                            required
                        />
                    </div>

                    <div className="course-page-form-input">
                        <input
                            type="text"
                            name="email"
                            className="input course-page-form-input__input"
                            placeholder="Ваша почта"
                            required
                        />
                    </div>

                    <div className="course-page-form-input">
                        <input
                            type="text"
                            name="phone"
                            className="input course-page-form-input__input"
                            placeholder="Ваш телефон"
                            required
                        />
                    </div>

                    <button className="btn course-page-form__btn">
                        Оставить заявку
                    </button>
                </form>
            )}
        </>
    );
};

export default CoursePageForm;
