export interface UserModel{
    id: number;
    fullName: string;
    username: string; //A genenerer par le systeme
    password: string;
    image: Blob;
    etat: boolean;
    roles: [
      {
        libelle: string;
      }
    ];
  }