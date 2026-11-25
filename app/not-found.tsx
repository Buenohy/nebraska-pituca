import Link from 'next/link';
import { ButtonDefault } from '@/components/ButtonDefault';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full min-h-[70vh] px-4 text-center bg-zinc-50 dark:bg-black">
      <div className="flex flex-col items-center max-w-md gap-6">
        {/* Ícone ilustrativo */}
        <div className="p-4 rounded-full bg-pituca-primary/10 text-pituca-primary">
          <Frown className="w-16 h-16" />
        </div>

        <h1 className="text-6xl font-ext500 font-bold text-pituca-primary">
          404
        </h1>

        <h2 className="text-2xl font-bold text-pituca-primary">
          Página não encontrada
        </h2>

        <p className="text-pituca-tertiary">
          Ops! Parece que a página que você está procurando não existe ou foi
          movida.
        </p>

        {/* Botão de retorno usando o seu ButtonDefault */}
        <div className="pt-4">
          <Link href="/">
            <ButtonDefault
              text="Voltar para a Página Inicial"
              size="lg"
              variant="default"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
