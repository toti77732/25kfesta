import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Zap, Hand, Printer, Check, X, ShieldCheck, Star, Mail, MessageCircle, Clock, AlertCircle, Sparkles, Video, Palette, FileText, Gift, Calculator, Smartphone, Users, CheckCircle2, ShoppingBag } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroVideo from "@/assets/hero-video.mp4";
import heroPoster from "@/assets/hero-poster.jpg";
import party1 from "@/assets/party-1.webp";
import party2 from "@/assets/party-2.webp";
import party3 from "@/assets/party-3.webp";
import party4 from "@/assets/party-4.webp";
import party5 from "@/assets/party-5.webp";
import party6 from "@/assets/party-6.webp";
import party7 from "@/assets/party-7.webp";
import party8 from "@/assets/party-8.webp";
import party9 from "@/assets/party-9.webp";
import party10 from "@/assets/party-10.webp";
import depoimento1 from "@/assets/depoimento-1.webp";
import depoimento2 from "@/assets/depoimento-2.webp";
import depoimento3 from "@/assets/depoimento-3.webp";
import depoimento4 from "@/assets/depoimento-4.webp";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clube Festa em Casa 2026 | +15.000 Moldes a partir de R$3,99" },
      {
        name: "description",
        content:
          "Monte a festa do seu filho por menos de R$50: +15.000 moldes prontos para imprimir. Planos a partir de R$3,99, acesso imediato.",
      },
    ],
    links: [
      { rel: "preload", as: "image", href: heroPoster, fetchPriority: "high" } as unknown as { rel: string; as: string; href: string },
    ],
  }),
});

const CHECKOUT_URL = "https://pay.wiapy.com/76rCeOx_1z";
const CHECKOUT_BASIC_URL = "https://pay.wiapy.com/JJJq2triCZll";

const scrollToPlan = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const el = document.getElementById("plano");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const CTA = ({ children, variant = "solid" }: { children: React.ReactNode; variant?: "solid" | "outline" }) => (
  <a
    href="#plano"
    onClick={scrollToPlan}
    className={`block w-full rounded-full px-6 py-5 text-center text-base font-extrabold uppercase tracking-wide sm:text-lg ${
      variant === "outline" ? "btn-cta-outline" : "btn-cta text-white"
    }`}
  >
    {children}
  </a>
);

const gallery = [
  { src: party1, alt: "Festa tema Dragon Ball com balões azuis e laranjas", w: 1125, h: 1403 },
  { src: party2, alt: "Festa tema Princesas Disney com balões pastel", w: 736, h: 736 },
  { src: party3, alt: "Festa tema Princesas cute com castelo", w: 1080, h: 1044 },
  { src: party4, alt: "Festa tema Homem de Ferro com balões vermelhos", w: 258, h: 195 },
  { src: party5, alt: "Festa tema Homem-Aranha com balões azuis e vermelhos", w: 736, h: 736 },
  { src: party6, alt: "Festa tema LOL Surprise com balões rosa e roxos", w: 564, h: 705 },
  { src: party7, alt: "Festa tema Safári com balões verdes", w: 225, h: 224 },
  { src: party8, alt: "Festa tema Príncipe Miguel azul e dourado", w: 370, h: 460 },
  { src: party9, alt: "Festa tema Barbie rosa com balões", w: 368, h: 463 },
  { src: party10, alt: "Festa tema Carros Relâmpago McQueen", w: 380, h: 462 },
];

const premiumFeatures = [
  "+25.000 moldes em PDF",
  "Moldes Editáveis no Canva (1-clique pelo celular)",
  "+1.300 topos de bolo 3D em camadas",
  "Acesso Vitalício sem mensalidades",
  "Todos os temas de 2026",
  "Suporte VIP",
  "Bônus Convites Zap",
  "Guia Impressão Econômica",
  "Calculadora de Precificação",
];

const basicIncluded = ["+10.000 moldes simples em PDF", "Acesso por 30 dias"];

const basicExcluded = [
  "Arquivos Canva editáveis",
  "Topos de bolo 3D",
  "Bônus exclusivos",
  "Atualizações futuras",
];

