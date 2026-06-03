/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CoffeeBlend } from "../types";

export const COFFEE_BLENDS: CoffeeBlend[] = [
  {
    id: "ethiopia-yirgacheffe",
    name: "Yirgacheffe Reserve",
    origin: "Ethiopia (Gedeo Zone)",
    roast: "Light",
    notes: ["White Jasmine", "Meyer Lemon", "Sweet Peach"],
    price: "$24.00",
    rating: 4.9,
    description: "An incredibly elegant, floral-forward cup with a bright tea-like clarity, harvested from heirloom varieties at 2,000 meters altitude.",
    bgImage: "/yirgacheffe_reserve.png"
  },
  {
    id: "guatemala-huehuetenango",
    name: "Huehuetenango Highlands",
    origin: "Guatemala (El Zapote)",
    roast: "Medium",
    notes: ["Red Apple", "Milk Chocolate", "Toasted Pecan"],
    price: "$21.50",
    rating: 4.8,
    description: "Perfectly balanced and versatile. Showcases notes of sweet red apple crisp layered over a silky, milk chocolate finish.",
    bgImage: "/huehuetenango_highlands.png"
  },
  {
    id: "sumatra-mandheling",
    name: "Mandheling Dark Noir",
    origin: "Indonesia (Sumatra)",
    roast: "Dark",
    notes: ["Dark Chocolate", "Cedarwood", "Brown Sugar"],
    price: "$22.00",
    rating: 4.7,
    description: "Deep, earthy, and full-bodied. Hand-picked beans processed via the traditional Wet Hulling method, yielding intense cedar and dark cacao tones.",
    bgImage: "/mandheling_dark_noir.png"
  },
  {
    id: "aura-house-blend",
    name: "The Obsidian Flight",
    origin: "Colombia & East Africa",
    roast: "Medium",
    notes: ["Stonefruit", "Caramel Drizzle", "Cocoa Nib"],
    price: "$19.00",
    rating: 4.9,
    description: "Our signature house favorite designed for everyday indulgence. Delivers a vibrant, velvety body with absolute sweet caramel elegance.",
    bgImage: "/the_obsidian_flight.jpeg"
  }
];
