import HomeCarousel from '@/components/HomeCarousel';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-pituca-background-white dark:bg-black sm:items-start">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-left">
          <HomeCarousel />
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <h3 className="text-pituca-primary text-4xl">
              Porque cada detalhe importa quando o assunto é o seu bebê.
              Tradição em cuidar com amor.
            </h3>
            <p className="text-xl text-pituca-tertiary">
              Há mais de 50 anos, a Pituca faz parte da família brasileira.
              Unimos a segurança e tradição que você já confia com o design
              inovador que seu bebê merece. Descubra nossa nova coleção,
              desenvolvida com o carinho de quem entende de maternidade desde
              1970.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
