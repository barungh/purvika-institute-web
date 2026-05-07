import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .footer-link {
      color: #94a3b8;
      font-size: 0.875rem;
      transition: color 0.2s;
    }
    .footer-link:hover { color: #f1f5f9; }

    .contact-chip {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      transition: all 0.2s;
      text-decoration: none;
    }
    .contact-chip:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.1);
    }
    .contact-chip-icon {
      width: 36px; height: 36px;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.9rem;
      flex-shrink: 0;
    }
    .logo-purvika-footer {
      font-size: 1.25rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      color: #ffffff;        /* crisp white — no gradient */
      line-height: 1;
    }
    .logo-subtitle-footer {
      font-size: 0.55rem;
      font-weight: 300;
      letter-spacing: 0.2em;
      color: #64748b;
      text-transform: uppercase;
      line-height: 1;
      margin-top: 2px;
    }
  `],
  template: `
    <footer id="contact" class="relative bg-navy-950 overflow-hidden">

      <!-- Top gradient divider -->
      <div class="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <!-- CTA Banner -->
      <div class="relative py-16 md:py-20 overflow-hidden"
           style="background: linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(245,158,11,0.06) 100%);">
        <div class="absolute inset-0 grid-pattern opacity-30 pointer-events-none"></div>
        <div class="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">
            Ready to Start?
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Take the First Step<br>
            <span class="gradient-text">Towards Engineering Excellence</span>
          </h2>
          <p class="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Reach out today. A mentor will respond personally to discuss your goals and
            recommend the right learning path.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/916297063622" target="_blank" rel="noopener"
               class="btn-whatsapp text-base px-8 py-4 justify-center">
              <i class="fa-brands fa-whatsapp text-xl"></i>
              Chat on WhatsApp
            </a>
            <a href="tel:+916297063622" class="btn-outline text-base px-8 py-4 justify-center">
              <i class="fa-solid fa-phone"></i>
              +91 62970 63622
            </a>
          </div>
        </div>
      </div>

      <!-- Main footer body -->
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <!-- Brand column -->
          <div class="lg:col-span-1">
            <a href="#home" class="flex flex-col mb-5">
              <span class="logo-purvika-footer">PURVIKA</span>
              <span class="logo-subtitle-footer">Institute of Learning</span>
            </a>
            <p class="text-slate-500 text-sm leading-relaxed mb-6">
              Professional-grade engineering education for the next generation of
              developers and technologists. Based in Siliguri, West Bengal.
            </p>
            <div class="flex items-center gap-2">
              <a href="https://wa.me/916297063622" target="_blank" rel="noopener"
                 class="w-9 h-9 rounded-xl bg-white/5 hover:bg-green-500/20 border border-white/[0.08]
                        flex items-center justify-center text-slate-400 hover:text-green-400
                        transition-all duration-200"
                 aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp text-sm"></i>
              </a>
              <a href="mailto:purvikainstitute@gmail.com"
                 class="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/[0.08]
                        flex items-center justify-center text-slate-400 hover:text-emerald-400
                        transition-all duration-200"
                 aria-label="Email">
                <i class="fa-regular fa-envelope text-sm"></i>
              </a>
            </div>
          </div>

          <!-- Quick links -->
          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navigate</h4>
            <ul class="space-y-3">
              <li *ngFor="let link of quickLinks">
                <a [href]="link.href" class="footer-link">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <!-- Courses -->
          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-5">Courses</h4>
            <ul class="space-y-3">
              <li *ngFor="let course of courseLinks">
                <a href="#courses" class="footer-link">{{ course }}</a>
              </li>
            </ul>
          </div>

          <!-- Contact info -->
          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <div class="space-y-3">

              <!-- Phone -->
              <a href="tel:+916297063622" class="contact-chip">
                <div class="contact-chip-icon" style="background: rgba(16,185,129,0.15);">
                  <i class="fa-solid fa-phone text-emerald-400"></i>
                </div>
                <div>
                  <div class="text-xs text-slate-500 mb-0.5">Call Us</div>
                  <div class="text-sm text-slate-200 font-medium">+91 62970 63622</div>
                </div>
              </a>

              <!-- WhatsApp -->
              <a href="https://wa.me/916297063622" target="_blank" rel="noopener" class="contact-chip">
                <div class="contact-chip-icon" style="background: rgba(16,185,129,0.15);">
                  <i class="fa-brands fa-whatsapp text-green-400"></i>
                </div>
                <div>
                  <div class="text-xs text-slate-500 mb-0.5">WhatsApp</div>
                  <div class="text-sm text-slate-200 font-medium">Message Us</div>
                </div>
              </a>

              <!-- Email -->
              <a href="mailto:purvikainstitute@gmail.com" class="contact-chip">
                <div class="contact-chip-icon" style="background: rgba(139,92,246,0.15);">
                  <i class="fa-regular fa-envelope text-violet-400"></i>
                </div>
                <div>
                  <div class="text-xs text-slate-500 mb-0.5">Email</div>
                  <div class="text-sm text-slate-200 font-medium">purvikainstitute&#64;gmail.com</div>
                </div>
              </a>

              <!-- Location -->
              <div class="contact-chip">
                <div class="contact-chip-icon" style="background: rgba(245,158,11,0.15);">
                  <i class="fa-solid fa-location-dot text-amber-400"></i>
                </div>
                <div>
                  <div class="text-xs text-slate-500 mb-0.5">Location</div>
                  <div class="text-sm text-slate-200 font-medium">Siliguri, West Bengal</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/[0.05]">
        <div class="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row
                    items-center justify-between gap-3">
          <p class="text-slate-600 text-xs">
            &copy; {{ currentYear }} Purvika Institute of Learning. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <a href="#" class="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" class="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
            <a href="#" class="text-slate-600 hover:text-slate-400 text-xs transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>

    </footer>
  `
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home',            href: '#home' },
    { label: 'Our Philosophy',  href: '#philosophy' },
    { label: 'Courses',         href: '#courses' },
    { label: 'Contact',         href: '#contact' },
  ];

  courseLinks = [
    'Office Automation',
    'Python Masterclass',
    'Hardware & Troubleshooting',
    'Python Backend Engineering',
    'Full-Stack Web Dev',
    'Linux System Admin',
    'AI Agent Workflows',
    'DevOps & Cloud',
  ];
}
