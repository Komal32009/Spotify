import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import img20 from './img20.jpg'
import img17 from './img17.jpg'
import img18 from './img18.jpg'
import img19 from './img19.jpg'
import guza from './guza.jpg'
import hakee from './hakee.jpg'
import img21 from './img21.jpeg'
import mujhe from './mujhe.jpeg'
import mera from './mera.jpg'
import fitoor from './fitoor.jpg'
import sun from './sun.jpg'
import gulaab from './gulaab.jpg'
import kusu from './kusu.jpg'
import kahani from './kahani.jpg'
import hale from './hale.jpeg'
import lena from './lena.jpeg'
import mann from './mann.jpg'
import labon from './labon.jpg'
import laung from './laung.jpg'
import sakisaki from './sakisaki.jpg'
import aayinai from  './aayinai.mp3'
import dilbar from  './dilbar.mp3'
import haledil from  './haledil.mp3'
import tumhiho from  './tumhiho.mp3'
import wolamhe from  './wolamhe.mp3'
import merapyar from  './merapyar.mp3'
import loveme from  './loveme.mp3'
import hazaro from  './hazaro.mp3'
import tumbin from  './tumbin.mp3'
import dilmeri from  './dilmeri.mp3'
import guzarish from  './guzarish.mp3'
import hakeekat from  './hakeekat.mp3'
import fitoorjab from  './fitoorjab.mp3'
import aankh from  './aankh.mp3'
import mannmera from  './mannmera.mp3'
import labonko from  './labonko.mp3'
import laachi from  './laachi.mp3'
import saki from  './saki.mp3'
import kahanisuno from  './kahanisuno.mp3'
import kusukusu from  './kusukusu.mp3'






export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Dekha Hazaro Dafa",
        image: img20,
        file:hazaro,
        desc:"Rustom Vahi",
        duration:"3:00"
    },
    {
        id:1,
        name: "Tum hi Ho",
        image: img17,
        file:tumhiho,
        desc:"Ashiqui 2, Arijit Singh",
        duration:"2:20"
    },
    {
        id:2,
        name: "Dilbar",
        image: img18,
        file:dilbar,
        desc:"Satyamev Jayate , Neha Kakkar",
        duration:"2:32"
    },
    {
        id:3,
        name: "Aayi Nai",
        image: img19,
        file:aayinai,
        desc:"Stree 2 , Pawan Singh",
        duration:"2:50"
    },
    {
        id:4,
        name: "I Love You",
        image: img21,
        file:loveme,
        desc:"Akul , songs",
        duration:"3:10"
    },
    {
        id:5,
        name: "Hale Dil",
        image: hale    ,
        file:haledil,
        desc:"Emran Hashmi",
        duration:"2:45"
    },
    {
        id:6,
        name: "Kya Mujhe Pyar Hai",
        image: mujhe,
        file:wolamhe,
        desc:"Wo lamhe , K.K",
        duration:"2:18"
    },
    {
        id:7,
        name: "Tum Ho Mera Pyar",
        image: mera,
        file:merapyar,
        desc:"Haunted movie",
        duration:"2:35"
    },
{
        id:8,
        name: "Dekh Lena ",
        image: lena,
        file:tumbin,
        desc:"Tum Bin 2, Arijit singh , Neha Sharma",
        duration:"2:35"
    },
    {
        id:9,
        name: "Dil Meri Na Sune ",
        image: sun,
        file:dilmeri,
        desc:"Genius , Arijit Singh",
        duration:"2:35"
    }
    ,
    {
        id:10,
        name: " Guzzarish ",
        image: guza,
        file:guzarish,
        desc:"Gajni , Amir Khan, Aashin",
        duration:"2:35"
    }
    ,
    {
        id:11,
        name: " Tera Fitoor  ",
        image: fitoor,
        file:fitoorjab,
        desc:"Genius, Arijit Singh",
        duration:"2:35"
    }
    ,
    {
        id:12,
        name: " Tu Hi Hakeekat  ",
        image: hakee,
        file:hakeekat,
        desc:"Emraan Hashmi",
        duration:"2:35"
    }
    ,
    {
        id:13,
        name: "Ankhiyan Gulaab  ",
        image: gulaab,
        file:aankh,
        desc:"Teri Baaton mein aisa uljha jiya",
        duration:"2:35"
    }
    ,
    {
        id:14,
        name: "Mann Mera ",
        image:mann,
        file:mannmera,
        desc:"Table No. 21",
        duration:"2:35"
    }
    ,
    {
        id:15,
        name: "Labon Ko ",
        image:labon,
        file:labonko,
        desc:"Bhool Bhoolaiya, Akshay Kumar, Vidya Balan",
        duration:"2:35"
    }
    ,
    {
        id:16,
        name: "Laung Laachi",
        image:laung,
        file:laachi,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
    ,
    {
        id:17,
        name: "Saaki Sakki",
        image:sakisaki,
        file:saki,
        desc:"Nora Fatehi , Neha Kakkar",
        duration:"2:35"
    }
    ,
    {
        id:18,
        name: "Kahani Suno 2.0",
        image:kahani,
        file:kahanisuno,
        desc:"singers Choice",
        duration:"2:53"
    }
    ,
    {
        id:19,
        name: "Kusu Kusu",
        image:kusu,
        file:kusukusu,
        desc:"Nora Fatehi , Satyamev Jayate",
        duration:"2:35"
    }

]