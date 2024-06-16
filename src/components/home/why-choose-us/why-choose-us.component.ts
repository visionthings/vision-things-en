import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
})
export class WhyChooseUsComponent {
  items = [
    {
      id: 'price',
      title: `The price is better than the market price`,
      description: `Seeing Things always offers the best prices compared to the local and international market`,
    },
    {
      id: 'technical-support',
      title: `Providing technical support for technical equipment`,
      description:
        'We also provide technical support, assistance and visits to solve problems',
    },
    {
      id: 'supply',
      title: `Supply of new technical equipment`,
      description: `Vision Things provides brand new and always better technology solutions`,
    },
    {
      id: 'solutions',
      title: `Providing appropriate technical solutions`,
      description: `We always select and recommend the best choice and suitable solutions for our clients`,
    },
    {
      id: 'experience',
      title: `The company's experience in the technical field`,
      description:
        'The company has sufficient experience in the fields of information technology at the hands of our engineers',
    },
  ];
}
