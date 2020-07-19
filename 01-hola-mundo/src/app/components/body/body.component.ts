import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar: boolean = true;

    frase: any = {
        mensage: '¿Ha oído alguna vez aquello de que no se puede vivir sin amor? Pues el oxígeno es más importante.',
        autor: 'Gregory House'
    };

    Personajes: string[] = ['Turanga Leela', 'Bender', 'Doctor Zoidberg', 'Profesor Farnsworth', 'Philip J. Fry'];
}
