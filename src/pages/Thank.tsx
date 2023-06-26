import React from "react";

const Thank: React.FC = () => {
    return (
        <section className="thank">
            <div className="container">
                <div className="thank-wrapper">
                    <h2 className="thank__title">Спасибо за заявку!</h2>
					<button className="btn thank__btn">
						Закрыть
					</button>
                </div>
            </div>
        </section>
    );
};

export default Thank;
