import { useState } from "react";

const tulips = [
  {
    id: 1,
    name: "Red Emperor",
    color: "Red",
    bloomingSeason: "Early Spring",
    region: "Central Asia",
    description:
      "The Red Emperor tulip is a stunning early bloomer known for its large, vibrant red petals and strong stem. It is one of the earliest tulips to bloom, adding a burst of color to gardens in early spring.",
    imageUrl: "red-emperor",
    cultivationTips: [
      "Plant in well-drained soil with full sun exposure.",
      "Water regularly, especially during dry spells.",
      "Deadhead after blooming to encourage new growth.",
    ],
    colorMeaning:
      "Red tulips symbolize deep love and passion, making them a popular choice for romantic gestures.",
  },
  {
    id: 2,
    name: "Queen of Night",
    color: "Deep Purple",
    bloomingSeason: "Late Spring",
    region: "Turkey",
    description:
      "The Queen of Night tulip is renowned for its deep, almost black, purple color. It blooms in late spring and adds an elegant touch to any garden with its unique and striking appearance.",
    imageUrl: "queen-of-night",
    cultivationTips: [
      "Plant in a spot with full or partial sun.",
      "Ensure the soil is rich and well-drained.",
      "Fertilize in the fall for best results.",
    ],
    colorMeaning:
      "Deep purple tulips represent royalty, power, and luxury. They are often associated with admiration and respect.",
  },
  {
    id: 3,
    name: "Angelique",
    color: "Pink",
    bloomingSeason: "Mid to Late Spring",
    region: "Netherlands",
    description:
      "Angelique tulips are popular for their soft pink, peony-like blooms. They have a lovely fragrance and are often used in bouquets and garden displays.",
    imageUrl: "angelique",
    cultivationTips: [
      "Plant in groups for a stunning display.",
      "Water regularly but avoid waterlogged soil.",
      "Cut flowers in the morning when they are fully hydrated.",
    ],
    colorMeaning:
      "Pink tulips symbolize happiness, confidence, and affection. They are often given as a gesture of care and good wishes.",
  },
  {
    id: 4,
    name: "Ballerina",
    color: "Orange",
    bloomingSeason: "Late Spring",
    region: "France",
    description:
      "Ballerina tulips are distinguished by their elegant, lily-shaped orange blooms. They are known for their long-lasting flowers and pleasant scent, making them a favorite in many gardens.",
    imageUrl: "ballerina",
    cultivationTips: [
      "Plant in a sunny location for best color.",
      "Avoid overcrowding bulbs to prevent disease.",
      "Apply mulch to retain soil moisture.",
    ],
    colorMeaning:
      "Orange tulips symbolize enthusiasm, warmth, and energy. They are often associated with happiness and positivity.",
  },
  {
    id: 5,
    name: "Spring Green",
    color: "White with Green Stripes",
    bloomingSeason: "Mid Spring",
    region: "Netherlands",
    description:
      "Spring Green tulips are known for their unique white petals with green streaks. They have a fresh, modern appearance and are often used in minimalist garden designs.",
    imageUrl: "spring-green",
    cultivationTips: [
      "Plant in partial shade for the best color contrast.",
      "Keep soil consistently moist but not soggy.",
      "Deadhead flowers to prevent seed formation.",
    ],
    colorMeaning:
      "White tulips represent purity, innocence, and remembrance, while green symbolizes renewal and new beginnings.",
  },
  {
    id: 6,
    name: "Golden Apeldoorn",
    color: "Yellow",
    bloomingSeason: "Mid Spring",
    region: "Netherlands",
    description:
      "Golden Apeldoorn tulips are known for their bright, sunny yellow petals. They are a classic Darwin Hybrid, famous for their strong stems and large blooms.",
    imageUrl: "golden-apeldoorn",
    cultivationTips: [
      "Plant in full sun for vibrant color.",
      "Water regularly during dry periods.",
      "Divide bulbs every few years to maintain vigor.",
    ],
    colorMeaning:
      "Yellow tulips represent cheerfulness, hope, and friendship. They are often given to convey good luck and happiness.",
  },
  {
    id: 7,
    name: "Blue Diamond",
    color: "Violet-Blue",
    bloomingSeason: "Late Spring",
    region: "Netherlands",
    description:
      "Blue Diamond tulips are known for their double, violet-blue petals that create a full, peony-like bloom. They are a unique addition to any garden with their rare and striking color.",
    imageUrl: "blue-diamond",
    cultivationTips: [
      "Plant in a sheltered spot to protect blooms from wind.",
      "Ensure well-drained soil to prevent bulb rot.",
      "Fertilize in early spring to promote vigorous growth.",
    ],
    colorMeaning:
      "Violet-blue tulips symbolize tranquility, peace, and spirituality. They are often associated with serenity and calmness.",
  },
  {
    id: 8,
    name: "Purple Prince",
    color: "Light Purple",
    bloomingSeason: "Early Spring",
    region: "Netherlands",
    description:
      "Purple Prince tulips are a beautiful light purple variety that blooms early in the spring. They have a classic tulip shape and are often used in borders and cut flower arrangements.",
    imageUrl: "purple-prince",
    cultivationTips: [
      "Plant in well-drained soil with full to partial sun.",
      "Water deeply once a week during the growing season.",
      "Remove spent flowers to encourage more blooms.",
    ],
    colorMeaning:
      "Light purple tulips represent elegance, grace, and royalty. They convey a sense of refinement and sophistication.",
  },
  {
    id: 9,
    name: "Apricot Beauty",
    color: "Apricot",
    bloomingSeason: "Early Spring",
    region: "Netherlands",
    description:
      "Apricot Beauty tulips are known for their soft, warm apricot-colored petals. They are an early-blooming variety that adds a gentle touch to spring gardens.",
    imageUrl: "apricot-beauty",
    cultivationTips: [
      "Plant in a sunny location for the best color.",
      "Avoid overwatering to prevent bulb rot.",
      "Fertilize in the fall with a balanced fertilizer.",
    ],
    colorMeaning:
      "Apricot tulips symbolize warmth, comfort, and appreciation. They are often given to express gratitude and heartfelt thanks.",
  },
  {
    id: 10,
    name: "Ice Cream",
    color: "White and Pink",
    bloomingSeason: "Late Spring",
    region: "Netherlands",
    description:
      "Ice Cream tulips are a unique variety with petals that resemble a scoop of ice cream. The white center is surrounded by pink outer petals, making it a delightful and whimsical addition to any garden.",
    imageUrl: "ice-cream",
    cultivationTips: [
      "Plant in a sheltered location to protect the delicate blooms.",
      "Ensure the soil is rich and well-drained.",
      "Water regularly but avoid wetting the foliage.",
    ],
    colorMeaning:
      "White and pink tulips together symbolize admiration and love. They are often given to show affection and appreciation.",
  },
];

