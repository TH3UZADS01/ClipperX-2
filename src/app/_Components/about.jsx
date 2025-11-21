import bg2 from '../../../public/bgAbout.png';
import Image from 'next/image';

export function About() {
  return (
    <section className="text-white relative overflow-hidden h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/bgAbout.png')" }}>
      <div className="max-w-4xl text-center space-y-6">

        <h2 className="text-7xl font-bold">Sobre o Clipper<span className="text-indigo-800">X</span></h2>

        <p className="text-2xl  text-gray-300 leading-relaxed">
          Conectamos barbearias e clientes em uma experiência única de agendamento online. Simplifique sua rotina, maximize o aproveitamento dos horários e ofereça um atendimento de excelência.
        </p>

      </div>
    </section>
  );
}