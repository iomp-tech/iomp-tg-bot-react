import React from "react";
import axios from "axios";

import {useTelegram} from "../../hooks/useTelegram";

import {Thank} from "../";

const CoursePageForm: React.FC = () => {
    const [isSend, setIsSend] = React.useState<boolean>(false);

    const {tg, queryId} = useTelegram();

    const onSubmit = (e: any) => {
        e.preventDefault();

        // window.location.href =
        // "https://shop.iomp.ru/index.php?r=form/telegram&id_bot=7&tags=14";

        axios
            .post("https://api.hobjobindia.com/course-form", {
                title: "Гештальт-терапия",
                queryId,
            })
            .then(({data}) => {});

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
