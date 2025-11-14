"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, ArrowUpRight, MessageCircle, Globe2 } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 bg-[#020D08] text-[#E5FFF4]">
      {/* subtle top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#B3FFE4]" />

      {/* soft glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-6rem] h-64 w-64 rounded-full bg-[#00F06B]/12 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-4rem] h-64 w-64 rounded-full bg-[#3DD9A7]/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(179,255,228,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {/* Column 1: Brand */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              <div className="relative h-9 w-auto sm:h-10">
                <Image
                  src="/logo.png"
                  alt="SDrive logo"
                  width={160}
                  height={40}
                  className="h-full w-auto"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.18em] text-[#B3FFE4] uppercase">
                  SDrive
                </span>
                <span className="text-[11px] font-medium text-[#7FEEC7] tracking-[0.22em] uppercase">
                  Smart City Rides
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-xs sm:text-[13px] text-[#C3F5E4]">
              SDrive is building a movement for safe, dignified and electric mobility
              across African cities — connecting riders, drivers, couriers and partners
              through one platform.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] text-[#92E8C5]">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1">
                <Globe2 className="h-3.5 w-3.5 text-[#00F06B]" />
                <span>SDrive · a Summer Set Continental brand</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B3FFE4]">
              Product
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-[13px] sm:gap-2">
              <div className="space-y-2">
                <FooterLink href="#services">Services</FooterLink>
                <FooterLink href="#lease-car">Lease a Car</FooterLink>
                <FooterLink href="#bike-leasing">Lease a Bike</FooterLink>
                <FooterLink href="#taxi-service">Taxi Service</FooterLink>
                <FooterLink href="#delivery-service">Delivery Service</FooterLink>
              </div>
              <div className="space-y-2">
                <FooterLink href="#partners">Partners</FooterLink>
                <FooterLink href="#about">About SDrive</FooterLink>
                <FooterLink href="#terms-conditions">Terms &amp; Conditions</FooterLink>
                <FooterLink href="#privacy">Privacy Notice</FooterLink>
                <FooterLink href="#help-center">Help Center</FooterLink>
              </div>
            </div>
          </div>

          {/* Column 3: Contact / CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B3FFE4]">
              Contact &amp; Support
            </h3>

            <div className="mt-3 space-y-2 text-[13px]">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-[#00F06B]" />
                <p className="text-[#C3F5E4]">
                  Operating across African cities with HQ support from UAE.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#3DD9A7]" />
                <a
                  href="mailto:support@sdrive.africa"
                  className="text-[#E5FFF4] hover:text-[#00F06B]"
                >
                  support@sdrive.africa
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#3DD9A7]" />
                <span className="text-[#C3F5E4]">+971 · contact via app for local support</span>
              </div>
            </div>

            {/* Mini “get in touch” CTA */}
            <div className="mt-5 rounded-2xl border border-[#00F06B]/35 bg-white/5 p-3 text-[11px] text-[#C3F5E4] backdrop-blur">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="font-semibold text-[#E5FFF4]">
                  Partner with SDrive
                </span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#00F06B]/15 text-[#00F06B]">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <p>
                Fleet owners, businesses and charging partners can plug into the SDrive
                network and grow with us.
              </p>
              <button className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#00F06B] px-3 py-1.5 text-[11px] font-semibold text-[#024122] shadow-[0_8px_24px_rgba(0,240,107,0.35)] hover:bg-[#00d65f]">
                Talk to our team
                <MessageCircle className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 border-t border-white/10 pt-4 text-[11px] text-[#8DDDC0] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SDrive Mobility Technologies Ltd. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-[#C3F5E4] hover:bg-white/5">
              English · EN
            </button>
            <p className="text-[10px] text-[#7ADAB9]">
              Built for safe, electric and dignified mobility across Africa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-[#C3F5E4] hover:text-[#00F06B] transition-colors"
  >
    {children}
  </Link>
);

export default Footer;
