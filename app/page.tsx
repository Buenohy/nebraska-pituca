import { ButtonDefault } from '@/components/ButtonDefault';
import HomeCarousel from '@/components/HomeCarousel';
import { HandHeart, ShieldCheck, Sprout } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-50 font-sans dark:bg-black">
      {/* Container Padrão para TODAS as páginas */}
      <div className="flex w-full max-w-7xl flex-col items-center justify-between py-8 px-6 sm:px-12 lg:px-16 gap-16 bg-pituca-background-white dark:bg-black">
        {/* Carrossel */}
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <HomeCarousel />
        </div>

        {/* Seção de Introdução */}
        <div className="flex flex-col gap-6 items-center justify-center text-center max-w-3xl">
          <h3 className="text-pituca-primary text-3xl sm:text-4xl font-bold">
            Porque cada detalhe importa quando o assunto é o seu bebê. Tradição
            em cuidar com amor.
          </h3>
          <p className="text-lg sm:text-xl text-pituca-tertiary">
            Há mais de 50 anos, a Pituca faz parte da família brasileira. Unimos
            a segurança e tradição que você já confia com o design inovador que
            seu bebê merece. Descubra nossa nova coleção, desenvolvida com o
            carinho de quem entende de maternidade desde 1970.
          </p>
        </div>

        {/* Card Vertical */}
        <div className="flex flex-col lg:flex-row gap-12 items-center w-full">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              className="rounded-4xl object-cover w-full max-w-md h-auto"
              src="/card-home.jpg"
              width={500}
              height={500}
              alt="Foto do perfil"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h3 className="text-pituca-primary text-3xl sm:text-4xl font-bold">
              Por que escolher a Pituca?
            </h3>
            <div className="flex gap-3.5 items-start">
              <ShieldCheck className="w-10 h-10 text-pituca-secundary shrink-0" />
              <p className="text-pituca-tertiary text-start">
                Certificação ANVISA - Segurança total e conformidade com as
                normas de saúde.
              </p>
            </div>
            <div className="flex gap-3.5 items-start">
              <Sprout className="w-10 h-10 text-pituca-secundary shrink-0" />
              <p className="text-pituca-tertiary text-start">
                Livre de BPA (BPA Free) - Plásticos atóxicos pensados na saúde
                do seu bebê.
              </p>
            </div>
            <div className="flex gap-3.5 items-start">
              <HandHeart className="w-10 h-10 text-pituca-secundary shrink-0" />
              <p className="text-pituca-tertiary text-start">
                Ergonomia e Conforto - Design desenhado para as mãozinhas
                pequenas.
              </p>
            </div>
          </div>
        </div>

        {/* Card Horizontal (Estatísticas) */}
        <div className="bg-pituca-white w-full rounded-4xl py-10 px-8 border border-pituca-secundary">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-pituca-primary text-3xl font-bold">1970</h3>
              <p className="text-pituca-tertiary text-start text-sm sm:text-base">
                Desde 1970, a Pituca se dedica a facilitar as tarefas cotidianas
                das mães. Anos de tradição, amor e experiência.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-pituca-primary text-3xl font-bold">
                ISO 9001
              </h3>
              <p className="text-pituca-tertiary text-start text-sm sm:text-base">
                Excelência garantida. Nossa equipe é intensamente treinada
                segundo os princípios de qualidade 5S e ISO 9001.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-pituca-primary text-3xl font-bold">
                Inmetro
              </h3>
              <p className="text-pituca-tertiary text-start text-sm sm:text-base">
                Segurança em primeiro lugar. Produtos aprovados pela ANVISA e
                testados por laboratórios credenciados pelo Inmetro.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-pituca-primary text-3xl font-bold">
                2.500 m²
              </h3>
              <p className="text-pituca-tertiary text-start text-sm sm:text-base">
                Sede própria com infraestrutura dedicada exclusivamente a
                fabricar com carinho tudo que o seu bebê precisa.
              </p>
            </div>
          </div>
        </div>

        {/* Chamada Final (CTA) */}
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h3 className="text-pituca-primary text-3xl sm:text-4xl font-bold">
            Cuidando do seu bebê em cada detalhe
          </h3>
          <p className="text-lg sm:text-xl text-pituca-tertiary">
            Conheça nossa linha completa de produtos ou fale com a nossa equipe.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <ButtonDefault text="Ver Produtos" size="lg" variant="secondary" />
            <ButtonDefault text="Fale conosco" size="lg" variant="default" />
          </div>
        </div>
      </div>
    </div>
  );
}
