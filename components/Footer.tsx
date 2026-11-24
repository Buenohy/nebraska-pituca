import { Mail, MapPin, Phone, Square } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <div className="flex gap-12 bg-pituca-primary p-7 items-center justify-between w-full h-fit">
      <div>
        <Image
          src="/pituca-logo-4x-background.png"
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-pituca-white">Nos siga no Instagram</p>
        <Square className="w-8 h-8 text-pituca-secundary" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-2 items-center justify-center">
          <Phone className="w-4 h-4 text-pituca-secundary" />
          <p className="text-pituca-white">Telefone: (11) 4506-9199</p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Mail className="w-4 h-4 text-pituca-secundary" />
          <p className="text-pituca-white">E-mail: contato@pituca.com.br</p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <MapPin className="w-4 h-4 text-pituca-secundary" />
          <p className="text-pituca-white">Endereço: Ipiranga - São Paulo/SP</p>
        </div>
      </div>
    </div>
  );
}
