// Fase di preparazione

const app = Vue.createApp({
    name: "Boolzapp",
    data: () => ({
        currentChat: 0,
        newMessage: "",
        user: {
            name: "Sofia",
            avatar: "./img/avatarUser.png"
        },
        // Struttura dati
        chatList: [
            {
                name: "Michele",
                avatar: "./img/avatar01.png",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        message: "Hai portato a spasso il cane?",
                        status: "sent"
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        message: "Ricordati di stendere i panni",
                        status: "sent"
                    },

                    {
                        date: "10/01/2020 16:15:22",
                        message: "Tutto fatto!",
                        status: "received"
                    }
                ]
            },

            {
                name: "Fabio",
                avatar: "./img/avatar02.png",
                visible: true,
                messages: [
                    {
                        date: "20/03/2020 16:30:00",
                        message: "Ciao come stai?",
                        status: "sent"
                    },

                    {
                        date: "20/03/2020 16:30:55",
                        message: "Bene grazie! Stasera ci vediamo?",
                        status: "received"
                    },

                    {
                        date: "20/03/2020 16:35:00",
                        message: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent"
                    }
                ]
            },

            {
                name: "Samuele",
                avatar: "./img/avatar03.png",
                visible: true,
                messages: [
                    {
                        date: "28/03/2020 10:10:40",
                        message: "La Marianna va in campagna",
                        status: "received"
                    },

                    {
                        date: "28/03/2020 10:20:10",
                        message: "Sicuro di non aver sbagliato chat?",
                        status: "sent"
                    },

                    {
                        date: "28/03/2020 16:15:22",
                        message: "Ah scusa!",
                        status: "received"
                    }
                ]
            },

            {
                name: "Alessandro B.",
                avatar: "./img/avatar04.png",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        message: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent"
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        message: "Si, ma preferirei andare al cinema",
                        status: "received"
                    }
                ]
            },

            {
                name: "Alessandro L.",
                avatar: "./img/avatar05.png",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        message: "Ricordati di chiamare la nonna",
                        status: "sent"
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        message: "Va bene, stasera la sento",
                        status: "received"
                    }
                ]
            },

            {
                name: "Claudia",
                avatar: "./img/avatar06.png",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        message: "Ciao Claudia, hai novità?",
                        status: "sent"
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        message: "Non ancora",
                        status: "received"
                    },

                    {
                        date: "10/01/2020 15:51:00",
                        message: "Nessuna nuova, buona nuova",
                        status: "sent"
                    }
                ]
            },

            {
                name: "Federico",
                avatar: "./img/avatar07.png",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        message: "Fai gli auguri a Martina che è il suo compleanno!",
                        status: "sent"
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        message: "Grazie per avermelo ricordato, le scrivo subito!",
                        status: "received"
                    }
                ]
            },

            {
                name: "Davide",
                avatar: "./img/avatar08.png",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        message: "Ciao, andiamo a mangiare la pizza stasera?",
                        status: "received"
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                        status: "sent"
                    },

                    {
                        date: "10/01/2020 15:51:00",
                        message: "OK!",
                        status: "received"
                    }
                ]
            }
        ]
    }),
    computed: {},
    methods: {
        setActiveChat(chat) {
            if (this.currentChat === chat) return "active-chat";
        },
        setCurrentChat(newChat) {
            return this.currentChat = newChat;
        },
        createMessage(message, status) {
            const newMessage = {
                date: "",
                message,
                status
            }
            this.chatList[this.currentChat].messages.push(newMessage);
        },
        sendMessage(message) {
            if (!message) return;
            this.createMessage(message, "sent");
            setTimeout(() => {
                this.createMessage("Ok!", "received")
            }, 1000);
            this.newMessage = "";
        },
        setStatusMessage(message) {
            return message.status === "sent" ? "sent-message" : "received-message";
        }
    }
});

app.mount("#app");