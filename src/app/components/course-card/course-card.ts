import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Course {
  title: string;
  description: string;
  price: string;
  track: 'foundation' | 'advanced';
  iconClass: string;      // devicon or fa class string
  iconColor: string;
  accentFrom: string;
  accentTo: string;
  tags: string[];
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .card-root {
      position: relative;
      background: rgba(15, 23, 42, 0.55);   /* slate-900/55 glassmorphism */
      border: 1px solid rgba(30, 41, 59, 0.9);  /* slate-800 */
      border-radius: 1.25rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      height: 100%;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .card-root:hover {
      transform: translateY(-6px);
      border-color: rgba(16, 185, 129, 0.25);  /* emerald on hover */
      box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(16,185,129,0.08);
    }
    .card-root:hover .top-line { opacity: 1; }
    .card-root:hover .card-icon { transform: scale(1.08); }
    .card-root:hover .cta-arrow { transform: translateX(4px); }

    .top-line {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      opacity: 0.5;
      transition: opacity 0.3s;
    }
    .card-icon {
      font-size: 2.5rem;
      transition: transform 0.3s;
      line-height: 1;
    }
    .icon-bg {
      width: 64px; height: 64px;
      border-radius: 16px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1rem;
    }
    .cta-arrow { transition: transform 0.25s; }
    .price-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .tag-pill {
      padding: 2px 10px;
      border-radius: 999px;
      font-size: 0.65rem;
      font-weight: 500;
      background: rgba(255,255,255,0.05);
      color: #94a3b8;
      border: 1px solid rgba(255,255,255,0.07);
      white-space: nowrap;
    }
  `],
  template: `
    <div class="card-root group">

      <!-- Gradient top accent line -->
      <div class="top-line"
           [style]="'background: linear-gradient(90deg, ' + course.accentFrom + ', ' + course.accentTo + ')'">
      </div>

      <div class="p-6 flex flex-col flex-1">

        <!-- Icon + Track badge row -->
        <div class="flex items-start justify-between mb-1">
          <div class="icon-bg"
               [style]="'background: linear-gradient(135deg, ' + course.accentFrom + '22, ' + course.accentFrom + '08)'">
            <i class="card-icon {{ course.iconClass }}" [style.color]="course.iconColor"></i>
          </div>
          <span [class]="course.track === 'foundation' ? 'track-badge-foundation' : 'track-badge-advanced'">
            <i [class]="course.track === 'foundation' ? 'fa-solid fa-layer-group' : 'fa-solid fa-rocket'" class="text-[10px]"></i>
            {{ course.track === 'foundation' ? 'Foundation' : 'Advanced' }}
          </span>
        </div>

        <!-- Title -->
        <h3 class="text-base font-bold text-white leading-snug mb-2 mt-1">{{ course.title }}</h3>

        <!-- Description -->
        <p class="text-slate-400 text-sm leading-relaxed flex-1">{{ course.description }}</p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5 mt-4">
          <span *ngFor="let tag of course.tags" class="tag-pill">{{ tag }}</span>
        </div>

        <!-- Divider -->
        <div class="mt-5 mb-4 h-px bg-white/[0.05]"></div>

        <!-- Price + CTA row -->
        <div class="flex items-center justify-between">
          <div>
            <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-0.5">Starting from</span>
            <span class="price-badge"
                  [style]="'background: ' + course.accentFrom + '18; color: ' + course.accentFrom + '; border: 1px solid ' + course.accentFrom + '35'">
              {{ course.price }}
            </span>
          </div>
          <a href="#contact"
             class="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
             [style.color]="course.accentFrom">
            Learn More
            <i class="fa-solid fa-arrow-right cta-arrow text-[10px]"></i>
          </a>
        </div>

      </div>
    </div>
  `
})
export class CourseCard {
  @Input({ required: true }) course!: Course;
}
