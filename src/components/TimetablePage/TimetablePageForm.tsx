import React from "react";
import axios from "axios";

import {useTelegram} from "../../hooks/useTelegram";

import {Thank} from "../";

const TimetablePageForm: React.FC = () => {
    const [isSend, setIsSend] = React.useState<boolean>(false);

    const {tg, queryId} = useTelegram();

    const onSubmit = (e: any) => {
        e.preventDefault();

        window.location.href =
            "https://shop.iomp.ru/index.php?r=form/telegram&id_bot=7&tags=14";
        // axios
        //     .post("https://api.hobjobindia.com/timetable-form", {
        //         title: "Гештальт-терапия",
        //         queryId,
        //     })
        //     .then(({data}) => {});

        // setIsSend(true);
    };

    return (
        <>
            {isSend ? (
                <Thank />
            ) : (
                <form className="timetable-page-form" onSubmit={onSubmit}>
                    <h3 className="timetable-page-form__title">
                        Оставьте заявку на обученеие
                    </h3>

                    <div className="timetable-page-form-input">
                        <input
                            type="text"
                            name="email"
                            className="input timetable-page-form-input__input"
                            placeholder="Ваша почта"
                            required
                        />
                    </div>

                    <div className="timetable-page-form-input">
                        <input
                            type="text"
                            name="phone"
                            className="input timetable-page-form-input__input"
                            placeholder="Ваш телефон"
                            required
                        />
                    </div>

                    <button
                        className="btn timetable-page-form__btn"
                        type="submit"
                    >
                        Оставить заявку
                    </button>
                </form>
            )}
        </>
    );
};

export default TimetablePageForm;
