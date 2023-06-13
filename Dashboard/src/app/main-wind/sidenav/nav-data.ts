import { INavbarData } from "./helper";

export const navbarData: INavbarData [] = [

    {
        routeLink: 'etiqueta',
        icon: 'etiqueta',
        label: 'Etiqueta'
    },
    {
      routeLink: 'formula',
      icon: 'formula',
      label: 'Formula'
    },
    {
      routeLink: 'evalua',
      icon: 'evalua',
      label: 'Evalua'
    },
    {
      routeLink: 'documenta',
      icon: 'documenta',
      label: 'Documenta'
    },
    {
      routeLink: 'gestiona',
      icon: 'gestiona',
      label: 'Gestiona'
    },
    {
      routeLink: 'analiza',
      icon: 'analiza',
      label: 'Analiza'
    },
    {
      routeLink: 'limpia',
      icon: 'limpia',
      label: 'Limpia'
    },
    {
      routeLink: 'controla',
      icon: 'controla',
      label: 'Controla'
    },
    {
      routeLink: 'audita',
      icon: 'audita',
      label: 'Audita'
    },
    {
      routeLink: 'educa',
      icon: 'educa',
      label: 'Educa'
    },
    {
      routeLink: 'piensaDisenia',
      icon: 'piensa',
      label: 'Innovar'
    },
    {
      routeLink: 'cocina',
      icon: 'cocina',
      label: 'Cocina'
    },
    {
      routeLink: 'usuario',
      icon: 'perfil',
      label: 'Usuario',
      expanded: true,
      /* */
      items: [
        {
          routeLink: 'usuario/miperfil',
          label: 'Mi Perfil'
        },
        {
          routeLink: 'usuario/miplan',
          label: 'Mi Plan'
        },
        {
          routeLink: 'usuario/logout',
          label: 'Cerrar Sessión'
        },
      ]
    },
];
