import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .hero-bg {
      background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(16,185,129,0.14) 0%, transparent 70%),
                  radial-gradient(ellipse 60% 50% at 80% 50%, rgba(139,92,246,0.08) 0%, transparent 60%),
                  radial-gradient(ellipse 60% 50% at 20% 70%, rgba(245,158,11,0.06) 0%, transparent 60%),
                  #020617;
    }
    .headline-gradient {
      background: linear-gradient(135deg, #ffffff 0%, #6ee7b7 35%, #34d399 65%, #fbbf24 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .floating-card {
      animation: float 6s ease-in-out infinite;
    }
    .floating-card:nth-child(2) { animation-delay: -2s; }
    .floating-card:nth-child(3) { animation-delay: -4s; }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-16px); }
    }
    .badge-animate { animation: fadeInUp 1s ease-out forwards; }
    .headline-animate { animation: fadeInUp 0.8s ease-out 0.1s forwards; opacity: 0; }
    .sub-animate { animation: fadeInUp 0.8s ease-out 0.3s forwards; opacity: 0; }
    .cta-animate  { animation: fadeInUp 0.8s ease-out 0.5s forwards; opacity: 0; }
    .stat-animate { animation: fadeInUp 0.8s ease-out 0.7s forwards; opacity: 0; }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .grid-lines {
      background-image:
        linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .pulse-ring {
      animation: pulseRing 2.5s ease-out infinite;
    }
    @keyframes pulseRing {
      0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16,185,129,0.6); }
      70%  { transform: scale(1);    box-shadow: 0 0 0 14px rgba(16,185,129,0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16,185,129,0); }
    }
  `],
  template: `
    <section id="home" class="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      <!-- Grid lines background -->
      <div class="grid-lines absolute inset-0 pointer-events-none"></div>

      <!-- Floating tech orbs (decorative) -->
      <div class="absolute top-1/4 left-8 w-64 h-64 rounded-full
                  bg-emerald-500/5 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-8 w-80 h-80 rounded-full
                  bg-amber-500/5 blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col items-center text-center">

        <!-- Eyebrow badge -->
        <div class="badge-animate mb-6">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold
                       bg-emerald-500/10 text-emerald-400 border border-emerald-500/25
                       backdrop-blur-sm tracking-wider uppercase">
            <span class="pulse-ring w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            Now Enrolling — Siliguri, West Bengal
          </span>
        </div>

        <!-- Main headline -->
        <h1 class="headline-animate headline-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                   font-black leading-tight tracking-tight max-w-5xl">
          Engineer the Future.<br>Command the AI.
        </h1>

        <!-- Sub-headline -->
        <p class="sub-animate mt-8 max-w-3xl text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light">
          While AI is revolutionizing software development, it still requires
          <span class="text-white font-medium">human intuition</span>,
          <span class="text-white font-medium">architectural direction</span>, and
          <span class="text-white font-medium">keen observation</span> to guide it.
          <br class="hidden md:block">
          We train the engineers who command the AI.
        </p>

        <!-- CTA Buttons -->
        <div class="cta-animate mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#courses" class="btn-primary text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25">
            <i class="fa-solid fa-book-open"></i>
            Browse Courses
          </a>
          <a href="#contact" class="btn-outline text-base px-8 py-4 rounded-xl">
            <i class="fa-solid fa-comments"></i>
            Contact Mentor
          </a>
        </div>

        <!-- Stats row -->
        <div class="stat-animate mt-16 flex flex-col sm:flex-row gap-8 sm:gap-12 items-center justify-center">
          <div *ngFor="let stat of stats" class="flex flex-col items-center gap-1">
            <span class="text-2xl md:text-3xl font-black text-white">{{ stat.value }}</span>
            <span class="text-xs text-slate-500 font-medium uppercase tracking-wider">{{ stat.label }}</span>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span class="text-xs tracking-widest uppercase">Scroll</span>
          <i class="fa-solid fa-chevron-down animate-bounce text-xs"></i>
        </div>
      </div>
    </section>
  `
})
export class Hero {
  stats = [
    { value: '10+',   label: 'Courses Offered' },
    { value: '100%',  label: 'Hands-On Projects' },
    { value: '1-on-1',label: 'Mentor Sessions' },
    { value: '∞',     label: 'Career Support' },
  ];
}
