import { atom } from "recoil";

export const productState = atom({
  key: "productState",
  default: [
    {
      id: "happiness",
      name: "Happiness",
      description:
        "Is your life dull and boring? Then this Happiness Sense Lab product is just for you. Experience true joy and blizzful delight. The smile on your face will last even after the effects have worn off.",
      img: "/images/happiness.png",
      price: 100,
      stock: 10,
      quantity: 1,
    },
    {
      id: "sadness",
      name: "Sadness",
      description:
        "For you who wants to stay in sorrow to dwell on memories, or perhaps share a loved ones pain.",
      img: "/images/sadness.png",
      price: 150,
      stock: 20,
      quantity: 1,
    },
    {
      id: "love",
      name: "Love",
      description:
        "Haven't found your soulmate yet? Heartbroken or want a relationship with no strings attached? Get rid of unwanted desire. We present our Love Sense Lab product. Feel real love, we all want it.",
      img: "/images/love.png",
      price: 130,
      stock: 15,
      quantity: 1,
    },
    {
      id: "fear",
      name: "Fear",
      description:
        "Add some excitement in your monotone everyday life. Triggers your body to release both adrenaline and stress hormones. Live the nightmare.",
      img: "/images/fear.png",
      price: 180,
      stock: 20,
      quantity: 1,
    },
    {
      id: "anger",
      name: "Anger",
      description:
        "As highly requested: our latest Sense Lab product. Tap into red and let the rage out. Elevate your hate and go rouge in an uncontrolled craze.",
      img: "/images/anger.png",
      price: 200,
      stock: 4,
      quantity: 1,
    },
    {
      id: "calm",
      name: "Calm",
      description:
        "Relax and find inner peace. Let this Calm Sense Lab product bring both your body and mind to stillness with a gentle, tranquil mist over all your senses.",
      img: "/images/calm.png",
      price: 120,
      stock: 10,
      quantity: 1,
    },
  ],
});