export default function App() {
  const [activePage, setActivePage] = useState("flowers");
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [userName, setUserName] = useState(null);

  function handleFlowerClick(id) {
    const selected = tulips.find((tulip) => tulip.id === id);
    setActivePage("flower-content");
    setSelectedFlower(selected);
  }

  function handleLogoClick() {
    setActivePage("flowers");
    setSelectedFlower(null);
  }

  function handleUserName(e, name) {
    e.preventDefault();

    if (!name) return;

    setUserName(name);
  }

  return (
    <div className="app">
      {!userName && <NameForm onUserName={handleUserName} />}
      {userName && (
        <>
          <Header onLogoClick={handleLogoClick} userName={userName} />
          <Body>
            {activePage === "flowers" && (
              <Flowers onFlowerClick={handleFlowerClick} />
            )}
            {activePage === "flower-content" && (
              <FlowerContent tulip={selectedFlower} />
            )}
          </Body>
        </>
      )}
    </div>
  );
}

function NameForm({ onUserName }) {
  const [name, setName] = useState("");

  return (
    <form className="name-form" onSubmit={(e) => onUserName(e, name)}>
      <label>What's your name? </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
}

function Header({ onLogoClick, userName }) {
  return (
    <header className="header">
      <h1 onClick={onLogoClick}>AshBloom</h1>
      <h2>Hi, {userName}!</h2>
    </header>
  );
}

function Body({ children }) {
  return <div className="body">{children}</div>;
}

function Flowers({ onFlowerClick }) {
  return (
    <>
      <div className="flowers-header">
        <h1>Tulips</h1>
      </div>
      <div className="flowers">
        {tulips.map((tulip) => (
          <Flower
            tulip={tulip}
            key={tulip.id}
            onFlowerClick={() => onFlowerClick(tulip.id)}
          />
        ))}
      </div>
    </>
  );
}

function Flower({ tulip, onFlowerClick }) {
  return (
    <div className="flower" onClick={onFlowerClick}>
      <div className="img-container">
        <img src={`./images/${tulip.imageUrl}.jpg`} alt={tulip.imageUrl} />
      </div>
      <p>{tulip.name}</p>
    </div>
  );
}

function FlowerContent({ tulip }) {
  return (
    <div className="flower-content">
      <div className="flower-info">
        <h1>{tulip.name} Tulips</h1>

        <p>
          <strong> {tulip.color} Tulips meaning:</strong> {tulip.colorMeaning}
        </p>

        <p>
          <strong> Description:</strong> "{tulip.description}"
        </p>

        <p>
          <strong> Cultivation Tips: </strong>
          {tulip.cultivationTips.map((tip) => tip + " ")}
        </p>
      </div>
      <div className="flower-img-des">
        <img src={`./images/${tulip.imageUrl}.jpg`} alt={tulip.imageUrl} />

        <p>
          <strong>Color:</strong> {tulip.color}
        </p>

        <p>
          <strong>Blooming Season:</strong> {tulip.bloomingSeason}
        </p>

        <p>
          <strong> Region: </strong> {tulip.region}
        </p>
      </div>
    </div>
  );
}
