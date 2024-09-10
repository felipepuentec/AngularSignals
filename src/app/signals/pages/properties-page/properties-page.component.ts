import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  public counter = signal(10);
  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  // No es diferente a una propiedad computada, con la excepcion de que tenemos un callback, y es lo que queremos ejecutar cada vez que la propiedad cambia
  public userChangeEffect = effect(() => {
    // cada vez que este usuario cambia se va a imprimir porque esta referenciado aqui adentro
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }

  onFieldUpdated(field: keyof User, value: string) {
    // Esto es potencialmente inseguro porque se puede mandar un campo que no existe y terminara creando una propiedad en mi objeto
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    // this.user.update(current => ({
    //   ...current,
    //   [field]: value
    // }))

    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }

      return current;
    });
  }
}