const bonusItems = [
  {
    badge: "BÔNUS EXCLUSIVO 01",
    title: "+1.300 Topos de Bolo 3D em Camadas",
    desc: "Arquivos 3D prontos para cortar, montar e personalizar bolos incríveis com acabamento profissional.",
    price: "R$ 49,90",
    icon: Sparkles,
  },
  {
    badge: "BÔNUS EXCLUSIVO 02",
    title: "500 Moldes Editáveis no Canva",
    desc: "Edite nomes, idades, fotos e cores em 1-clique pelo celular sem precisar de programas pesados.",
    price: "R$ 49,90",
    icon: Palette,
  },
  {
    badge: "BÔNUS EXCLUSIVO 03",
    title: "Pacote de Fontes Premium Infantis",
    desc: "Coleção completa com as mais lindas fontes das festas infantis para usar onde quiser.",
    price: "R$ 49,90",
    icon: FileText,
  },
  {
    badge: "BÔNUS EXCLUSIVO 04",
    title: "Guia da Impressão Econômica",
    desc: "Segredos práticos para economizar até 70% de tinta e papel mantendo as cores super vivas.",
    price: "R$ 49,90",
    icon: Gift,
  },
  {
    badge: "BÔNUS EXCLUSIVO 05",
    title: "Calculadora de Precificação de Festas",
    desc: "Planilha automática para calcular seus custos exatos e lucrar muito vendendo kits prontos.",
    price: "R$ 49,90",
    icon: Calculator,
  },
];

