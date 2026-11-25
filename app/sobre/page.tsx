import Image from 'next/image';

export default function SobrePage() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-50 dark:bg-black">
      <div className="flex w-full max-w-7xl flex-col py-8 px-6 sm:px-12 lg:px-16 gap-8 items-center justify-center">
        <h3 className="text-pituca-primary text-4xl font-bold text-center mt-20">
          A Empresa
        </h3>
        <p className="text-lg text-center text-pituca-tertiary">
          A infância é feita de primeiras descobertas e momentos únicos. A
          Pituca nasceu do desejo de estar presente no dia a dia da sua família,
          oferecendo produtos essenciais que unem segurança, conforto e
          inovação. Para nós, cada detalhe importa, pois sabemos que por trás de
          cada escolha existe o cuidado e o amor incomparável de quem ama.
        </p>
        <Image
          className="rounded-4xl"
          src="/sobre-01.jpg"
          width={600}
          height={600}
          alt="sobre 01"
        />
        <h3 className="text-pituca-primary text-4xl font-bold text-center">
          No que acreditamos
        </h3>
        <div className="flex gap-8">
          <div className="rounded-4xl border border-pituca-primary p-10 bg-pituca-background-white flex flex-col gap-8">
            <h3 className="text-pituca-primary text-4xl font-bold text-center">
              Missão
            </h3>
            <p className="text-lg text-center text-pituca-tertiary">
              Proporcionar produtos seguros e inovadores que promovam o
              bem-estar e o desenvolvimento saudável dos bebês, apoiando as
              famílias em cada etapa.
            </p>
          </div>
          <div className="rounded-4xl border border-pituca-primary p-10 bg-pituca-background-white flex flex-col gap-8">
            <h3 className="text-pituca-primary text-4xl font-bold text-center">
              Visão
            </h3>
            <p className="text-lg text-center text-pituca-tertiary">
              Ser a marca líder e mais confiável no mercado de mamadeiras e
              chupetas, reconhecida pela qualidade, inovação e compromisso com a
              saúde infantil.
            </p>
          </div>
          <div className="rounded-4xl border border-pituca-primary p-10 bg-pituca-background-white flex flex-col gap-8">
            <h3 className="text-pituca-primary text-4xl font-bold text-center">
              Valores
            </h3>
            <p className="text-lg text-center text-pituca-tertiary">
              • Segurança e qualidade impecáveis• Inovação com foco no bebê •
              Compromisso com a saúde e o bem-estar{''}• Atendimento humanizado
              e eficiente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
