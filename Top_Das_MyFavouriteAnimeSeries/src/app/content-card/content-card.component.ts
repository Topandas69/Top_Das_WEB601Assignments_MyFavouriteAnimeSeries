import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor(){
    
    this.contentList = new ContentList();

    this.contentList.add({
      id: 1,
      title: "DragonBall",
      description: "Dragon Ball Z follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. Dragon Ball Z teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.",
      creator: "Akira Toriyama",
      imgURL: "https://images.alphacoders.com/605/605799.jpg",
      type: "Anime"
    });

    this.contentList.add({id: 2,
      title: "DragonBall Super",
      description: "A sequel to Toriyama's original Dragon Ball manga, it follows the adventures of Goku and friends during the ten-year timeskip after the defeat of Majin Buu",
      creator: "Akira Toriyama",
      imgURL: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/26079ab060401d8a76039e985d63a3e9.jpeg",
      type: "Anime"
    });

    this.contentList.add({id: 3,
      title: "Naruto Shippuden",
      description: "Naruto, an adolescent ninja, dreams of becoming the Hokage in his village.",
      creator: "Masashi Kishimoto",
      imgURL: "https://staticg.sportskeeda.com/editor/2021/10/fbfca-16355883548821-1920.jpg",
      type: "Anime"
    });
  }
}
