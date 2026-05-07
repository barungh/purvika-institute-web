import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard, Course } from '../course-card/course-card';

@Component({
  selector: 'app-course-grid',
  standalone: true,
  imports: [CommonModule, CourseCard],
  styles: [`
    .track-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .track-line {
      flex: 1;
      height: 1px;
    }
    .section-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(16,185,129,0.25), transparent);
      margin: 4rem 0;
    }
  `],
  template: `
    <section id="courses" class="relative py-24 md:py-32 overflow-hidden">

      <!-- Background -->
      <div class="absolute inset-0 grid-pattern pointer-events-none opacity-40"></div>
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        <!-- Section header -->
        <div class="text-center mb-16">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">
            Our Curriculum
          </span>
          <h2 class="section-heading">
            Courses That <span class="gradient-text">Build Careers</span>
          </h2>
          <p class="section-sub max-w-2xl mx-auto">
            Two structured learning tracks — from foundational computing to advanced engineering.
            Every course is hands-on, project-driven, and mentored.
          </p>
        </div>

        <!-- ── FOUNDATION TRACK ── -->
        <div class="track-header">
          <div>
            <div class="track-badge-foundation text-sm px-4 py-1.5">
              <i class="fa-solid fa-layer-group"></i>
              Foundation &amp; Hardware Track
            </div>
          </div>
          <div class="track-line bg-gradient-to-r from-amber-500/30 to-transparent"></div>
          <span class="text-amber-400/60 text-xs font-semibold whitespace-nowrap">Starting ₹35,000</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          <app-course-card *ngFor="let course of foundationCourses" [course]="course"></app-course-card>
        </div>

        <!-- Divider -->
        <div class="section-divider"></div>

        <!-- ── ADVANCED TRACK ── -->
        <div class="track-header">
          <div>
            <div class="track-badge-advanced text-sm px-4 py-1.5">
              <i class="fa-solid fa-rocket"></i>
              Advanced Engineering Track
            </div>
          </div>
          <div class="track-line bg-gradient-to-r from-violet-500/30 to-transparent"></div>
          <span class="text-violet-400/60 text-xs font-semibold whitespace-nowrap">Starting ₹65,000</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <app-course-card *ngFor="let course of advancedCourses" [course]="course"></app-course-card>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-16 text-center">
          <p class="text-slate-500 text-sm mb-4">Not sure which track to start with?</p>
          <a href="https://wa.me/916297063622" target="_blank" rel="noopener"
             class="btn-whatsapp inline-flex">
            <i class="fa-brands fa-whatsapp text-base"></i>
            Get a Free Counselling Session
          </a>
        </div>

      </div>
    </section>
  `
})
export class CourseGrid {

  foundationCourses: Course[] = [
    {
      title:       'Complete Office Automation',
      description: 'Master professional productivity tools — spreadsheets, presentations, cloud documents, email management, and workflow automation used in modern offices and remote teams.',
      price:       '₹35,000',
      track:       'foundation',
      iconClass:   'devicon-google-plain',
      iconColor:   '#4285F4',
      accentFrom:  '#f59e0b',
      accentTo:    '#f97316',
      tags:        ['Spreadsheets', 'Email', 'Docs', 'Automation'],
    },
    {
      title:       'Computer Hardware & Advanced Troubleshooting',
      description: 'Dive deep into PC architecture — from motherboards and CPUs to RAM and storage hierarchies. Learn systematic diagnostic methods used by professional hardware technicians.',
      price:       '₹35,000',
      track:       'foundation',
      iconClass:   'fa-solid fa-microchip',
      iconColor:   '#f59e0b',
      accentFrom:  '#f59e0b',
      accentTo:    '#fbbf24',
      tags:        ['PC Build', 'Diagnostics', 'BIOS', 'Components'],
    },
    {
      title:       'Peripheral Repair & Maintenance',
      description: 'Hands-on training in repairing and maintaining keyboards, printers, monitors, and input devices. Gain skills for hardware servicing roles and running a repair business.',
      price:       '₹35,000',
      track:       'foundation',
      iconClass:   'fa-solid fa-screwdriver-wrench',
      iconColor:   '#fb923c',
      accentFrom:  '#f97316',
      accentTo:    '#fb923c',
      tags:        ['Repair', 'Printer', 'Monitor', 'Soldering'],
    },
    {
      title:       'Python Programming Masterclass',
      description: 'A comprehensive deep-dive into the world\'s most popular language. Master everything from basic logic and automation scripts to Stock Trading Bots and Cross-Platform Desktop Application development.',
      price:       '₹35,000',
      track:       'foundation',
      iconClass:   'devicon-python-plain',
      iconColor:   '#ffd845',
      accentFrom:  '#10b981',
      accentTo:    '#34d399',
      tags:        ['Automation', 'Trading Bots', 'Desktop Apps', 'GUI'],
    },
  ];

