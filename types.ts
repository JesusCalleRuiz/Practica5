export type Cliente = {
    id: string;
    name: string;
    email: string;
    cards: Tarjetas[];
    travels: Viaje[];
  };
  
  export type Conductor = {
    id: string;
    name: string;
    email: string;
    username: string;
    travels: Viaje[];
  };

  export type Viaje = {
    id: string;
    client: string;
    driver: string;
    distance: number;
    money: number;
    date: string;
    status: string;
  };

  export type Tarjetas = {
    number: number;
    cvv: number;
    expirity: string;
    money: number;
  };