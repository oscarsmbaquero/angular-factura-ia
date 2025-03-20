import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent {

   menu =[
    {
      imageUrl:
        'https://res.cloudinary.com/dcfk8yjwr/image/upload/v1742489552/contable_srluxc.png',
      description: 'Contable',
      link: ['/chat', 'contable'],
      badge: true,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dcfk8yjwr/image/upload/v1742489553/comercial_citvwr.png',
      description: 'Comercial',
      link: ['/chat', 'comercial'],
      badge: true,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dcfk8yjwr/image/upload/v1742489553/abogado_hkxqwk.jpg',
      description: 'Abogado',
      link: ['/chat', 'abogado'],
      badge: true,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dcfk8yjwr/image/upload/v1742489553/tecnico_d99vup.jpg',
      description: 'Técnico',
      link: ['/chat', 'tecnico'],
      badge: true,
    }
  
]

}
