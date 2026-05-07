import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .feature-card {
      background: rgba(15, 23, 42, 0.5);   /* slate-900/50 glassmorphism */
      border: 1px solid rgba(30, 41, 59, 0.8);  /* slate-800 */
      border-radius: 1.25rem;
      padding: 2rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }
    .feature-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .feature-card:hover {
      border-color: rgba(16,185,129,0.2);
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(16,185,129,0.08);
    }
    .feature-card:hover::before { opacity: 1; }

    .icon-wrap {
      width: 56px; height: 56px;
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1.25rem;
      font-size: 1.5rem;
    }
    .section-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent);
      margin: 0 auto;
      max-width: 300px;
    }
  `],
  template: `
    <section id="philosophy" class="relative py-24 md:py-32 overflow-hidden"
             style="background: #0f172a;">

      <!-- Background decoration -->
      <div class="absolute inset-0 grid-pattern opacity-50 pointer-events-none"></div>
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        <!-- Section header -->
        <div class="text-center mb-16">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">
            Why Purvika Institute
          </span>
          <h2 class="section-heading">
            The <span class="gradient-text">Human Edge</span><br class="hidden sm:block">
            in an AI-Driven World
          </h2>
          <p class="section-sub max-w-3xl mx-auto">
            AI can write code. But AI cannot architect systems, resolve ambiguous requirements, or
            steer a project through real-world constraints. That requires a trained engineering mind.
            We build that mind.
          </p>
          <div class="section-divider mt-8"></div>
        </div>

        <!-- Feature grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div *ngFor="let feature of features" class="feature-card">
            <div [style.background]="feature.iconBg" class="icon-wrap">
              <i [class]="feature.icon" [style.color]="feature.iconColor"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>

        <!-- Big philosophy statement -->
        <div class="relative rounded-2xl overflow-hidden"
             style="background: linear-gradient(135deg, rgba(16,185,129,0.07), rgba(245,158,11,0.05));
                    border: 1px solid rgba(16,185,129,0.15);">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"></div>
          <div class="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span class="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 block">Our Philosophy</span>
              <h3 class="text-2xl md:text-3xl font-bold text-white leading-snug">
                Modern developers need to understand
                <span class="gradient-text"> system architecture</span>,
                not just basic coding.
              </h3>
            </div>
            <div class="space-y-4">
              <p class="text-slate-400 leading-relaxed text-sm md:text-base">
                Every course at Purvika Institute is structured around how professionals think: from
                first principles and system design, through implementation, all the way to deployment
                and monitoring in production environments.
              </p>
              <p class="text-slate-400 leading-relaxed text-sm md:text-base">
                When you understand the foundations, you can direct AI tools with precision — writing
                better prompts, catching subtle bugs, and making architectural decisions that no
                language model can make for you.
              </p>
              <a href="https://wa.me/916297063622" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold
                        hover:text-white transition-colors mt-2">
                Talk to a mentor <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class Philosophy {
  features = [
    {
      icon:        'fa-solid fa-brain',
      iconBg:      'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05))',
      iconColor:   '#34d399',
      title:       'Human + AI Synergy',
      description: 'We teach engineers to work alongside AI — using tools like Copilot, ChatGPT, and custom AI agents — while maintaining full architectural control and code ownership. Understanding the "why" behind code is what separates a senior engineer from an autocomplete user.',
    },
    {
      icon:        'fa-solid fa-user-graduate',
      iconBg:      'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.05))',
      iconColor:   '#a78bfa',
      title:       'Mentor-Led Mastery',
      description: 'Every student works directly with an experienced industry mentor. No recorded lectures, no generic syllabi. Sessions are tailored to your pace, your projects, and your career goals — giving you the focused guidance that MOOCs simply cannot provide.',
    },
    {
      icon:        'fa-solid fa-server',
      iconBg:      'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(245,158,11,0.05))',
      iconColor:   '#fbbf24',
      title:       'Professional Lab Environment',
      description: 'We use the same tools professionals use on the job: Linux-first workflows, containerized dev environments, Git-based version control, and cloud deployments. By graduation, you\'ve already shipped real-world projects to production.',
    },
  ];
}
