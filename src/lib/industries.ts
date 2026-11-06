import { Building, Heart, Factory, ShoppingCart, Shield, Landmark } from 'lucide-react';
import type { RelatedIndustry } from '../components/IndustryLayout';

export const allRelatedIndustries: RelatedIndustry[] = [
  { name: 'Banking & Finance', path: '/industries/banking', icon: Building },
  { name: 'Healthcare', path: '/industries/healthcare', icon: Heart },
  { name: 'Manufacturing', path: '/industries/manufacturing', icon: Factory },
  { name: 'Retail & E-commerce', path: '/industries/retail', icon: ShoppingCart },
  { name: 'Insurance', path: '/industries/insurance', icon: Shield },
  { name: 'Government', path: '/industries/government', icon: Landmark },
];

export function getRelatedIndustries(excludePath: string): RelatedIndustry[] {
  return allRelatedIndustries.filter((ind) => ind.path !== excludePath);
}
