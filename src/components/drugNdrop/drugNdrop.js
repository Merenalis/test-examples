import React, {useState} from 'react';
import './main.css'

function DrugNdrop(props) {
    const [cardList, setCardList] = useState([
        {id: 1, order: 3, text: 'CARD 3'},
        {id: 2, order: 1, text: 'CARD 1'},
        {id: 3, order: 2, text: 'CARD 2'},
        {id: 4, order: 4, text: 'CARD 4'},
    ])
    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(event, card) {

        console.log('drag', card)
        setCurrentCard(card)
    }

    function dragEndHandler(event) {
        event.target.style.background = 'none'

        return undefined;
    }

    function dragOverHandler(event) {
        event.preventDefault()
        event.target.style.background = 'lightgray'

    }

    function dropHandler(event, card) {
        event.preventDefault()
        console.log('drop', card)
        setCardList(cardList.map((c) => {
            if (c.id === card.id) {
                return {...c,order: currentCard.order}
            }
            if (c.id === currentCard.id) {
                return {...c,order: card.order}
            }
            return c
        }))
        event.target.style.background = 'none'

    }

    function sortCards (a,b) {
        if (a.order>b.order) {
            return 1
        }
        return -1
    }
    return (
        <div className={'app'}>
            {cardList.sort(sortCards).map((card) =>
                <div
                    onDragStart={event => dragStartHandler(event, card)}
                    onDragEnd={event => dragEndHandler(event)}
                    onDragLeave={event => dragEndHandler(event)}
                    onDragOver={event => dragOverHandler(event)}
                    onDrop={event => dropHandler(event, card)}
                    className={'card'}
                    draggable={true}
                    key={card.id}>
                    {card.text}</div>
            )}


        </div>
    );
}

export default DrugNdrop;