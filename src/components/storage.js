import { writable } from 'svelte/store';

export const nombre = writable('');


if (typeof window !== 'undefined') {
  const storedNombre = localStorage.getItem('nombre') || '';
  nombre.set(storedNombre);

  nombre.subscribe(value => {
    localStorage.setItem('nombre', value);
  });
}
