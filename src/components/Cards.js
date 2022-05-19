import React from 'react'
import '../App.css';
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out our past PERFORMANCES!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/xiayehuanyue-thumbnail.png"
                    text="Emerge 2022: 夏夜幻乐 ✨"
                    label='Concert'
                    path='https://www.youtube.com/watch?v=0KSx_OmpuoU'
                    />
                    <CardItem 
                    src="images/yiluxiangbei-thumbnail.jpg"
                    text="[一路向北 All the Way North] - 周杰伦 | Cover by NUS Voices"
                    label='Cover'
                    path='https://www.youtube.com/watch?v=eAHLj1QVuIs'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/yuzhongmanbu-thumbnail.jpg"
                    text="Prelude 2021: 雨中漫步 ☔️"
                    label='Livestream'
                    path='https://www.youtube.com/watch?v=2HOBFiwBqbI&t=2273s'
                    />
                    <CardItem 
                    src="images/chongjianshuguang-thumbnail.jpg"
                    text="Emerge 2021 - 重见曙光"
                    label='Livestream'
                    path='https://www.youtube.com/watch?v=efcjpmrptTw&t=5132s'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;