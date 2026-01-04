
export const restaurants = [
  { id: 1, name: "Restaurante La Plaza" },
  { id: 2, name: "Restaurante El Puerto" }
];

export const shifts = {
  1: [ // Restaurante La Plaza
    { id: 101, employee: "Juan Pérez", role: "Cocinero", start: "10:00", end: "16:00" },
    { id: 102, employee: "Ana García", role: "Camarera", start: "11:00", end: "17:00" },
    { id: 103, employee: "Carlos Ruiz", role: "Cocinero", start: "16:00", end: "23:00" },
    { id: 104, employee: "Elena Gomez", role: "Gerente", start: "09:00", end: "18:00" },
  ],
  2: [ // Restaurante El Puerto
    { id: 201, employee: "Maria López", role: "Gerente", start: "09:00", end: "17:00" },
    { id: 202, employee: "Pedro Sanchez", role: "Camarero", start: "12:00", end: "20:00" },
    { id: 203, employee: "Lucia Diaz", role: "Camarera", start: "18:00", end: "00:00" },
    { id: 204, employee: "Roberto Fa", role: "Ayudante", start: "19:00", end: "23:00" },
  ]
};
