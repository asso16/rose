import "../Css/Home.css";
import asia from "../assets/asia.png";
import rose from "../assets/rose.png";
import Sunflower from "../assets/Sunflower.png";
import Orchid from "../assets/Orchid.png";
import Protea from "../assets/Protea.png";
import Wattle from "../assets/Wattle.png";
import AntarcticPearlwort from "../assets/AntarcticPearlwort.png";
export default function Home() {
  return (
    <div className="conthome">
      <div className="home">
        <div className="head-title">
          <h1>Welcome to Daren Orchard</h1>
          <p>Discover the beauty of flowers from around the world</p>
        </div>

        <div className="bodymain">
          <h2>Famous Flowers in the 7 Continents</h2>
          <div className="first-section">
            <div className="imgmain">
              <img src={asia} alt="Cherry Blossom" />
            </div>
            <div className="textimg">
              <h1>Asia</h1>
              <p>
                Asia is known for its diverse and beautiful flowers, many of
                which have cultural and symbolic significance. Here are some of
                the most famous flowers in Asia
              </p>
              <p>
                Cherry Blossom : Known for its beautiful pink and white flowers,
                the cherry blossom is a symbol of renewal and the fleeting
                nature of life in many Asian cultures
              </p>
            </div>
          </div>
          <div className="first-section">
            <div className="textimg">
              <h1>Europe</h1>
              <p>
                Europe is home to a wide variety of flowers, many of which have
                been cultivated for centuries for their beauty and fragrance.
                Here are some of the most famous flowers in Europe
              </p>
              <p>
                Rose: Often associated with love and romance, the rose is a
                popular flower in Europe, admired for its beauty and fragrance.
              </p>
            </div>
            <div className="imgmain">
              <img src={rose} alt="Rose" />
            </div>
          </div>
          <div className="first-section">
            <div className="imgmain">
              <img src={Sunflower} alt="Sunflower" />
            </div>
            <div className="textimg">
              <h1>North America</h1>
              <p>
                North America is home to a wide variety of flowers, many of
                which have become iconic symbols of the region. Here are some of
                the most famous flowers in North America
              </p>
              <p>
                Sunflower: Known for its large, bright yellow petals, the
                sunflower is a symbol of happiness and positivity in North
                America.
              </p>
            </div>
          </div>
          <div className="first-section">
            <div className="textimg">
              <h1>South America</h1>
              <p>
                South America is home to a wide variety of flowers, many of
                which are unique to the region. Here are some of the most famous
                flowers in South America
              </p>
              <p>
                Orchid: With its exotic and diverse appearance, the orchid is a
                symbol of beauty and strength in South America.
              </p>
            </div>
            <div className="imgmain">
              <img src={Orchid} alt="Orchid" />
            </div>
          </div>
          <div className="first-section">
            <div className="imgmain">
              <img src={Protea} alt="Protea" />
            </div>
            <div className="textimg">
              <h1>Africa</h1>
              <p>
                Africa is known for its diverse and colorful flowers, many of
                which have cultural and symbolic significance. Here are some of
                the most famous flowers in Africa
              </p>
              <p>
                Protea: Named after the Greek god Proteus, the protea is known
                for its unique and striking appearance, symbolizing diversity
                and courage in Africa.
              </p>
            </div>
          </div>
          <div className="first-section">
            <div className="textimg">
              <h1>Australia</h1>
              <p>
                Australia is home to a wide variety of flowers, many of which
                are unique to the region. Here are some of the most famous
                flowers in Australia
              </p>
              <p>
                Wattle: The golden wattle is Australia's national flower,
                symbolizing unity and resilience with its bright yellow blooms.
              </p>
            </div>
            <div className="imgmain">
              <img src={Wattle} alt="Wattle" />
            </div>
          </div>
          <div className="first-section">
            <div className="imgmain">
              <img src={AntarcticPearlwort} alt="Antarctic Pearlwort" />
            </div>
            <div className="textimg">
              <h1>Antarctica</h1>
              <p>
                Antarctica is known for its harsh and unforgiving climate, but
                even in this frozen wilderness, life finds a way to survive.
                Here are some of the most famous flowers in Antarctica
              </p>
              <p>
                Antarctic Pearlwort: One of the few flowering plants in
                Antarctica, the pearlwort is a symbol of endurance and survival
                in harsh conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