  advancedCourses: Course[] = [
    {
      title:       'C++ System Programming & DSA',
      description: 'Build mastery in C++ from first principles — memory management, pointers, templates — and conquer Data Structures & Algorithms for competitive programming and systems engineering roles.',
      price:       '₹65,000',
      track:       'advanced',
      iconClass:   'devicon-cplusplus-plain',
      iconColor:   '#659ad2',
      accentFrom:  '#10b981',
      accentTo:    '#34d399',
      tags:        ['C++17', 'DSA', 'Memory Mgmt', 'Algorithms'],
    },
    {
      title:       'Python Backend Engineering',
      description: 'Build production-grade REST APIs with FastAPI, design PostgreSQL schemas, handle authentication, write async code, and deploy backend services used in startups and enterprises.',
      price:       '₹65,000',
      track:       'advanced',
      iconClass:   'devicon-python-plain',
      iconColor:   '#ffd845',
      accentFrom:  '#eab308',
      accentTo:    '#3b82f6',
      tags:        ['FastAPI', 'PostgreSQL', 'Async', 'Auth'],
    },
    {
      title:       'Full-Stack Web Development',
      description: 'Master Angular for the frontend and design robust database architectures. Build complete, deployable applications with state management, routing, API integration, and authentication.',
      price:       '₹65,000',
      track:       'advanced',
      iconClass:   'devicon-angularjs-plain',
      iconColor:   '#dd0031',
      accentFrom:  '#dd0031',
      accentTo:    '#c2185b',
      tags:        ['Angular', 'TypeScript', 'DB Design', 'Auth'],
    },
    {
      title:       'Linux System Administration & Engineering',
      description: 'Master the Linux command line, shell scripting, process management, network configuration, and system hardening on EndeavourOS and Ubuntu — the foundation of all cloud and DevOps work.',
      price:       '₹65,000',
      track:       'advanced',
      iconClass:   'devicon-linux-plain',
      iconColor:   '#f8f8f8',
      accentFrom:  '#10b981',
      accentTo:    '#34d399',
      tags:        ['Bash', 'EndeavourOS', 'Networking', 'Security'],
    },
    {
      title:       'SLM & AI Agent Workflow Construction',
      description: 'Learn to fine-tune Small Language Models, build multi-step AI agent pipelines using LangChain and LlamaIndex, and construct automated AI workflows for real product use cases.',
      price:       '₹65,000',
      track:       'advanced',
      iconClass:   'fa-solid fa-robot',
      iconColor:   '#a78bfa',
      accentFrom:  '#8b5cf6',
      accentTo:    '#a78bfa',
      tags:        ['LLMs', 'Agents', 'LangChain', 'Fine-tuning'],
    },
    {
      title:       'Modern DevOps & Cloud Infrastructure',
      description: 'Master Docker, CI/CD pipelines, Kubernetes fundamentals, and cloud deployment on AWS/GCP. Learn infrastructure-as-code and monitoring for modern production deployments.',
      price:       '₹65,000',
      track:       'advanced',
      iconClass:   'devicon-docker-plain',
      iconColor:   '#2496ed',
      accentFrom:  '#10b981',
      accentTo:    '#06b6d4',
      tags:        ['Docker', 'CI/CD', 'Cloud', 'Kubernetes'],
    },
  ];
}
