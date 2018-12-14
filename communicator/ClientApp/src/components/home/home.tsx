import React, { Component } from 'react'
import './home.scss'
import { ChatMessage } from '../../models/ChatMessage';
import ChatWebsocketService from '../../services/ChatWebsocketService'

export default class HomeComponent extends Component {

     componentWillMount() {
          ChatWebsocketService.start();
     }


     componentWillUnmount() {
          ChatWebsocketService.stop();
     }


     render() {

          return (
               <section className="global-section">
                    <header className="global-section__header">Admin panel</header>

                    Home page - zawarty zostanie tutaj opis aplikacji

                    Tutaj też można testować komunikacje - ChatMessage


               </section>
          )
     }
}
