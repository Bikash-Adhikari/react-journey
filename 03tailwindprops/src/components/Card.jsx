import React from "react";

function Card({ name, profession, country, btnText = "Explore Me" }) {
    return (

        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-1 w-150">
            <img className="h-24 md:w-48 md:h-auto  mx-auto rounded-xl w-auto" src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="auto" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {name}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {profession}, {country}
                    </div>

                </figcaption>

                <figcaption className="font-medium">
                    <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>{btnText}→</button>
                </figcaption>
            </div>
        </figure>
    )
}


export default Card