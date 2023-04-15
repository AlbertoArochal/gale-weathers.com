import gale_woods from "../../assets/img/gale_woods.gif";

export const Galebooks = () => {
    return (
        <>
            <div className="books__container">
                <div className="books__title">
                    <h1>FOCUS ON BOOKS</h1>
                </div>

                <section className="books__critiques">
                    <div className="books__img">
                        <img
                            src={gale_woods}
                            alt="Gale holding a Woodsboro Murders book"
                        />
                    </div>
                    <div className="items__container">
                        <div className="books__item">
                            <h4>
                                Wrongly Accused: The Maureen Prescott Murder{" "}
                                <span>1995</span>
                            </h4>
                            <p>
                                This gripping account of a real-life murder
                                mystery and the ensuing trial held onto the top
                                of the Bestseller list for nearly three weeks.
                                Read about the tragic slaughter of Maureen
                                Prescott and her daughter Sidney's vengeful
                                mission to convict her mother's lover, Cotton
                                Weary. Using the latest techniques of
                                investigative journalism, Ms. Weathers' detailed
                                book was a key tool in Mr. Weary's exoneration
                            </p>
                            <p className="critic">
                                "Weathers' book is as thorough as she is
                                attractive." - Rex Horton, New York Book
                                Guardian.
                            </p>
                        </div>
                        <div className="books__item">
                            <h4>
                                The Woodsboro Murders <span>1996</span>
                            </h4>
                            <p>
                                Gale Weathers' second novel details the
                                murderous plot of two angry teenagers determined
                                to murder Sidney Prescott and her innocent
                                friends. In a bizarre turn of events, the author
                                herself became not only a target of the killers,
                                but a hero. Ms. Weathers' book became the
                                Sunrise Studios hit movie Stab.
                            </p>
                            <p className="critic">
                                "Ms. Weathers is the hurricane of investigative
                                journalists." - Mary Marks, National Book Guide.
                            </p>
                        </div>
                        <div className="books__item">
                            <h4>
                                The Windsor College Murders <span>1997</span>
                            </h4>{" "}
                            <p>
                                Ms. Weathers is once again in the eye of a
                                dangerous storm and emerges a hero. This time,
                                murder follows Sidney Prescott to college, where
                                Ms. Weathers is covering a story on the copycat
                                murders of two students during a screening of
                                the hit slasher film. Read how Gale
                                singlehandedly brought the killers to justice in
                                this exciting novel that became the hit movie
                                Stab 2.
                            </p>
                            <p className="critic">
                                "Gale is the Wonder Woman of journalism! God
                                bless her!" -Mark Anderson, Bible Belt Review of
                                Books.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
