/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CoffeeBlend {
  id: string;
  name: string;
  origin: string;
  roast: "Light" | "Medium" | "Dark";
  notes: string[];
  price: string;
  rating: number;
  description: string;
  bgImage?: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  iconName: "Leaf" | "Coffee" | "Truck" | "Award";
}
