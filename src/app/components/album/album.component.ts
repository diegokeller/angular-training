import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, AlbumService, Photo } from '../../services/album.service';

@Component({
  selector: 'app-album',
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit {

  album?: Album = undefined;
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {
    console.log('AlbumComponent constructor');
  }

  ngOnInit(): void {
    console.log('AlbumComponent ngOnInit');

    const id = this.route.snapshot.params['id'];
    console.log('Album ID:', id);

    console.log('Fetching album and photos for ID:', id);
    this.albumService.getAlbumById(id)
      .subscribe(album => {
        this.album = album;
      });

    console.log('Fetching photos for album ID:', id);
    this.albumService.getAllPhotosByAlbumId(id)
      .subscribe(photos => {
         this.photos = photos;
      });
  }

}
