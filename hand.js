class Hand {
    constructor(cards = []){
        this.cards = cards;
    }
    addCard(card){
        this.cards.push(card);
    }
    playCard(card){
        // will remove and return the specified card from the hand. It should return null if the card is not in the hand
        //find, remove, and return given card
        const index = this.cards.indexOf(card);
        if (index > -1 ){
            this.cards.splice(index,1);
            return card;
        }
        //when card not found
        return null;
    }
    toString(){
        return this.cards.join(",");
    }
}
