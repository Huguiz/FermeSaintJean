// assets
import backgroundImage from "../assets/3.jpg";
import abricotImage from "../assets/1.jpg";
import productsList from "../assets/products.json";


export default function Products() {
    return (
        <section style={{ backgroundImage: `url(${backgroundImage})` }} className="text-center">
            <h1 className="py-5 title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">Nous vous proposons...</h1>
            {
                productsList.map((element, index) => {
                    return (
                        <article key={index} className="w-11/12 bg-slate-200 rounded-lg p-3 mx-auto my-3">
                            <h1 className="pb-1 font-bold text-xl">{element.title}</h1>
                            <div className="py-2 flex gap-2  border-t border-black">
                                {console.log(element.image)}
                                <img src={element.image} alt={`${element.title} image`} className="w-[75px] h-[75px] object-cover" />
                                <p className="text-sm text-justify">{element.description}</p>
                            </div>
                            <i><p className="text-sm">{element.hint}</p></i>
                        </article>
                    )
                })
            }
        </section>
    )
}