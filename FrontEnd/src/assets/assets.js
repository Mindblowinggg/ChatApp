import avatar_icon from './avatar_icon.png'
import gallery_icon from './gallery_icon.svg'
import help_icon from './help_icon.png'
import logo_icon from './logo_icon.svg'
import logo from './logo.jpg'
import profile_richard from './profile_richard.png'
import profile_alison from './profile_alison.png'
import profile_enrique from './profile_enrique.png'
import profile_marco from './profile_marco.png'
import profile_martin from './profile_martin.png'
import search_icon from './search_icon.png'
import send_button from './send_button.svg'
import menu_icon from './menu_icon.png'
import arrow_icon from './arrow_icon.png'
import code from './code.svg'
import bgImage from './bgimg.svg'
import ChatContainerBg from './chatcontainerbg.png' 
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
// Image imports have been removed


const assets = {
    avatar_icon,
    gallery_icon,
    help_icon,
    logo_icon,
    logo,
    ChatContainerBg, 
    search_icon,
    send_button,
    menu_icon,
    arrow_icon,
    code,
    bgImage,
    profile_martin,
}

export default assets;

export const imagesDummyData = [pic1, pic2, pic3, pic4, pic1, pic2]

export const userDummyData = [
    {
        "_id": "680f50aaf10f3cd28382ecf2",
        "email": "aarya.sharma@example.dev",
        "fullName": "Aarya Sharma",
        "profilePic": profile_alison,
        "bio": "Hello everyone, I am using QuickChat.",
    },
    {
        "_id": "680f50e4f10f3cd28382ecf9",
        "email": "vijay.kumar@example.dev",
        "fullName": "Vijay Kumar",
        "profilePic": profile_martin,
        "bio": "Hello everyone, I am using QuickChat.",
    },
    {
        "_id": "680f510af10f3cd28382ed01",
        "email": "neha.singh@example.dev",
        "fullName": "Neha Singh",
        "profilePic": profile_enrique,
        "bio": "Hello everyone, I am using QuickChat.",
    },
    {
        "_id": "680f5137f10f3cd28382ed10",
        "email": "rohan.patel@example.dev",
        "fullName": "Rohan Patel",
        "profilePic": profile_marco,
        "bio": "Hello everyone, I am using QuickChat.",
    },
    {
        "_id": "680f516cf10f3cd28382ed11",
        "email": "priya.verma@example.dev",
        "fullName": "Priya Verma",
        "profilePic": profile_richard,
        "bio": "Hello everyone, I am using QuickChat.",
    }
]

export const messagesDummyData = [
    {
        "_id": "680f571ff10f3cd28382f094",
        "senderId": "680f5116f10f3cd28382ed02", // Neha (Friend 1)
        "receiverId": "680f50e4f10f3cd28382ecf9", // Vijay (Friend 2 - Current User)
        "text": "Hey Vijay! Long time no talk, how's everything been on your end? Are you busy this weekend? 🤔",
        "seen": true,
        "createdAt": "2025-10-14T15:00:00.000Z",
    },
    {
        "_id": "680f5726f10f3cd28382f0b1",
        "senderId": "680f50e4f10f3cd28382ecf9", // Vijay
        "receiverId": "680f5116f10f3cd28382ed02", // Neha
        "text": "Hey Neha! It's been good, just finished a huge project at work, so I'm totally free! I was actually planning a chill movie night and ordering a big pizza. You wanna join?",
        "seen": true,
        "createdAt": "2025-10-14T15:01:30.000Z",
    },
    {
        "_id": "680f5729f10f3cd28382f0b6",
        "senderId": "680f5116f10f3cd28382ed02", // Neha
        "receiverId": "680f50e4f10f3cd28382ecf9", // Vijay
        "text": "OMG, that sounds like a lifesaver! I desperately need a break. Pizza and movies sound perfect! What kind of movie were you thinking of? Horror, comedy, or something chill?",
        "seen": true,
        "createdAt": "2025-10-14T15:02:45.000Z",
    },
    {
        "_id": "680f572cf10f3cd28382f0bb",
        "senderId": "680f50e4f10f3cd28382ecf9", // Vijay
        "receiverId": "680f5116f10f3cd28382ed02", // Neha
        "text": "I was leaning towards that new sci-fi action movie everyone's talking about, but I'm flexible. Let's aim for 8 PM here. Bring your favorite snacks and let the weekend begin! 🍿🥤",
        "seen": true,
        "createdAt": "2025-10-14T15:03:55.000Z",
    },
    {
        "_id": "680f573cf10f3cd28382f0c0",
        "senderId": "680f5116f10f3cd28382ed02", // Neha
        "receiverId": "680f50e4f10f3cd28382ecf9", // Vijay
        "text": "The sci-fi one? I heard it had some amazing visual effects, I'm totally in! Is it okay if I arrive a little early, maybe around 7:30? I need to run a quick errand beforehand.",
        "seen": true,
        "createdAt": "2025-10-14T15:05:10.000Z",
    },
    {
        "_id": "680f5745f10f3cd28382f0c5",
        "senderId": "680f50e4f10f3cd28382ecf9", // Vijay
        "receiverId": "680f5116f10f3cd28382ed02", // Neha
        "text": "7:30 is perfect! Gives us time to catch up before the pizza arrives. Just text me when you leave your place so I know when to expect you. Looking forward to it!",
        "seen": true,
        "createdAt": "2025-10-14T15:06:20.000Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0ca",
        "senderId": "680f5116f10f3cd28382ed02", // Neha
        "receiverId": "680f50e4f10f3cd28382ecf9", // Vijay
        "text": "Definitely! Thanks for inviting me, this is going to be fun. See ya on Saturday! 🎉",
        "seen": true,
        "createdAt": "2025-10-14T15:07:35.000Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0cb",
        "senderId": "680f50e4f10f3cd28382ecf9", // Vijay
        "receiverId": "680f5116f10f3cd28382ed02", // Neha
        "text": "By the way, did you finish reading that book I lent you last month? We need to talk about that ending!",
        "seen": true,
        "createdAt": "2025-10-14T15:08:15.000Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0cc",
        "senderId": "680f5116f10f3cd28382ed02", // Neha
        "receiverId": "680f50e4f10f3cd28382ecf9", // Vijay
        "text": "Oh man, almost! I'm on the final chapter. I'll make sure to finish it before Saturday. Don't spoil anything! 😉",
        "seen": true,
        "createdAt": "2025-10-14T15:09:00.000Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0cd",
        "senderId": "680f50e4f10f3cd28382ecf9", // Vijay
        "receiverId": "680f5116f10f3cd28382ed02", // Neha
        "text": "Haha, wouldn't dream of it. See you then! 👋",
        "seen": true,
        "createdAt": "2025-10-14T15:09:30.000Z",
    }
]