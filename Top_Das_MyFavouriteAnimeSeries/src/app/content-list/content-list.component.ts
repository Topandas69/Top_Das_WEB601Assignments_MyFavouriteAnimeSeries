import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentsArray: Content[];

  constructor(){
    this.contentsArray = [
    {
      id: 1,
      title: "DragonBall",
      description: "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. Dragon Ball Z teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.",
      creator: "Akira Toriyama",
      imgURL: "https://images.alphacoders.com/605/605799.jpg",
      type: "Anime"
    },
    {
      id: 2,
      title: "DragonBall Super",
      description: "A sequel to Toriyama's original Dragon Ball manga, it follows the adventures of Goku and friends during the ten-year timeskip after the defeat of Majin Buu",
      creator: "Akira Toriyama",
      imgURL: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/26079ab060401d8a76039e985d63a3e9.jpeg",
      type: "Anime"
    },
    {
      id: 3,
      title: "Naruto Shippuden",
      description: "Naruto, an adolescent ninja, dreams of becoming the Hokage in his village.",
      creator: "Masashi Kishimoto",
      imgURL: "https://staticg.sportskeeda.com/editor/2021/10/fbfca-16355883548821-1920.jpg",
      type: "Anime"
    },
    {
      id: 4,
      title: "Dragon Ball Z",
      description: "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil.",
      creator: "Akira Toriyama",
      imgURL: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpe",
      type: "Anime"
    },
    {
      id: 5,
      title: "Naruto",
      description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
      creator: "Masashi Kishimoto",
      imgURL: "https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      type: "Anime"
    },
    {
      id: 6,
      title: "Death Note",
      description: "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from December 2003 to May 2006, with its 108 chapters collected in 12 tankōbon volumes. ",
      creator: "Shueisha",
      imgURL: "https://static.wikia.nocookie.net/deathnote/images/7/76/DEATH_NOTE_anime.jpg/revision/latest?cb=20170720215429",
      type: "Anime"
    }
    ];
  }
}
