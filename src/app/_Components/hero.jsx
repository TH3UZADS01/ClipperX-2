import bg from '../../../public/Bg.jpg';
import Image from 'next/image';

export function Hero() {
    return (
        
        
  <section
  className="text-gray-100 relative overflow-hidden h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/Bg.jpg')" }}
>


            <div>

                <article>

                    <div>
                        <h1 className="mix-blend-color-dodge mt-10 font-extrabold text-9xl leading-none text-center">
                            ClipperX
                        </h1>
                        <p className="mt-20 text-2xl font-sans text-center">
                            A plataforma moderna para barbearias e clientes que buscam praticidade e excelência.
                        </p>
                    </div>

                </article>

            </div>
        </section>
    );
}