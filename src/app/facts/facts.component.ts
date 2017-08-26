import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

    facts = [
        "Unlike most other cats, the Turkish Van breed has a water-resistant coat and enjoys being in water",
    	"Webbed feet on a cat? The Peterbald's got 'em! They make it easy for the cat to get a good grip on things with skill",
    	"Despite appearing like a wild cat, the Ocicat does not have an ounce of wild blood",
    	"Cat's back claws aren't as sharp as the claws on their front paws",
    	"A group of kittens is called a kindle, and clowder is a term that refers to a group of adult cats",
    	"A third of cats' time spent awake is usually spent cleaning themselves",
    	"A female cat is also known to be called a queen or a molly",
    	"Want to call a hairball by its scientific name? Next time, say the word bezoar",
    	"Cats have a 5 toes on their front paws and 4 on each back paw",
    	"In multi-pet households, cats are able to get along especially well with dogs if they're introduced when the cat is under 6 months old and the dog is under one year old",
    	"Twenty-five percent of cat owners use a blow drier on their cats after bathing",
    	"Rather than nine months, cats' pregnancies last about nine weeks",
    	"It has been said that the Ukrainian Levkoy has the appearance of a dog, due to the angles of its face",
    	"A cat can reach up to five times its own height per jump",
    	"Cats have a strong aversion to anything citrus",
    	"Cats would rather starve themselves than eat something they don't like. This means they will refuse an unpalatable -- but nutritionally complete -- food for a prolonged period",
    	"The Snow Leopard, a variety of the California Spangled Cat, always has blue eyes",
    	"The two outer layers of a cat's hair are called, respectively, the guard hair and the awn hair",
    	"When a household cat died in ancient Egypt, its owners showed their grief by shaving their eyebrows",
    	"Caution during Christmas: poinsettias may be festive, but they’re poisonous to cats",
    	"Most kittens are born with blue eyes, which then turn color with age",
    	"A cat's meow is usually not directed at another cat, but at a human. To communicate with other cats, they will usually hiss, purr and spit.",
    	"According to the Guinness World Records, the largest domestic cat litter totaled at 19 kittens, four of them stillborn",
    	"As temperatures rise, so do the number of cats. Cats are known to breed in warm weather, which leads many animal advocates worried about the plight of cats under Global Warming.",
    	"Cats' rough tongues enable them to clean themselves efficiently and to lick clean an animal bone",
    	"Most cat litters contain four to six kittens",
    	"A Japanese cat figurine called Maneki-Neko is believed to bring good luck",
    	"One of Muhammad's companions was nicknamed Abu Hurairah, or Father of the Kitten, because he loved cats",
	   "Elvis Presley’s Chinese name is Mao Wong, or Cat King"
    ];

    currentFact:string;
    index:number = 0;

  constructor() { }

  ngOnInit() {
      this.currentFact = this.facts[this.index];
  }



  onNextFact() {
      let index = this.index + 1;
      this.index = index;
      this.currentFact = this.facts[index];


  }


}