const socialProofs = [
  { name: "Ana Paula S.", city: "SP", time: "há 2 min", photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80" },
  { name: "Juliana M.", city: "PR", time: "há 4 min", photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&auto=format&fit=crop&q=80" },
  { name: "Camila R.", city: "RJ", time: "há 1 min", photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=100&auto=format&fit=crop&q=80" },
  { name: "Patrícia S.", city: "MG", time: "há 5 min", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
  { name: "Fernanda O.", city: "BA", time: "há 3 min", photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&auto=format&fit=crop&q=80" },
  { name: "Luciana T.", city: "CE", time: "há 6 min", photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&auto=format&fit=crop&q=80" },
  { name: "Mariana K.", city: "RS", time: "há 2 min", photo: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=100&auto=format&fit=crop&q=80" },
  { name: "Beatriz L.", city: "SP", time: "há 8 min", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&auto=format&fit=crop&q=80" },
];

const faqs = [
  {
    q: "Preciso saber mexer em design?",
    a: "Não! Nossos moldes já vêm prontos para imprimir. Se quiser editar, usamos o Canva, gratuito e fácil.",
  },
  {
    q: "Como recebo o material?",
    a: "Após a confirmação do pagamento, você recebe acesso imediato no seu Gmail e também no seu WhatsApp.",
  },
  {
    q: "Posso vender os kits que montar?",
    a: "Sim! Você pode imprimir e vender kits de festa montados para outras pessoas.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim, você acessa tudo pelo celular ou computador, a qualquer hora.",
  },
  {
    q: "O acesso é vitalício?",
    a: "Sim! Pague uma vez e acesse para sempre, incluindo atualizações futuras.",
  },
];

function formatDate(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function useTodayDate() {
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(formatDate(new Date()));
    const scheduleMidnight = () => {
      const now = new Date();
      const next = new Date(now);
      next.setHours(24, 0, 0, 0);
      const ms = next.getTime() - now.getTime();
      return window.setTimeout(() => {
        setToday(formatDate(new Date()));
        timer = scheduleMidnight();
      }, ms);
    };
    let timer = scheduleMidnight();
    return () => window.clearTimeout(timer);
  }, []);
  return today;
}

function useCountdown(initialSeconds: number) {
  const [secs, setSecs] = useState(initialSeconds);
  useEffect(() => {
    if (secs <= 0) return;
    const id = window.setInterval(() => {
      setSecs((s) => {
        if (s <= 1) {
          window.clearInterval(id);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);
  const hh = String(Math.floor(secs / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  return { hh, mm, ss };
}

function InfiniteMarquee({
  items,
  imgClassName = "h-56 w-64 shrink-0 rounded-xl object-cover sm:h-64 sm:w-72",
}: {
  items: { src: string; alt: string; w: number; h: number }[];
  imgClassName?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-wrap mt-8 overflow-hidden" style={{ contain: "layout style paint" }}>
      <div className="marquee-track flex w-max gap-4">
        {loop.map((img, i) => (
          <img
            key={`${img.src}-${i}`}
            src={img.src}
            alt={img.alt}
            width={img.w}
            height={img.h}
            loading="lazy"
            decoding="async"
            className={imgClassName}
          />
        ))}
      </div>
    </div>
  );
}

const testimonials = [
  { src: depoimento1, alt: "Depoimento da cliente Sirlane no WhatsApp", w: 360, h: 762 },
  { src: depoimento2, alt: "Depoimento da cliente Natália no WhatsApp", w: 358, h: 759 },
  { src: depoimento3, alt: "Depoimento da cliente Tamira no WhatsApp", w: 358, h: 764 },
  { src: depoimento4, alt: "Depoimento da cliente Daniela no WhatsApp", w: 355, h: 760 },
];

function Index() {
  const today = useTodayDate();
  const { hh, mm, ss } = useCountdown(2 * 60 * 60); // 2h urgency timer
  const top = useCountdown(9 * 60 + 47); // 09:47 urgency bar
  const [showUpsell, setShowUpsell] = useState(false);
  const [proofIdx, setProofIdx] = useState(0);
  const [showProof, setShowProof] = useState(false);

  useEffect(() => {
    let hideTimer: number;
    let nextTimer: number;

    // Show initial toast after 4 seconds
    const initialTimer = window.setTimeout(() => {
      setShowProof(true);
    }, 4000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  useEffect(() => {
    if (!showProof) return;

    // Toast stays on screen for 3.5 seconds
    const hideTimer = window.setTimeout(() => {
      setShowProof(false);

      // Wait 16 seconds until showing next toast
      const nextTimer = window.setTimeout(() => {
        setProofIdx((prev) => (prev + 1) % socialProofs.length);
        setShowProof(true);
      }, 16000);

      return () => clearTimeout(nextTimer);
    }, 3500);

    return () => clearTimeout(hideTimer);
  }, [showProof]);

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowUpsell(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-0 font-sans text-slate-800 antialiased sm:pb-0">
      {/* FIXED TOPBAR */}
      <div className="sticky top-0 z-50 w-full bg-[#00c853] py-2.5 px-3 text-center text-xs sm:text-sm font-black text-white uppercase tracking-wider shadow-md animate-topbar">
        🔥 OFERTA SOMENTE HOJE {today}
      </div>

      {/* HERO */}
      <section className="relative mx-auto w-full max-w-[700px] px-5 pt-10 pb-14 text-center sm:pt-14 sm:pb-16">
        <span className="inline-block rounded-full bg-[#facc15] px-6 py-2 text-sm sm:text-base font-black tracking-wider text-slate-950 uppercase shadow-md">
          APENAS R$ 3,99
        </span>

        <h1 className="mt-6 text-3xl font-extrabold uppercase leading-[1.15] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          +25.000 <span className="text-[#00c853] font-black">MOLDES</span> DE FESTA<br />
          INFANTIL<br />
          <span className="text-[#eab308] underline decoration-[#eab308] decoration-8 underline-offset-4 font-black">PRONTOS</span> PARA BAIXAR E IMPRIMIR
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-base text-slate-600 sm:text-lg font-medium">
          Arquivos digitais prontos para imprimir e montar festas incríveis em casa.
        </p>

        <div className="mt-8 flex justify-center">
          {/* SMARTPHONE FRAME MOCKUP */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] p-3 sm:p-4 rounded-[40px] bg-slate-900 border-[5px] border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-white/20">
            {/* Notch / Speaker */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-950 rounded-b-xl z-20 flex items-center justify-center">
              <div className="w-6 h-1 bg-slate-800 rounded-full" />
            </div>

            {/* Screen Video Container */}
            <div
              className="relative w-full overflow-hidden rounded-[28px] bg-black shadow-inner aspect-[9/16]"
            >
              <video
                src={heroVideo}
                poster={heroPoster}
                loop
                playsInline
                {...({ "webkit-playsinline": "true" } as Record<string, string>)}
                preload="none"
                controls
                disablePictureInPicture
                width={420}
                height={747}
                className="absolute inset-0 h-full w-full object-cover"
                onPointerDown={(event) => {
                  event.currentTarget.muted = false;
                  event.currentTarget.volume = 1;
                }}
                onPlay={(event) => {
                  event.currentTarget.muted = false;
                  event.currentTarget.volume = 1;
                }}
              />
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm font-bold text-[#00c853]">
          Baixe, imprima e monte sua festa em casa em poucos minutos.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-slate-700">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3.5 py-1.5 text-slate-800 shadow-sm">
            <Mail className="h-4 w-4 text-[#00c853]" /> Gmail
          </span>
          <span className="text-slate-400">+</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3.5 py-1.5 text-slate-800 shadow-sm">
            <MessageCircle className="h-4 w-4 text-[#00c853]" /> WhatsApp
          </span>
          <span className="w-full text-xs font-medium text-slate-500 sm:w-auto">
            Você recebe tudo no seu Gmail e WhatsApp
          </span>
        </div>

        <div className="mt-8 rounded-2xl bg-white border border-slate-200 px-5 py-6 text-center shadow-md">
          <p className="text-sm text-slate-600 sm:text-base font-medium">
            Decoradoras cobram entre R$300 e R$800 para montar uma festa.
          </p>
          <p className="mt-1.5 text-base font-extrabold text-[#00c853] sm:text-lg">
            Aqui você começa por apenas R$ 3,99.
          </p>
        </div>

        <div className="mt-8">
          <CTA>🎉 Quero meus moldes agora</CTA>
        </div>
      </section>

      {/* GALERIA */}
      <section className="cv-auto w-full py-16 text-center sm:py-20">
        <div className="mx-auto w-full max-w-[700px] px-5">
          <h2 className="gradient-text text-[26px] font-extrabold leading-tight sm:text-3xl text-slate-900">
            Veja festas feitas com os moldes
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Resultados reais de quem já usou nossos arquivos
          </p>
        </div>

        <InfiniteMarquee items={gallery} />

        <div className="mx-auto mt-10 w-full max-w-[700px] px-5">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { name: "🤠 Ana Castela (Boiadeira)", color: "#052e16", bg: "#00E676", border: "#00c853" },
              { name: "Homem Aranha", color: "#9f1239", bg: "#ffe4e6", border: "#f43f5e" },
              { name: "Frozen", color: "#1d4ed8", bg: "#dbeafe", border: "#3b82f6" },
              { name: "Barbie", color: "#be185d", bg: "#fce7f3", border: "#ec4899" },
              { name: "Patrulha Canina", color: "#b45309", bg: "#fef3c7", border: "#f59e0b" },
              { name: "Safari", color: "#15803d", bg: "#dcfce7", border: "#22c55e" },
              { name: "Mickey", color: "#c2410c", bg: "#ffedd5", border: "#f97316" },
              { name: "Princesas", color: "#7e22ce", bg: "#f3e8ff", border: "#a855f7" },
              { name: "Sonic", color: "#0991b2", bg: "#cff4fc", border: "#06b6d4" },
              { name: "TikTok", color: "#9f1239", bg: "#ffe4e6", border: "#f43f5e" },
              { name: "Jardim Encantado", color: "#15803d", bg: "#dcfce7", border: "#22c55e" },
            ].map((t) => (
              <span
                key={t.name}
                className="rounded-full px-4 py-2 text-sm font-extrabold border shadow-sm transition-transform hover:scale-105"
                style={{ color: t.color, backgroundColor: t.bg, borderColor: t.border || 'transparent' }}
              >
                {t.name}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm font-extrabold text-[#00c853] sm:text-base">
            E muito mais... São tantos que nem couberam aqui!
          </p>

          <div className="mt-6">
            <CTA>🎉 Quero todos os temas</CTA>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="cv-auto bg-slate-50 border-y border-slate-200 py-16 sm:py-20 relative overflow-hidden">
        <div className="mx-auto w-full max-w-[850px] px-5 text-center">
          <span className="inline-block rounded-full bg-emerald-100 border border-emerald-200 px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-800 shadow-sm">
            💡 PASSO A PASSO SIMPLES
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl text-slate-900">
            Como Funciona?
          </h2>
          <p className="mt-2 text-base text-slate-600 font-medium">
            Simples, rápido e sem complicação — do pagamento à festa pronta em minutos!
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
            {[
              {
                Icon: Zap,
                step: "01",
                label: "PASSO 1",
                title: "Acesso Imediato",
                text: "Após a confirmação da compra, você recebe acesso instantâneo diretamente no seu e-mail e WhatsApp na hora.",
                color: "from-emerald-500 to-teal-600"
              },
              {
                Icon: Hand,
                step: "02",
                label: "PASSO 2",
                title: "Escolha seus Temas",
                text: "Navegue pela biblioteca com mais de 25.000 temas infantis prontos, organizados de forma super fácil.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                Icon: Printer,
                step: "03",
                label: "PASSO 3",
                title: "Imprima ou Venda",
                text: "Imprima diretamente na sua impressora caseira ou gráfica, ou personalize os arquivos para vender kits prontos.",
                color: "from-purple-500 to-indigo-600"
              },
            ].map(({ Icon, step, label, title, text }) => (
              <div
                key={step}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00c853] hover:shadow-xl"
              >
                <div>
                  {/* Icon & Label Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-[#00c853] shadow-sm group-hover:scale-110 group-hover:bg-[#00c853] group-hover:text-white transition-all duration-300">
                      <Icon className="h-7 w-7" strokeWidth={2.5} />
                    </div>
                    <span className="rounded-full bg-[#00c853] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                      {label}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-extrabold text-slate-900 group-hover:text-[#00c853] transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
                    {text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-extrabold text-[#00c853]">
                  <span>⚡ 100% Rápido e Descomplicado</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <CTA>🎉 Quero começar agora</CTA>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="cv-auto w-full py-16 text-center sm:py-20">
        <div className="mx-auto w-full max-w-[700px] px-5">
          <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-amber-500">
            ⭐ Depoimentos reais
          </span>
          <h2 className="gradient-text mt-4 text-[26px] font-extrabold leading-tight sm:text-3xl">
            O que nossas clientes estão dizendo
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Conversas reais no WhatsApp de quem já fez sua festa com os nossos moldes
          </p>
        </div>

        <InfiniteMarquee
          items={testimonials}
          imgClassName="h-[420px] w-[198px] shrink-0 rounded-2xl object-contain shadow-sm sm:h-[500px] sm:w-[235px]"
        />

        <div className="mx-auto mt-10 w-full max-w-[700px] px-5">
          <CTA>🎉 Quero meus moldes agora</CTA>
        </div>
      </section>

      {/* SEÇÃO DE BÔNUS EXCLUSIVOS */}
      <section className="cv-auto bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/40 border-y border-emerald-100/80 py-16 sm:py-20 text-slate-900 relative overflow-hidden shadow-sm">
        <div className="relative mx-auto w-full max-w-[900px] px-5 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00c853] px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md animate-pulse">
            🎁 5 BÔNUS EXCLUSIVOS DE PRESENTE
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl text-slate-900">
            Economize R$ 249,50 em Bônus <span className="bg-[#00c853] text-white px-3.5 py-1 rounded-xl shadow-md uppercase tracking-tight font-black inline-block transform -rotate-1">100% GRÁTIS SÓ HOJE!</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600 font-semibold">
            Garanta o <span className="font-extrabold text-[#00c853]">Pacote Premium VIP</span> e receba estes 5 bônus exclusivos sem pagar nem 1 centavo a mais:
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 text-left">
            {bonusItems.map(({ badge, title, desc, price, icon: Icon }) => (
              <div
                key={badge}
                className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5.5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00c853] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-800">
                      {badge}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-400 line-through">De {price}</span>
                      <span className="rounded-full bg-[#00c853] px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-white shadow-sm">
                        🔥 GRÁTIS SÓ HOJE
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-start gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-[#00c853] shadow-sm group-hover:scale-110 group-hover:bg-[#00c853] group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#00c853] transition-colors">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 font-medium leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="plano" className="mx-auto w-full max-w-[900px] px-5 py-14 sm:py-16">
        <div className="mb-8 flex flex-col items-center gap-2 rounded-2xl bg-slate-900 text-white border border-slate-800 px-4 py-3.5 text-center shadow-lg">
          <p className="text-xs font-extrabold uppercase tracking-wide text-[#facc15] sm:text-sm">
            ⚠️ Oferta termina em
          </p>
          <div className="flex items-center gap-2 font-mono text-2xl font-extrabold text-white sm:text-3xl">
            <Clock className="h-5 w-5 text-emerald-400" />
            <span className="rounded-md bg-emerald-600 px-2 py-1 text-white">{hh}</span>
            <span>:</span>
            <span className="rounded-md bg-emerald-600 px-2 py-1 text-white">{mm}</span>
            <span>:</span>
            <span className="rounded-md bg-emerald-600 px-2 py-1 text-white">{ss}</span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-300">
            Vagas e bônus limitados
          </p>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-2">
          {/* BÁSICO */}
          <div className="flex h-full flex-col rounded-2xl bg-white border border-slate-200 p-6 shadow-md">
            <h3 className="text-lg font-extrabold text-slate-900">Pacote Básico</h3>
            <p className="mt-1 text-sm text-slate-500">Arquivos digitais simples em PDF</p>
            <div className="mt-4">
              <p className="text-3xl font-extrabold text-slate-900">R$ 3,99</p>
              <p className="text-xs text-slate-500">Pagamento único</p>
            </div>
            <ul className="mt-5 space-y-2 text-left">
              {basicIncluded.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
              {basicExcluded.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-400 line-through">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex-1" />
            <a
              href={CHECKOUT_BASIC_URL}
              onClick={handleBasicClick}
              className="block w-full rounded-full px-6 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide border-2 border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400 transition-all"
            >
              Quero apenas o básico
            </a>
          </div>

          {/* PREMIUM VIP */}
          <div className="relative flex h-full flex-col rounded-2xl border-[3px] border-emerald-500 bg-white p-6 pt-9 shadow-xl">
            <span className="absolute -top-3 left-1/2 w-[92%] -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-center text-[10px] font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[11px] shadow-md animate-pulse">
              ⭐ Mais escolhido (97% das mães pegam esse)
            </span>
            <h3 className="text-center text-xl font-extrabold text-slate-900 sm:text-2xl">
              PACOTE PREMIUM VIP + BÔNUS
            </h3>
            <span className="mx-auto mt-2.5 inline-block w-fit rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-extrabold text-emerald-700">
              ECONOMIZE R$ 282,00 HOJE
            </span>
            <div className="mt-3 text-center">
              <p className="text-sm text-slate-400 line-through font-medium">De R$ 297,00</p>
              <p className="text-4xl font-extrabold text-emerald-600 sm:text-5xl">R$ 14,99</p>
              <p className="text-xs text-slate-500">Pagamento único · Acesso vitalício</p>
            </div>

            <ul className="mt-5 space-y-2 text-left">
              {premiumFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 flex items-center justify-center gap-1 text-sm font-bold text-slate-700">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> + de 10 mil clientes ativos
            </p>

            <div className="mt-5">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide btn-cta text-white sm:text-lg"
              >
                🔥 Quero tudo liberado agora
              </a>
            </div>

            <p className="mt-3 text-center text-[11px] font-semibold text-slate-500">
              🔒 Pagamento 100% Seguro | ⚡ Entrega Imediata no Zap e E-mail | 🛡️ 7 Dias de Garantia
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="cv-auto mx-auto w-full max-w-[620px] px-5 py-12 text-center sm:py-16">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-sm">
          <ShieldCheck className="h-8 w-8" strokeWidth={2.5} />
        </div>
        <h2 className="mt-4 text-xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-2xl">
          Garantia de 7 dias
        </h2>
        <p className="mx-auto mt-2.5 max-w-md text-sm text-slate-600 sm:text-base font-medium">
          Se por qualquer motivo você não gostar do material, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
        </p>
      </section>

      {/* FAQ */}
      <section className="cv-auto mx-auto w-full max-w-[620px] px-5 py-12 text-center sm:py-16">
        <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="mt-6 text-left">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="border-b border-slate-200"
            >
              <AccordionTrigger className="py-4 text-base font-bold text-slate-900 hover:text-emerald-600 hover:no-underline transition-colors">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm text-slate-600 sm:text-base font-medium">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8">
          <CTA>🎉 Tirei minhas dúvidas!</CTA>
        </div>
      </section>

      {/* MODAL UPSELL COMPACT & LIGHT MODE */}
      {showUpsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-2xl animate-in fade-in zoom-in duration-200 text-slate-900">
            <button 
              onClick={() => setShowUpsell(false)}
              className="absolute -top-2.5 -right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 shadow-md transition-transform active:scale-90"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h2 className="mt-2 text-lg font-extrabold leading-snug text-slate-900">
                ESPERE! Temos uma <span className="text-emerald-600">OFERTA ESPECIAL</span> pra você!
              </h2>
              
              <div className="mt-2 inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-[10px] font-extrabold text-amber-700 uppercase tracking-wider">
                MELHOR CUSTO BENEFÍCIO
              </div>

              <div className="mt-3 rounded-xl bg-slate-50 p-3.5 border border-slate-200 text-left">
                <p className="text-xs font-extrabold text-slate-900 uppercase tracking-tight text-center">
                  O PREMIUM COMPENSA MAIS!
                </p>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <span className="text-xs text-slate-400 line-through font-bold">De R$ 19,90</span>
                  <span className="text-2xl font-black text-emerald-600">R$ 10,00</span>
                </div>
                <p className="mt-1.5 text-[10px] font-bold text-emerald-700 text-center leading-tight">
                  ESTAMOS BAIXANDO O PREÇO E TE DANDO MAIS 1 BÔNUS EXTRA!
                </p>

                <ul className="mt-3 space-y-1 text-[11px] font-semibold text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" strokeWidth={3} />
                    Kit Completo +25.000 Temas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" strokeWidth={3} />
                    BÔNUS 1: +1.300 Topos de Bolo 3D
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" strokeWidth={3} />
                    BÔNUS 2: 500 Moldes Editáveis no Canva
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" strokeWidth={3} />
                    BÔNUS 3: Fontes Premium Infantis
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" strokeWidth={3} />
                    BÔNUS 4: Guia da Impressão Econômica
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" strokeWidth={3} />
                    BÔNUS 5: Calculadora de Precificação
                  </li>
                </ul>
              </div>

              <a
                href="https://pay.wiapy.com/4JjmuoWR2UE0"
                className="btn-cta mt-4 block w-full rounded-full py-3.5 text-sm font-black text-white uppercase tracking-wider shadow-lg"
              >
                QUERO O PREMIUM POR R$ 10,00
              </a>

              <a
                href={CHECKOUT_BASIC_URL}
                className="mt-3 inline-block text-[11px] font-bold text-slate-500 underline hover:text-slate-700 transition-colors"
              >
                Não quero desconto nem os 5 bônus
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MINIMALIST FLOATING SOCIAL PROOF WITH PROFILE PHOTO */}
      {showProof && (
        <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-white/95 border border-slate-200/90 py-2 px-3 shadow-lg backdrop-blur-md transition-all duration-300 max-w-[280px] text-left animate-in slide-in-from-bottom transform-gpu will-change-transform">
          <div className="relative shrink-0">
            <img
              src={socialProofs[proofIdx].photo}
              alt={socialProofs[proofIdx].name}
              loading="lazy"
              decoding="async"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover ring-2 ring-emerald-500/40"
            />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#00c853] text-white shadow-xs">
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
          </div>

          <div className="flex-1 min-w-0 text-[11px]">
            <p className="font-extrabold text-slate-900 truncate leading-tight">
              {socialProofs[proofIdx].name} <span className="text-[10px] font-normal text-slate-400">({socialProofs[proofIdx].city})</span>
            </p>
            <p className="text-[10px] font-bold text-[#00c853] truncate leading-tight mt-0.5">
              Comprou o Premium VIP <span className="text-slate-400 font-normal">• {socialProofs[proofIdx].time}</span>
            </p>
          </div>

          <button
            onClick={() => setShowProof(false)}
            className="text-slate-300 hover:text-slate-500 p-0.5 rounded-full transition-colors shrink-0"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
    </main>
  );
}
