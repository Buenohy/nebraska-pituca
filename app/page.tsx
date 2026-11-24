import HomeCarousel from '@/components/HomeCarousel';
import { Navbar } from '@/components/Navbar';
import { HandHeart, ShieldCheck, Sprout } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-16 bg-pituca-background-white dark:bg-black sm:items-start">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-left">
          <HomeCarousel />
          <div className="flex flex-col gap-8 items-center justify-center text-center">
            <h3 className="text-pituca-primary text-4xl font-bold">
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
          <div className="flex gap-12">
            <div>
              <Image
                className="rounded-4xl"
                src="/card-home.jpg"
                width={500}
                height={500}
                alt="Foto do perfil"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-pituca-primary text-4xl font-bold">
                Por que escolher a Pituca?
              </h3>
              <div className="flex gap-3.5">
                <ShieldCheck className="w-11 h-11 text-pituca-secundary" />
                <p className="text-pituca-tertiary">
                  Certificação ANVISA - Segurança total e conformidade com as
                  normas de saúde.
                </p>
              </div>
              <div className="flex gap-3.5">
                <Sprout className="w-11 h-11 text-pituca-secundary" />
                <p className="text-pituca-tertiary">
                  Livre de BPA (BPA Free) - Plásticos atóxicos pensados na saúde
                  do seu bebê.
                </p>
              </div>
              <div className="flex gap-3.5">
                <HandHeart className="w-11 h-11 text-pituca-secundary" />
                <p className="text-pituca-tertiary">
                  Ergonomia e Conforto - Design desenhado para as mãozinhas
                  pequenas.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-pituca-white w-full h-70 rounded-4xl py-12 px-7 border border-pituca-secundary">
            <div className="flex gap-12">
              <div className="flex flex-col gap-3">
                <h3 className="text-pituca-primary text-4xl font-bold">1970</h3>
                <p className="text-pituca-tertiary">
                  Desde 1970, a Pituca se dedica a facilitar as tarefas
                  cotidianas das mães. Anos de tradição, amor e experiência.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-pituca-primary text-4xl font-bold">
                  ISO 9001
                </h3>
                <p className="text-pituca-tertiary">
                  Excelência garantida. Nossa equipe é intensamente treinada
                  segundo os princípios de qualidade 5S e ISO 9001.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-pituca-primary text-4xl font-bold">
                  Inmetro
                </h3>
                <p className="text-pituca-tertiary">
                  Segurança em primeiro lugar. Produtos aprovados pela ANVISA e
                  testados por laboratórios credenciados pelo Inmetro.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-pituca-primary text-4xl font-bold">
                  2.500 m²
                </h3>
                <p className="text-pituca-tertiary">
                  Sede própria com infraestrutura dedicada exclusivamente a
                  fabricar com carinho tudo que o seu bebê precisa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
