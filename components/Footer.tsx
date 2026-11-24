import { Mail, MapPin, Phone, Square } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="flex flex-col  bg-pituca-primary p-7  w-full h-fit">
      <div className="flex gap-12 items-center justify-between">
        <div>
          <Image
            src="/pituca-logo-4x-background.png"
            width={200}
            height={200}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            href="https://www.instagram.com/pitucababy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pituca-white hover:text-pituca-secundary"
          >
            Nos siga no Instagram
          </Link>
          <Square className="w-8 h-8 text-pituca-secundary" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center justify-center">
            <Phone className="w-4 h-4 text-pituca-secundary" />
            <a
              href="tel:+551145069199"
              className="text-pituca-white hover:text-pituca-secundary"
            >
              Telefone: (11) 4506-9199
            </a>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <Mail className="w-4 h-4 text-pituca-secundary" />
            <a
              href="mailto:contato@pituca.com.br"
              className="text-pituca-white hover:text-pituca-secundary"
            >
              E-mail: contato@pituca.com.br
            </a>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <MapPin className="w-4 h-4 text-pituca-secundary" />
            <Link
              href="https://maps.app.goo.gl/PH52FSrAqDCgdULL9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pituca-white hover:text-pituca-secundary"
            >
              Endereço: Ipiranga - São Paulo/SP
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-pituca-white">
          Pituca é uma empresa{' '}
          <span className="text-pituca-secundary">NEBRASKA</span>.
        </p>
        <p className="text-pituca-white">Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
