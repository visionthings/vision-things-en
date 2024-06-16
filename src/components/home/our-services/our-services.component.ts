import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {
  services = [
    {
      id: 'research',
      title: $localize`Research & Development`,
      description: `The company works to provide the latest technical solutions through research and development in the following fields: artificial intelligence, computer vision, robotics, augmented reality, and the Internet of Things.`,
    },
    {
      id: 'network',
      title: 'Network Solutions',
      description: `Network extension design is the process of planning and implementing a new or updated network system. This includes identifying business needs`,
    },
    {
      id: 'business',
      title: `Business Solutions`,
      description:
        'Creating websites and technical solutions to facilitate business management processes and make them more administratively professional',
    },
  ];
}
