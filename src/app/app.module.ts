import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WavesurferComponent } from './wavesurfer/wavesurfer.component';
import { PlaylistComponent } from './playlist/playlist.component';
@NgModule({
  declarations: [AppComponent, WavesurferComponent, PlaylistComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
