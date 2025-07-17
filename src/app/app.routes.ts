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
    },
    {
        path: 'posts',
        loadComponent: () => import('./components/posts/posts.component')
        .then(m => m.PostsComponent)
    },
    {
        path: 'albums',
        loadComponent: () => import('./components/albums/albums.component')
        .then(m => m.AlbumsComponent)
    },
    {
        path: 'album/:id',
        loadComponent: () => import('./components/album/album.component')
        .then(m => m.AlbumComponent)
    },
    {
        path: 'post/:id',
        loadComponent: () => import('./components/post/post.component')
        .then(m => m.PostComponent)
    },
    {
      path: 'carro',
      loadComponent: () => import('./components/carro/carro.component')
        .then(m => m.CarroComponent)
    },
];
