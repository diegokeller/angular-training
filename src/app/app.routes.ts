import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'ola',
        loadComponent: () => import('./components/ola/ola.component')
        .then(m => m.OlaComponent)
    },
    {
        path: 'soma',
        loadComponent: () => import('./components/soma/soma.component')
        .then(m => m.SomaComponent)
    },
    {
        path: 'maior-menor',
        loadComponent: () => import('./components/maior-menor/maior-menor.component')
        .then(m => m.MaiorMenorComponent)
    },
    {
        path: 'lista-pessoas',
        loadComponent: () => import('./components/lista-pessoas/lista-pessoas.component')
        .then(m => m.ListaPessoasComponent)
    },
    {
        path: 'tarefas',
        loadComponent: () => import('./components/tarefas/tarefas.component')
        .then(m => m.TarefasComponent)
    },
    {
        path: 'bem-vindo',
        loadComponent: () => import('./components/bem-vindo/bem-vindo.component')
        .then(m => m.BemVindoComponent)
    }
];
