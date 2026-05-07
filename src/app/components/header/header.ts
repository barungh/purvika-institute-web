import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    /* PURVIKA — crisp white, bold */
    .logo-purvika {
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      color: #ffffff;
      line-height: 1;
    }
    /* Subtle emerald underline glow on hover */
    .logo-purvika-wrap:hover .logo-purvika {
      text-shadow: 0 0 24px rgba(16,185,129,0.35);
    }
    .logo-subtitle {
      font-size: 0.6rem;
      font-weight: 300;
      letter-spacing: 0.22em;
      color: #94a3b8; /* slate-400 */
      text-transform: uppercase;
      line-height: 1;
      margin-top: 3px;
    }
    nav { transition: all 0.3s ease; }
    .nav-scrolled {
      background: rgba(2, 6, 23, 0.96) !important;
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(16, 185, 129, 0.12);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    }
    .mobile-menu { animation: slideDown 0.25s ease-out; }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `],
  template: `
    <nav [class]="isScrolled ? 'nav-scrolled' : ''"
         class="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-10">
      <div class="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">

        <!-- Logo -->
        <a href="#home" class="logo-purvika-wrap flex flex-col justify-center select-none transition-all duration-300">
          <span class="logo-purvika">PURVIKA</span>
          <span class="logo-subtitle">Institute of Learning</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a *ngFor="let link of navLinks"
             [href]="link.href"
             class="text-sm font-medium text-slate-400 hover:text-white relative
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                    after:bg-emerald-400 after:transition-all after:duration-300
                    hover:after:w-full transition-colors duration-200">
            {{ link.label }}
          </a>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden md:flex items-center gap-3">
          <a href="https://wa.me/916297063622" target="_blank" rel="noopener"
             class="btn-whatsapp">
            <i class="fa-brands fa-whatsapp text-lg"></i>
            Chat on WhatsApp
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button (click)="toggleMenu()"
                class="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
                id="mobile-menu-btn" aria-label="Toggle navigation menu">
          <span [class]="menuOpen() ? 'rotate-45 translate-y-2' : ''"
                class="block w-6 h-0.5 bg-slate-300 transition-transform duration-300 origin-center"></span>
          <span [class]="menuOpen() ? 'opacity-0' : ''"
                class="block w-6 h-0.5 bg-slate-300 transition-opacity duration-300"></span>
          <span [class]="menuOpen() ? '-rotate-45 -translate-y-2' : ''"
                class="block w-6 h-0.5 bg-slate-300 transition-transform duration-300 origin-center"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="menuOpen()"
           class="mobile-menu md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-4">
        <div class="flex flex-col gap-1">
          <a *ngFor="let link of navLinks"
             [href]="link.href"
             (click)="closeMenu()"
             class="px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">
            {{ link.label }}
          </a>
        </div>
        <div class="mt-4 pt-4 border-t border-white/[0.06]">
          <a href="https://wa.me/916297063622" target="_blank" rel="noopener"
             class="btn-whatsapp w-full justify-center">
            <i class="fa-brands fa-whatsapp text-lg"></i>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  `
})
export class Header {
  isScrolled = false;
  menuOpen = signal(false);

  navLinks = [
    { label: 'Home',       href: '#home' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Courses',    href: '#courses' },
    { label: 'Contact',    href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
}
