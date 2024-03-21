// assets
import FieldImage from "../assets/5.png";
import Tractor from "../assets/7.jpg";
import Product from "../assets/9.png";
import Nature from "../assets/10.png";
import carousel1 from "../assets/2.jpg";
import carousel2 from "../assets/3.jpg";
import carousel3 from "../assets/4.jpg";
import carousel4 from "../assets/11.jpg";
import carousel5 from "../assets/12.jpg";
import carousel6 from "../assets/13.jpg";
import carousel7 from "../assets/14.jpg";
import carousel8 from "../assets/15.jpg";


export default function Welcome() {
    return (
        <section>
            <article className="relative flex-1">
                <img src={FieldImage} alt="Field image" className="w-full shadow-inner relative -z-10" />
                <div className="shade absolute open bottom-0 w-full" />
            </article>
            <article className="bg-slate-100 p-5 md:px-16 lg:px-20 xl:px-32 flex flex-col justify-between items-center sm:flex-row gap-x-10 lg:gap-x-32 gap-y-5">
                <div>
                    <h1 className="title text-2xl md:sm:text-4xl lg:text-5xl xl:text-6xl">La ferme</h1>
                    <p className="pt-4 text-sm text-justify sm:text-base sm:text-lg lg:text-xl xl:text-2xl">
                        Installée depuis cinq générations au cœur de la vallée de l'Oule, à l'ouest des Hautes-Alpes et à proximité de la Drôme, notre ferme familiale incarne un héritage agricole que nous chérissons profondément. Avec mon père Laurent, nous sommes les gardiens de cette terre fertile et généreuse.
                    </p>
                </div>
                <div className="self-center max-w-52 sm:min-w-52 md:min-w-72 lg:min-w-96">
                    <img className="rounded-full shadow-2xl" src={Tractor} alt="Tractor image" />
                </div>
            </article>
            <article className="pt-12 md:pt-32 bg-slate-100 p-5 md:px-16 lg:px-20 xl:px-32 flex flex-col-reverse justify-between items-center sm:flex-row gap-x-10 lg:gap-x-32 gap-y-5">
                <div className="self-center shadow-2xl max-w-52 sm:min-w-52 md:min-w-72 lg:min-w-96 rounded-lg">
                    <img src={Product} alt="Tractor image" />
                </div>
                <div>
                    <h1 className="title text-end text-2xl md:sm:text-4xl lg:text-5xl xl:text-6xl">Que produisons-nous ?</h1>
                    <p className="pt-4 text-sm text-justify sm:text-base sm:text-lg lg:text-xl xl:text-2xl">
                        Ici, nous cultivons une variété de produits qui nourrissent le sol et l'âme: des céréales ondulant sous le vent, des fruits juteux comme les abricots et les prunes, des noix savoureuses, de la lavande aux parfums enivrants, et du bois de chauffage pour réconforter nos hivers. Nos vaches de race charolaise, élevées avec tendresse, ajoutent une touche bucolique à notre exploitation.
                    </p>
                </div>
            </article>
            <article className="pb-24 pt-12 md:pt-32 bg-slate-100 p-5 md:px-16 lg:px-20 xl:px-32 flex flex-col justify-between items-center sm:flex-row gap-x-10 lg:gap-x-32 gap-y-5">
                <div>
                    <h1 className="title text-2xl md:sm:text-4xl lg:text-5xl xl:text-6xl">L'étique</h1>
                    <p className="pt-4 text-sm text-justify sm:text-base sm:text-lg lg:text-xl xl:text-2xl">
                        Conscients de notre responsabilité envers la nature, nous avons choisi de convertir une partie de nos terres à l'agriculture biologique, offrant ainsi des produits de qualité dans le respect de l'environnement. Cette ferme, bien plus qu'un lieu de travail, est le cœur battant d'une tradition familiale où chaque génération apporte son savoir-faire, son amour pour la terre et son engagement envers la durabilité.
                    </p>
                </div>
                <div className="self-center shadow-2xl max-w-52 sm:min-w-52 md:min-w-72 lg:min-w-96">
                    <img className="rounded-lg" src={Nature} alt="Tractor image" />
                </div>
            </article>
            <article className="relative">
                <div className="shade close h-8" ></div>
                <div className=" flex flex-row gap-20 overflow-x-auto h-[225px] pb-12 px-7">
                    <img className="shadow-xl max-w-fit" src={carousel1} alt="Carousel image" />
                    <img className="shadow-xl max-w-fit" src={carousel2} alt="Carousel image" />
                    <img className="shadow-xl max-w-fit" src={carousel3} alt="Carousel image" />
                    <img className="shadow-xl max-w-fit" src={carousel4} alt="Carousel image" />
                    <img className="shadow-xl max-w-fit" src={carousel5} alt="Carousel image" />
                    <img className="shadow-xl max-w-fit" src={carousel6} alt="Carousel image" />
                    <img className="shadow-xl max-w-fit" src={carousel7} alt="Carousel image" />
                    <img className="shadow-xl max-w-fit" src={carousel8} alt="Carousel image" />
                </div>
            </article>
        </section>
    )
}