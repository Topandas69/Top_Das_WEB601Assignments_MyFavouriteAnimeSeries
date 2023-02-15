import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentsArray: Content[];
  searchTitle: string = '';
  isTitleExist: boolean | null = null;

  logId(getContent: any){
    console.log(`ID: ${getContent.id}`);
    console.log(`Title: ${getContent.title}`);
  }

  searchByTitle(){
    this.isTitleExist = this.contentsArray.some(content => content.title === this.searchTitle);
  }

  constructor(){
    this.contentsArray = [
    {
      id: 1,
      title: "DragonBall",
      description: "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. Dragon Ball Z teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.",
      creator: "Akira Toriyama",
      imgURL: "https://images.alphacoders.com/605/605799.jpg",
      tags: ['Dragon Ball', 'Anime', 'Action']
    },
    {
      id: 2,
      title: "DragonBall Super",
      description: "A sequel to Toriyama's original Dragon Ball manga, it follows the adventures of Goku and friends during the ten-year timeskip after the defeat of Majin Buu",
      creator: "Akira Toriyama",
      imgURL: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/26079ab060401d8a76039e985d63a3e9.jpeg",
      type: "Action"
    },
    {
      id: 3,
      title: "Naruto Shippuden",
      description: "Naruto, an adolescent ninja, dreams of becoming the Hokage in his village.",
      creator: "Masashi Kishimoto",
      tags: ['Naruto', 'LifeStyle']
    },
    {
      id: 4,
      title: "Dragon Ball Z",
      description: "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil.",
      creator: "Akira Toriyama",
      imgURL: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpe",
      type: "Action"
    },
    {
      id: 5,
      title: "Naruto",
      description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
      creator: "Masashi Kishimoto",
      imgURL: "https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 6,
      title: "Death Note",
      description: "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from December 2003 to May 2006, with its 108 chapters collected in 12 tankōbon volumes. ",
      creator: "Shueisha",
      type: "Thriller",
      tags: ['DeathNote', 'Horror']
    },
    {
      id: 7,
      title: "Erased",
      description: "Erased, known in Japan as Boku dake ga Inai Machi, is a Japanese manga series written and illustrated by Kei Sanbe. It was serialized in Kadokawa Shoten's Young Ace magazine from June 2012 to March 2016, and is licensed in English by Yen Press.",
      creator: "Kenta Suzuki, Taku Matsuo",
      imgURL: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/09e46a3c3f53cb75e87af53393de7436.jpe",
      type: "Suspense"
    }
    ];
  }
}
