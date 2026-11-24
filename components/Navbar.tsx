'use client';
import React, { useState } from 'react';
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ModeToggle } from './dark-mode';

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn('fixed top-10 inset-x-0 max-w-4xl mx-auto z-50', className)}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item={
            <Image
              className="w-8 h-8"
              src="/pituca-logo-4x-background.png"
              width={100}
              height={100}
              alt="Pituca logo"
              priority
            />
          }
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/"></HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm text-pituca-quaternary">
            <HoveredLink href="/">Home</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Produtos">
          <div className="flex flex-col space-y-4 text-sm text-pituca-quaternary">
            <HoveredLink href="/contact">Produtos</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Sobre">
          <div className="flex flex-col space-y-4 text-sm text-pituca-quaternary">
            <HoveredLink href="/sobre">Sobre</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contato">
          <div className="flex flex-col space-y-4 text-sm text-pituca-quaternary">
            <HoveredLink href="/contato">Contato</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="FAQ">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/faq">FAQ</HoveredLink>
          </div>
        </MenuItem>
        <ModeToggle />
      </Menu>
    </div>
  );
}
