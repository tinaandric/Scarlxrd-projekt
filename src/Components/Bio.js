import "../App.css";
import prva from '../imgs/s.png';
import druga from '../imgs/s1.jpg';
import treca from '../imgs/s2.jpg';
import cetvrta from '../imgs/s3.jpg';

function Bio(){
    return(
        <div className="Bio">
            <div>
                <h1 className="naslovi">Bixgraphy    </h1>
                <div className="sadrzaj">
                Marius Lucas Antonio Listhrop (born 19 June 1994), better known as Scarlxrd (pronounced "Scarlord"), is a British rapper, singer and songwriter. He is known for his unique musical style combining elements of trap music and heavy metal. Formerly a YouTube personality known as Mazzi Maz, Scarlxrd began a career in music as the vocalist for nu metal band Myth City, before debuting as a rapper under his Scarlxrd moniker.<br/>He rose to prominence after the music video for his single "Heart Attack" gained significant attention, holding over 88 million views on YouTube as of April 2021. He has since released other successful songs, namely "King, Scar", "6 Feet", "Berzerk", and "Head Gxne".
                <h3 className="podnaslovi">‣Artistry</h3>
                Scarlxrd's combination of trap music and heavy metal has been dubbed "trap metal" and is often associated with SoundCloud rap artists. In a 2018 article, NME described him as a "tormented outsider hip-hop artist". They also called him a "rap metal overlord" and his style to include "screamed vocals, claustrophobic trap beats and ear-shredding bursts of distorted guitar", as well as calling it a fusion of metal and "nihilistic rap". Scarlxrd grew up listening to heavy metal music and cites hip hop artists including Missy Elliott, Nelly and Eminem as influences. He also stated that he formed Myth City after listening to Linkin Park, Rage Against the Machine, Incubus and Deftones.<br/>He is known to replace the letter "o" with "x", which is shown in his stage name and song titles. Scarlxrd's visual aesthetic within his music videos and clothing style is heavily influenced from Japanese culture, especially anime. His signature surgical mask, which he wears to distance himself from his YouTube image, was inspired by the Japanese manga Tokyo Ghoul. He began wearing the mask less often after the release of Infinity. Scarlxrd also cited American heavy metal band Slipknot as an inspiration towards his visuals.
                <h3 className="podnaslovi">‣Career</h3>
                2012–2014: YouTube beginnings<br/>
                Before he started a career in music, Listhrop began uploading videos on YouTube as Mazzi Maz. His personality on the site was described as a "perky" and "super-smiley YouTuber" who recorded and published vlogs in his bedroom. He often collaborated with friends and fellow YouTube personalities Sam Pepper and Caspar Lee. From late-2013 to mid-2014, Listhrop and Pepper embarked on a worldwide comedy-music tour, "WDGAF Tour". By February 2017, Listhrop removed all of his Mazzi Maz videos from his YouTube channel and has since rebranded it to his Scarlxrd moniker. In a 2018 Interview, Listhrop described his time as a YouTube personality and posting videos on the site as "soul-destroying".
                <br/>2014–2016: Myth City<br/>
                In 2014, Listhrop founded the nu metal/rap rock band Myth City, in which he performed as the vocalist. Listhrop also described the band's sound as a fusion of rap music and grindcore. The band's YouTube channel quickly gained a following mainly consisting of Mazzi Maz fans, who gave the group a mixed reception; fans responded positively to Listhrop's screamed vocals, but were confused on the contrast between the band's harsh musical style and Listhrop's "smiley" YouTube videos. Myth City released their self-titled debut EP on 28 February 2015.
                <br/>2016-2018: Early albums and breakthrough<br/>
                n August 2016, Scarlxrd debuted his new moniker with the release of "Girlfriend". The music video depicts him unmasked and rapping over a "humid, tropical hip-hop track". By the end of 2016, he released two albums, his self-titled album (stylised in Japanese characters as スカー藩主) and Rxse. After the release of two more albums, Cabin Fever and Chaxsthexry, in April 2017, Scarlxrd released the video for "Chain$aw" on 31 May; a week later, he released the music video for "King, Scar". On 23 June, he published the music video for "Heart Attack" and the video quickly gained popularity; he credits his consistency of releasing music videos, specifically the videos for "Chain$aw" and "King, Scar", for the video's popularity rise. On 29 September, he released his fifth studio album Lxrdszn. “King, Scar” and "Chain$aw" were also released as music kits in Counter-Strike: Global Offensive.
                <br/>
                n February 2018, it was announced that Scarlxrd would perform at the 2018 Reading and Leeds Festivals. In April, it was revealed that he would be featured on Carnage's second studio album, Battered Bruised and Bloody, released on 13 April; Scarlxrd performed on the song "Up Nxw". On 4 May, he released his sixth studio album and major label debut Dxxm via Island Records.
                <br/>2018–2020: Continued major label releases<br/>
                After releasing singles from mid-2018 to early-2019 in anticipation of an upcoming album, including "Hxw They Judge", "Berzerk", "Sx Sad", and "Head Gxne", Scarlxrd announced his seventh studio album, Infinity, which was released on 15 March 2019. He was a nominee in the 2019 Kerrang! Awards for Best British Breakthrough. Later that year, "The Purge" was featured on the first season of the HBO television series Euphoria. Scarlxrd released his second album of 2019 titled Immxrtalisatixn on 4 October. He released his third 2019 studio album on 13 December, titled Acquired Taste Vxl 1. On 19 December, "I Can Dx What I Want" was announced as the official theme song for the WWE NXT UK event, NXT UK TakeOver: Blackpool II.
                <br/>2021–present: Independent releases<br/>
                On 14 January 2021, Scarlxrd released "Let the Wxrld Burn" via his independent label Lxrd Records, marking his first release since his departure from Island Records. On 5 February, Scarlxrd released his 12th studio album Dxxm II, a sequel to his 2018 project Dxxm.
            </div>
            <div className="slike">
                <p className="da">
                    <img src={prva} className="slika"/><br/><br/><br/><br/><br/><br/><br/>
                    <img src={druga} className="slika"/><br/><br/><br/>
                    <img src={treca} className="slika"/><br/><br/><br/>
                    <img src={cetvrta} className="slika"/><br/>
                </p>
            
            </div>

            </div>
            
        </div>
    );
}
export default Bio;